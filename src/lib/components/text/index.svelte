<script>
  export let type = 'p';
  let className = '';
  export { className as class };
  export let color = null;
</script>

{#if type === 'h1'}
  <h1 class="font-main text-2xl font-bold {!color && 'text-heading'} md:text-4xl {className}">
    <slot />
  </h1>
{:else if type === 'h2'}
  <h2 class="font-main text-2xl font-bold {!color && 'text-heading'} md:text-4xl {className}">
    <slot />
  </h2>
{:else if type === 'h3'}
  <h3 class="font-main text-xl font-bold {!color && 'text-heading'} {className}">
    <slot />
  </h3>
{:else if type === 'h4'}
  <h4 class="font-main font-bold {!color && 'text-heading'} {className}">
    <slot />
  </h4>
{:else if type === 'h5'}
  <h5 class="font-main font-bold {!color && 'text-heading'} {className}">
    <slot />
  </h5>
{:else if type === 'h6'}
  <h6 class="font-main font-bold {!color && 'text-heading'} {className}">
    <slot />
  </h6>
{:else}
  <p class="font-main text-base {!color && 'text-text'} {className}">
    <slot />
  </p>
{/if}
