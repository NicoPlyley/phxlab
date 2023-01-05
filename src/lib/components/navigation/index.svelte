<script>
	import { Container, Logo } from '$lib';
	import { Hamburger } from 'svelte-hamburgers';

	let open;
</script>

<nav class="fixed top-0 h-20 w-full">
	<Container class="my-auto flex h-full items-center justify-between">
		<div class="flex items-center">
			<Logo class="h-14" />
			<p class="ml-2.5 font-bold leading-4 text-white">
				Phoenix<br />
				Tech Lab
			</p>
		</div>
		<Hamburger bind:open --color="white" />
	</Container>
</nav>
