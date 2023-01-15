<script>
	import { Text } from '$lib';

	export let title;
	export let items;
	export let icon;
</script>

<div
	class="{!icon ? 'w-1/2' : 'w-auto'} mb-10 text-center md:mb-0 md:w-auto md:text-left lg:w-auto"
>
	<Text class="font-bold">{title}</Text>
	{#each items as item}
		{#if icon}
			<div class="flex items-center justify-center gap-3 text-center md:justify-start md:text-left">
				<div class="hidden md:block">{@html item.icon}</div>
				<Text class="my-3">
					<a class="hover:underline" href={item.link}>{@html item.title}</a>
				</Text>
			</div>
		{:else}
			<Text class="my-3"><a class="hover:underline" href={item.link}>{item.title}</a></Text>
		{/if}
	{/each}
</div>
