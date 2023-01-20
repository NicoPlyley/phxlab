<script>
  import { slide } from 'svelte/transition';
  import { idxOfOpenFaq } from './store';
  import { Text } from '$lib';

  export let idx;
  export let data = {};
  let faqIsOpen = false;

  const handleFaqToggle = () => {
    const selectedText = window.getSelection().toString().length;
    if (!selectedText) {
      faqIsOpen = !faqIsOpen;
      $idxOfOpenFaq = faqIsOpen ? idx : null;
    }
  };

  const handleFaqClose = () => {
    if (idx !== $idxOfOpenFaq) {
      faqIsOpen = false;
    }
  };

  $: $idxOfOpenFaq, handleFaqClose();


</script>

<div class="faq relative my-7 w-full py-10 px-12 rounded-2xl cursor-pointer {faqIsOpen ? 'bg-tertiary/0' : 'bg-tertiary'}"
     on:click={handleFaqToggle}
     on:keypress={(e) => {
        if (e.key === 'Enter') {
          handleFaqToggle();
        }
      }}

     style="{faqIsOpen && 'background: linear-gradient(89.88deg, #2FAA9B 0.07%, #A2B747 99.87%);'}"

>
  <div>
    <Text class="text-white transition-colors"
          color={faqIsOpen}
          type="h3"
    >
      {data.question}
    </Text>
  </div>
  {#if faqIsOpen}
    <div class="h-full"
         transition:slide
    >
      <Text
        class="pt-4 text-white transition-colors z-10"
        color
      >
        {data.answer}
      </Text>
    </div>
  {/if}
</div>
