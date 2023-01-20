<script>
  import { Button, Container, Header, imageHandler, Text, tw } from '$lib';

  export let data = {};
</script>

<Header
  background={imageHandler('header-desert.webp', true)}
  class={tw(
    "pt-32 pb-20",
    "md:h-[600px]",
    "lg:h-[800px]"
    )}
>
  <Container class="flex h-full flex-col items-start justify-center text-center">
    <!-- Title -->
    <Text class={tw(
      "w-full text-white md:text-4xl",
      "lg:text-6xl"
      )}
          color
          type="h1"
    >
      {data.title}
    </Text>

    <!-- Description -->
    <Text class={tw(
      "mt-2.5 mb-5 w-full text-white",
      "md:my-7 md:text-lg",
      "lg:text-2xl"
      )}
          color
    >{data.description}</Text
    >

    <!-- Button -->
    <Button class="mx-auto w-auto text-text"
            link={data.button.link}
            white
    >
      {data.button.title}
    </Button>
  </Container>
</Header>
