<script>
  import Card from './card.svelte';

  export let reviews;
</script>

<div class="gap-10 md:flex">
  {#each reviews as review, idx}
    <Card {idx}
          data={review}
    />
  {/each}
</div>
