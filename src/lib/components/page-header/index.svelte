<script>
	import { Container, Header, Text, tw } from '$lib';

	export let image = '';
	export let data = {};
	let { title, subtitle } = data;
</script>

<Header class={tw('h-[300px]', 'lg:h-[400px]')} background={image}>
	<Container class="flex h-full items-center justify-center">
		<Text type="h1" color class="text-center text-white">
			{title}
			{#if subtitle}
				<span class="block text-2xl font-normal">{subtitle}</span>
			{/if}
		</Text>
	</Container>
</Header>
