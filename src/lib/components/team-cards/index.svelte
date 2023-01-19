<script>
	import { tw } from '$lib';
	import Card from './Card.svelte';

	export let data = {};
</script>

<div class={tw('mt-7 flex flex-wrap justify-evenly', 'md')}>
	{#each data as person}
		<Card {person} />
	{/each}
</div>
