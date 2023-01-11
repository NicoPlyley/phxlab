<script>
	import Card from './Card.svelte';

	export let data;
</script>

<div class="flex flex-wrap lg:flex-nowrap lg:gap-10">
	{#each data as item}
		<Card {...item} />
	{/each}
</div>
