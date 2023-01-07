<script>
	import { About, Header } from '$lib/blocks/home';
	import Services from '$lib/blocks/home/Services.svelte';

	export let data;
</script>

<Header data={data.header} />

<About data={data.about} />

<Services />
