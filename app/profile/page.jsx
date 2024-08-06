'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import Profile from '@components/Profile';

const MyProfile = () => {
	const router = useRouter();
	const { data: session } = useSession();

	const [myPosts, setMyPosts] = useState([]);

	useEffect(() => {
		const fetchPosts = async () => {
			const response = await fetch(`/api/users/${session?.user.id}/posts`);
			const data = await response.json();

			setMyPosts(data);
		};

		if (session?.user.id) fetchPosts();
	}, [session?.user.id]);

	const handleEdit = (post) => {
		router.push(`/update-prompt?id=${post._id}`);
	};

	const handleDelete = async (post) => {
		const hasConfirmed = confirm(
			'Are you sure you want to delete this prompt?'
		);

		if (hasConfirmed) {
			try {
				console.log('Attempting to delete post with ID:', post._id);
				const response = await fetch(`/api/prompt/${post._id.toString()}`, {
					method: 'DELETE',
				});

				if (response.ok) {
					console.log('Post deleted successfully');
					const filteredPosts = myPosts.filter((item) => item._id !== post._id);
					setMyPosts(filteredPosts);
				} else {
					console.error('Failed to delete post:', await response.text());
				}
			} catch (error) {
				console.log('Error deleting post:', error);
			}
		}
	};

	return (
		<Profile
			name="My"
			desc="Welcome to your personalized profile page. Share your exceptional prompts and inspire others with the power of your imagination"
			data={myPosts}
			handleEdit={handleEdit}
			handleDelete={handleDelete}
		/>
	);
};

export default MyProfile;
