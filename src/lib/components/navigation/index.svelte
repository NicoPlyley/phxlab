<script>
  import { fade } from 'svelte/transition';
  import { Container, Logo, Text } from '$lib';
  import { Hamburger } from 'svelte-hamburgers';

  export let data;

  let open = false;
</script>

<nav
  class="top-0 h-20 w-full transition-colors {open && 'bg-primary'} {open
		? 'fixed'
		: 'absolute'} z-10"
>
  <Container class="my-auto flex h-full items-center justify-between">
    <a class="flex items-center"
       href="/"
    >
      <Logo class="h-14" />
      <p class="ml-2.5 select-none font-bold leading-4 text-white">
        Phoenix<br />
        Tech Lab
      </p>
    </a>
    <div class="md:hidden">
      <Hamburger --color="white"
                 bind:open
      />
    </div>
    <div class="hidden justify-evenly gap-8 text-base md:flex">
      {#each data.links as item}
        <Text color
              class="text-white"
        ><a href={item.link}>{item.title}</a></Text>
      {/each}
    </div>
  </Container>
  {#if open}
    <div
      transition:fade={{ duration: 150 }}
      class="mobile-nav fixed top-20 left-0 z-10 flex w-full flex-col bg-primary"
    >
      {#each data.links as item, idx}
        <Text
          color
          class="w-full border-white/30 py-7 text-center text-2xl text-white {idx !==
						data.links.length - 1 && 'border-b'}"
        >
          <a on:click={() => (open = false)}
             href={item.link}
          >{item.title}</a>
        </Text>
      {/each}
    </div>
  {/if}
</nav>

<style>
    .mobile-nav {
        height: calc(100vh - 80px);
    }
</style>
