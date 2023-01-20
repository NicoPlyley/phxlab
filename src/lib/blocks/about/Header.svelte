<script>
  import { imageHandler, PageHeader } from '$lib';

  export let data = {};
</script>

<PageHeader {data}
            image={imageHandler(data.image.path, data.image.dev)}
/>
