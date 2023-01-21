<script>
  import { Container, imageHandler, Text, tw } from '$lib';

  export let data = {};
</script>

<Container class={tw('flex flex-col gap-10 my-16', 'xl:flex-row')}>
  <img
    alt={data.image.alt}
    class={tw('w-full object-cover pb-4 rounded-2xl', 'xl:pb-0')}
    src={imageHandler(data.image.path, data.image.dev)}
  />
  <div>
    <Text type="h2">
      {data.title}
    </Text>
    {#each data.description as line}
      <Text class="py-2">
        {line}
      </Text>
    {/each}
  </div>
</Container>
