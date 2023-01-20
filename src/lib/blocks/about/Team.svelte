<script>
  import { Container, imageHandler, TeamCards, Text } from '$lib';

  export let data = {};
</script>

<div class="my-7 mb-14 py-10 bg"
     style={`
      background: linear-gradient(0deg, rgba(27, 124, 77, 0.90), rgba(27, 124, 77, 0.90)), url(${imageHandler(data.background, true)});
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
     `}
>
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

<style>
    .bg {
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
    }
</style>
