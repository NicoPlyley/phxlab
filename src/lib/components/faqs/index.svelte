<script>
  import Faq from './Faq.svelte';

  export let data = {};
</script>

{#each data as faq, idx}
  <Faq
    {idx}
    data={faq}
  />
{/each}
