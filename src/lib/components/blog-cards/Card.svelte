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

<div class="overflow-hidden rounded-2xl bg-white flex flex-col w-1/3"
     style="box-shadow: 0 10px 50px rgba(29, 74, 133, 0.1);"
>
  <img alt={title}
       src={imageHandler(image.path, true)}
  />
  <div class="py-4 px-7 flex flex-col justify-between flex-1">
    <div>
      <Text>{date.toLocaleString()}</Text>
      <Text class="py-4"
            type="h3"
      >
        {title}
      </Text>
    </div>
    <Button class="text-white text-center">Read Post</Button>
  </div>
</div>
