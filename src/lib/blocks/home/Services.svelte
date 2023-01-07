<script>
	import { Background, Container, imageHandler, ServiceCards, Text } from '$lib';

	export let data;
</script>

<Background class="w-full" image={imageHandler('horseshoe-bend.webp', true)}>
	<Container class="py-7 text-center md:py-20">
		<Text class="text-white" type="h2">{data.title}</Text>
		<ServiceCards data={data.cards} />
	</Container>
</Background>
