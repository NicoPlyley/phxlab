<script>
	export let link = '';
	export let blank = false;
	export let white = false;
	let className = '';
	export { className as class };
</script>

{#if blank}
	<a
		href={link}
		class="inline-block rounded-full py-3 px-6 font-bold {className} {white
			? 'bg-white'
			: 'button'}"
		target="_blank"
		rel="noreferrer"><slot /></a
	>
{:else}
	<a
		href={link}
		class="inline-block rounded-full py-3 px-6 font-bold {className} {white
			? 'bg-white'
			: 'button'}"><slot /></a
	>
{/if}

<style>
	.button {
		background: linear-gradient(89.62deg, #2faa9b 0.3%, #a2b747 99.67%);
		border-radius: 30px;
	}
</style>
