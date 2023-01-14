<script>
	import Card from './Card.svelte';

	export let data;
</script>

<div class="flex flex-wrap justify-center gap-10 lg:flex-nowrap">
	{#each data as item}
		<Card {...item} />
	{/each}
</div>
