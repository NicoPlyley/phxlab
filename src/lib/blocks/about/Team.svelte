<script>
  import { Container, TeamCards, Text } from '$lib';

  export let data = {};
</script>

<div class="my-7 mb-14 bg-primary py-10">
  <Container>
    <Text class="text-center text-white"
          color
          type="h2"
    >
      {data.title}
    </Text>
    <TeamCards data={data.people} />
  </Container>
</div>
