<script>
	import { Container, TeamCards, Text } from '$lib';

	export let data = {};
</script>

<div class="my-7 bg-primary py-10">
	<Container>
		<Text type="h2" color class="text-center text-white">
			{data.title}
		</Text>
		<TeamCards data={data.people} />
	</Container>
</div>
