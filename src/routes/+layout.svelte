<script>
	import '../app.css';
	import { Footer, Navigation } from '$lib';

	export let data = {};
	let { footer, navigation } = data;
</script>

<Navigation data={navigation} />
<slot />
<Footer data={footer} />
