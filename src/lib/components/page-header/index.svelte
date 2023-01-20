<script>
  import { Container, Header, Text, tw } from '$lib';

  export let image = '';
  export let data = {};
  let { title, subtitle } = data;
</script>

<Header background={image}
        class={tw('h-[300px]', 'lg:h-[400px]')}
>
  <Container class="flex h-full items-center justify-center">
    <Text class="text-center text-white"
          color
          type="h1"
    >
      {title}
      {#if subtitle}
        <span class="block text-2xl font-normal">{subtitle}</span>
      {/if}
    </Text>
  </Container>
</Header>
