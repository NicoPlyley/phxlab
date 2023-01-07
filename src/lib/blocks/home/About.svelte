<script>
	import { Button, Container, imageHandler, Text } from '$lib';
</script>

<Container class="gap-12 py-20 lg:flex">
	<img
		src={imageHandler('owners.webp', true)}
		alt="About Phoenix Tech Lab"
		class="w-full rounded-2xl object-cover lg:w-[600px]"
	/>
	<div class="lg:w-1/2">
		<Text type="h2" class=" mb-4 text-4xl text-text">About</Text>
		<Text class="text-text">
			Phoenix Tech Lab, was founded in 2012 with the goal of providing top-quality web design
			services to businesses and individuals. Since then, we have grown into a team of skilled
			designers and developers who are passionate about creating visually stunning and user-friendly
			websites.
			<br />
			<br />
			We pride ourselves on our ability to understand our clients' needs and goals, and we work closely
			with them to create custom solutions that meet their specific requirements. Whether you are a small
			business looking to establish an online presence or a large corporation in need of a comprehensive
			rebranding, we have the expertise and experience to help you succeed.
		</Text>
		<Button class="mt-7 text-white" link="/about">Learn More</Button>
	</div>
</Container>
