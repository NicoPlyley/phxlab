<script>
	import { Text } from '$lib';

	export let data = null;
	let { author, message } = data;
</script>

<div class="card mb-10 flex flex-col justify-between rounded-2xl p-5 md:w-1/2 lg:p-14">
	<Text>
		{message}
	</Text>
	<Text class="pt-7 font-bold">{author}</Text>
</div>

<style>
	.card {
		box-shadow: 0 10px 50px rgba(29, 74, 133, 0.07);
	}
</style>
