<script>
	import { Button, Container, Header, imageHandler } from '$lib';

	export let data;
</script>

<Header background={imageHandler('header-desert.webp', true)}>
	<Container class="flex h-full flex-col items-start justify-center text-center">
		<h1 class="text-2xl font-bold text-white">{data.title}</h1>
		<p class="mt-2.5 mb-5 text-base text-white">{data.description}</p>
		<Button class="mx-auto w-auto" link={data.button.link}>
			{data.button.title}
		</Button>
	</Container>
</Header>
