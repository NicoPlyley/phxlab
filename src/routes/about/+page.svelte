<script>
	import { About, Header, Team } from '$lib/blocks/about';
	import { Reviews } from '$lib/blocks/home';

	export let data = {};
	let { seo, header, about, team, reviews } = data;
</script>

<svelte:head>
	<title>{seo.title}</title>
	<meta name="description" content={seo.description} />
</svelte:head>

<Header data={header} />

<About data={about} />

<Team data={team} />

<Reviews data={reviews} />
