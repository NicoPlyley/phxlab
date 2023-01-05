<script>
	export let type = 'p';
	let className = '';
	export { className as class };
</script>

{#if type === 'h1'}
	<h1 class="font-heading text-2xl font-bold md:text-4xl {className}">
		<slot />
	</h1>
{:else if type === 'h2'}
	<h2 class="font-heading text-2xl font-bold md:text-4xl {className}">
		<slot />
	</h2>
{:else if type === 'h3'}
	<h3 class="font-heading font-bold {className}">
		<slot />
	</h3>
{:else if type === 'h4'}
	<h4 class="font-heading font-bold {className}">
		<slot />
	</h4>
{:else if type === 'h5'}
	<h5 class="font-heading font-bold {className}">
		<slot />
	</h5>
{:else if type === 'h6'}
	<h6 class="font-heading font-bold {className}">
		<slot />
	</h6>
{:else}
	<p class="text-base {className}">
		<slot />
	</p>
{/if}
