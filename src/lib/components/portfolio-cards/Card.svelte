<script>
	import { Button, Text } from '$lib';

	export let image;
	export let description;
	export let link;
</script>

<div class="card mb-7 w-[350px] rounded-xl bg-white lg:m-0">
	<img
		src={image}
		width="350"
		height="245"
		class="pointer-events-none max-h-[340px] w-full"
		alt="Test"
	/>
	<div class="p-7">
		<Text>{description}</Text>
		<Button class="mt-7 text-white" {link}>View Case Study</Button>
	</div>
</div>

<style>
	.card {
		box-shadow: 0 10px 50px rgba(29, 74, 133, 0.15);
		overflow: hidden;
	}
</style>
