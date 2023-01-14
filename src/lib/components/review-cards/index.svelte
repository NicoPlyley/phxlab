<script>
	import Card from './card.svelte';

	export let reviews;
</script>

<div class="flex gap-10">
	{#each reviews as review}
		<Card data={review} />
	{/each}
</div>
