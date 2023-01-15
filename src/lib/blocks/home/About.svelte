<script>
	import { Button, Container, imageHandler, Text } from '$lib';

	export let data;
</script>

<Container class="gap-12 py-20 lg:flex">
	<img
		width="354"
		height="200"
		src={imageHandler('owners.webp', true)}
		alt="About Phoenix Tech Lab"
		class="w-full rounded-2xl object-cover lg:w-[600px]"
	/>
	<div class="lg:w-1/2">
		<Text type="h2" class="mt-7 mb-4 text-4xl text-text lg:mt-0">{data.title}</Text>
		<Text class="text-text">
			{@html data.description}
		</Text>
		<Button class="mt-7 text-white" link={data.button.link}>{data.button.title}</Button>
	</div>
</Container>
