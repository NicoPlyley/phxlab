<script>
	import Card from './Card.svelte';

	export let data;
</script>

<div class="flex w-full justify-evenly gap-[20px] py-20">
	{#each data as item, idx}
		<Card {...item} {idx} />
	{/each}
</div>
