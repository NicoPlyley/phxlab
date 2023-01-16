<script>
	import { Background, Container, imageHandler, ServiceCards, Text } from '$lib';

	export let data;
</script>

<Background class="w-full" image={imageHandler('horseshoe-bend-az.webp', true)}>
	<Container class="py-7 text-center md:pt-20 md:pb-28">
		<Text color class="text-white" type="h2">{data.title}</Text>
		<ServiceCards data={data.cards} />
	</Container>
</Background>
