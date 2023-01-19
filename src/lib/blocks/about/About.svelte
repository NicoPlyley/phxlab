<script>
	import { Container, imageHandler, Text, tw } from '$lib';

	export let data = {};
</script>

<Container class={tw('flex flex-col gap-10 py-14', 'xl:flex-row')}>
	<img
		class={tw('w-full object-cover pb-4', 'xl:pb-0')}
		src={imageHandler(data.image.path, data.image.dev)}
		alt={data.image.alt}
	/>
	<div>
		<Text type="h2">
			{data.title}
		</Text>
		{#each data.description as line}
			<Text class="py-2">
				{line}
			</Text>
		{/each}
	</div>
</Container>
