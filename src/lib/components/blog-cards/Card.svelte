<script>
	import { Button, imageHandler, Text } from '$lib';

	export let data = {};

  let { title, date, image } = data;

  date = new Date(date).toLocaleDateString('en-us', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
</script>

<div class="overflow-hidden rounded-2xl bg-white">
  <img alt={title}
       src={imageHandler(image.path, true)}
  />
  <div class="py-4 px-3">
    <Text>{date.toLocaleString()}</Text>
    <Text class="py-4"
          type="h3"
    >
      {title}
    </Text>
    <Button class="text-white">Read Post</Button>
  </div>
</div>
