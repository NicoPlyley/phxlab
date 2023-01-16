<script>
	import { onMount } from 'svelte';

	export let image = '';
	let className = '';
	export { className as class };

	let y = 0;
	let element;
	let elementTop;

	function getElementTop() {
		let position = element.getBoundingClientRect();
		elementTop = position.top + y;
	}

	function updateOnScroll() {
		getElementTop();
	}

	onMount(() => {
		getElementTop();
	});
</script>

<div
	bind:this={element}
	class={className}
	style={`
			background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.2) 100%, rgba(0, 0, 0, 0.2) 100%), url("${image}");
      background-size: cover;
      background-position: center ${(y - elementTop) * 0.25}px;
      background-attachment: local;
      background-repeat: no-repeat;
 `}
>
	<slot />
</div>

<svelte:window bind:scrollY={y} on:scroll={updateOnScroll} />
