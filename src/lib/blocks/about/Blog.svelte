<script>
	import { BlogCards, Container, Text } from '$lib';

	export let data = {};
  const { title, blog } = data;
</script>

<div class="mb-40 bg-secondary/10 py-20">
  <Container>
    <Text class="text-center pb-7"
          type="h2"
    >{title}</Text>
    <BlogCards data={blog} />
  </Container>
</div>
