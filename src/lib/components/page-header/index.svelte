<script>
	import { Container, Header, Text } from '$lib';

	export let image = '';
	export let data = {};
	let { title, subtitle } = data;
</script>

<Header class="h-[500px]" background={image}>
	<Container class="flex h-full items-center justify-center">
		<Text type="h1" color class="text-center text-white">
			{title}
			{#if subtitle}
				<span class="block text-2xl font-normal">{subtitle}</span>
			{/if}
		</Text>
	</Container>
</Header>
