<script>
	import { About, Header } from '$lib/blocks/about';

	export let data = {};
	let { seo, header, about } = data;
</script>

<svelte:head>
	<title>{seo.title}</title>
	<meta name="description" content={seo.description} />
</svelte:head>

<Header data={header} />

<About data={about} />
