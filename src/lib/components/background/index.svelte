<script>
	export let image = '';
	let className = '';
	export { className as class };
</script>

<div
	class={className}
	style={`
			background-image: linear-gradient(90deg, rgba(0, 0, 0, 0.2) 100%, rgba(0, 0, 0, 0.2) 100%), url("${image}");
      background-size: cover;
      background-position: center center;
 `}
>
	<slot />
</div>
