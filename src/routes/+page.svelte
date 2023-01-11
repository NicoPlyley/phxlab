<script>
	import { About, Header } from '$lib/blocks/home';
	import Services from '$lib/blocks/home/Services.svelte';
	import Portfolio from '$lib/blocks/home/Portfolio.svelte';

	export let data;
</script>

<Header data={data.header} />

<About data={data.about} />

<Services data={data.services} />

<Portfolio data={data.portfolio} />
