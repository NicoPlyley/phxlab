<script>
  import { Container, Faqs, Text, tw } from '$lib';

  export let data = {};
  const { title, faqs } = data;
</script>

<Container>
  <div class={tw(
    "rounded-2xl",
    "lg:bg-tertiary-90 lg:p-32"
    )}
  >
    <Text class="text-text text-center pb-12"
          color
          type="h2"
    >
      {title}
    </Text>
    <Faqs data={faqs} />
  </div>
</Container>
