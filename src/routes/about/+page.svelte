<script>
  import { About, Blog, Header, Team } from '$lib/blocks/about';
  import { Reviews } from '$lib/blocks/home';
  import Faqs from '$lib/blocks/about/Faqs.svelte';

  export let data = {};
  const { seo, header, about, team, reviews, blog, faqs } = data;
</script>

<svelte:head>
  <title>{seo.title}</title>
  <meta content={seo.description}
        name="description"
  />
</svelte:head>

<Header data={header} />

<About data={about} />

<Team data={team} />

<Reviews data={reviews} />

<Faqs data={faqs} />

<Blog data={blog} />
