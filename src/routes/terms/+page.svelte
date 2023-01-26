<script>
  import { Contact, Header } from '$lib/blocks/about';
  import { Container, Text } from '$lib';

  export let data = {};
  const { seo, header, content } = data;
</script>

<svelte:head>
  <title>{seo.title}</title>
  <meta content={seo.description}
        name="description"
  />
</svelte:head>

<Header data={header} />

<Container class="my-7">
  <Text>
    Welcome to Phoenix Tech Lab, a web development agency. By accessing our website, products and services, you agree to
    the following terms and conditions (the "Terms"). If you do not agree to these terms, please do not use our website
    or services.
  </Text>

  <ol class="list-decimal list-inside font-bold">
    {#each content as item}
      <li>
        <Text class="inline-block mt-5 mb-2"
              type="h3"
        >
          {item.title}
        </Text>
        <ul class="list-disc font-normal">
          {#each item.list as list}
            <li class="ml-10 my-2">
              {list}
            </li>
          {/each}
        </ul>
      </li>
    {/each}
  </ol>

</Container>

<Contact />
