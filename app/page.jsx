import Feed from '@components/Feed';

const Home = () => {
	return (
		<section className="w-full flex-center flex-col">
			<h1 className="head_text text-center">
				Discover & share
				<br className="max-md:hidden" />
				<span className="orange_gradient text-center">AI-Powered Prompts</span>
			</h1>
			<p className="desc text-center">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
				Suspendisse lectus tortor, consectetur et tristique pellentesque,
				fermentum non, convallis vitae, ante. Maecenas ultricies mi vitae
				mauris. Nunc suscipit, libero eget dignissim lobortis,
			</p>
			<Feed />
		</section>
	);
};

export default Home;
