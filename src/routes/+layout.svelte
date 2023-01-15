<script>
	import '../app.css';
	import { Footer, Navigation } from '$lib';

	export let data = {};
	let { footer } = data;
</script>

<Navigation />
<slot />
<Footer data={footer} />
