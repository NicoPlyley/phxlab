<script>
  import { Container, ReviewCards, Text } from '$lib';

  export let data = {};
  let { title, reviews } = data;
</script>

<Container class="my-16">
  <Text class="mb-12 text-center text-text"
        type="h2"
  >{title}</Text>

  <ReviewCards {reviews} />
</Container>
