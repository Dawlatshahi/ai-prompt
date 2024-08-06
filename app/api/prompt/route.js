import Prompt from '@models/prompt';
import { connectToDB } from '@utils/database';

export const GET = async (request) => {
	try {
		await connectToDB();

		const prompts = await Prompt.find({}).populate('creator');

		// Set Cache-Control headers
		const headers = new Headers({
			'Cache-Control': 'no-cache, no-store, must-revalidate', // Adjust as needed
			Pragma: 'no-cache',
			Expires: '0',
		});

		return new Response(JSON.stringify(prompts), { status: 200, headers });
	} catch (error) {
		return new Response('Failed to fetch all prompts', { status: 500 });
	}
};
