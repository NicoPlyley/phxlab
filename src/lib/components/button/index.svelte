<script>
	export let link = '';
	export let blank = false;
	let className = '';
	export { className as class };
</script>

{#if blank}
	<a href={link} target="_blank" rel="noreferrer" class="button"><slot /></a>
{:else}
	<a href={link} class="rounded-full bg-white py-3 px-6 font-bold {className}"><slot /></a>
{/if}
