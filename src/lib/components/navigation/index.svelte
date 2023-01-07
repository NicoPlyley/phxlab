<script>
	import { Container, Logo } from '$lib';
	import { Hamburger } from 'svelte-hamburgers';

	let open;
</script>

<nav class="absolute top-0 h-20 w-full">
	<Container class="my-auto flex h-full items-center justify-between">
		<div class="flex items-center">
			<Logo class="h-14" />
			<p class="ml-2.5 select-none font-bold leading-4 text-white">
				Phoenix<br />
				Tech Lab
			</p>
		</div>
		<div class="md:hidden">
			<Hamburger bind:open --color="white" />
		</div>
		<div class="hidden justify-evenly gap-8 text-base text-white md:flex">
			<a href="/">Home</a>
			<a href="/about">About</a>
			<a href="/services">Services</a>
			<a href="/portfolio">Portfolio</a>
			<a href="/contact">Contact</a>
		</div>
	</Container>
</nav>
