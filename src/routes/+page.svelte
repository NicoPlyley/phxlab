<script>
	import { About, Header, Portfolio, Reviews, Services } from '$lib/blocks/home';

	export let data;
</script>

<Header data={data.header} />

<About data={data.about} />

<Services data={data.services} />

<Portfolio data={data.portfolio} />

<Reviews data={data.reviews} />
