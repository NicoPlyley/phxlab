<script>
  import { About, Header, Portfolio, Reviews, Services } from '$lib/blocks/home';

  export let data;
</script>

<svelte:head>
  <title>{data.title}</title>
  <meta content={data.description}
        name="description"
  />
</svelte:head>

<Header data={data.header} />

<About data={data.about} />

<Services data={data.services} />

<Portfolio data={data.portfolio} />

<Reviews data={data.reviews} />
