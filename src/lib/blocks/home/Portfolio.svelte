<script>
	import { Container, PortfolioCards, Text } from '$lib';

	export let data;
</script>

<Container class="relative top-[-120px] flex flex-col items-center">
	<Text type="h2" class="mb-7 text-white">{data.title}</Text>
	<PortfolioCards data={data.cards} />
</Container>
