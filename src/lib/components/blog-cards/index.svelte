<script>
	import Card from './Card.svelte';

	export let data = {};
</script>

<div class="flex justify-evenly gap-20">
  {#each data as post}
    <Card data={post} />
  {/each}
</div>
