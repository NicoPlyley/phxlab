<script>
	import { About, Header, Team } from '$lib/blocks/about';

	export let data = {};
	let { seo, header, about, team } = data;
</script>

<svelte:head>
	<title>{seo.title}</title>
	<meta name="description" content={seo.description} />
</svelte:head>

<Header data={header} />

<About data={about} />

<Team data={team} />
