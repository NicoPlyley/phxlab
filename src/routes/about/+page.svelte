<script>
	import { Header } from '$lib/blocks/about';

	export let data = {};
	let { seo, header } = data;
</script>

<svelte:head>
	<title>{seo.title}</title>
	<meta name="description" content={seo.description} />
</svelte:head>
<Header data={header} />
