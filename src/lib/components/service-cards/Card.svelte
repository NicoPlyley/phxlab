<script>
	import { Text } from '$lib';

	export let title;
	export let description;
	export let icon;
	export let idx;
</script>

<div class="flex h-full flex-col rounded-2xl bg-white px-7 py-4 ">
	<div class="h-1/4 w-full">
		<div
			class="m-auto flex h-20 w-20 items-center justify-center rounded-3xl {idx % 2 !== 0
				? 'bg-primary/10'
				: 'bg-secondary/10'}"
		>
			{@html icon}
		</div>
	</div>
	<div class="h-3/4 pt-10">
		<Text type="h3" class="text-lg">{title}</Text>
		<Text class="text-sm">{description}</Text>
	</div>
</div>
