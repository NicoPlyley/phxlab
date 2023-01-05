<script>
	import { Button, Container, Header, imageHandler, Text } from '$lib';

	export let data;
</script>

<Header
	class="pt-32 pb-20 md:h-[600px] lg:h-[800px]"
	background={imageHandler('header-desert.webp', true)}
>
	<Container class="flex h-full flex-col items-start justify-center text-center">
		<Text type="h1" class="w-full text-white md:text-4xl lg:text-6xl">{data.title}</Text>
		<Text class="mt-2.5 mb-5 w-full text-white md:my-7 md:text-lg lg:text-2xl"
			>{data.description}</Text
		>
		<Button class="mx-auto w-auto" link={data.button.link}>
			{data.button.title}
		</Button>
	</Container>
</Header>
