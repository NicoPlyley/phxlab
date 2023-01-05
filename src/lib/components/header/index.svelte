<script>
	let className = '';
	export { className as class };
	export let background = '';
</script>

<div
	style={`
			background-image: linear-gradient(89.89deg, rgba(0, 0, 0, 0.78) 0.11%, rgba(0, 0, 0, 0.1) 99.91%), linear-gradient(0deg, rgba(0, 0, 0, 0.14), rgba(0, 0, 0, 0.14)), url("${background}");
      background-size: cover;
      background-position: center center;
 `}
	class="w-full {className}"
>
	<slot />
</div>
