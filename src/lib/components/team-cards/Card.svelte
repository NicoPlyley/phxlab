<script>
	import { imageHandler, Text } from '$lib';

	export let person = {};
	let { name, title, image } = person;
</script>

<div class="mb-7 overflow-hidden rounded-2xl bg-white">
	<img src={imageHandler(image.path, image.dev)} alt={image.alt} />
	<div class="py-4 text-center">
		<Text type="h3">
			{name}
		</Text>
		<Text>
			{title}
		</Text>
	</div>
</div>
