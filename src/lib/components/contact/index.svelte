<script>
  import { Button, contactInfoStore, Text, tw } from '$lib';
  import Input from './Input.svelte';
  import TextArea from './TextArea.svelte';
</script>

<div class={'contact ' + tw(
  'flex rounded-2xl flex-wrap',
  'lg:flex-nowrap'
  )}
>

  <!-- Contact Info -->
  <div class={tw(
    'bg-primary rounded-2xl p-20 w-full',
    'lg:w-auto'
    )}
  >
    <Text class="text-white mb-4"
          color
          type="h2"
    >
      Contact Info
    </Text>

    <!-- Contact Info -->
    {#each $contactInfoStore.contact as item}
      <div class="flex items-center gap-4 my-7">
        <div class="fill-white">
          {@html item.icon}
        </div>
        <div>
          <Text color
                class="text-white"
          >
            {item.description}
          </Text>
          <Text type="h4"
                color
                class="text-white"
          >
            {@html item.title}
          </Text>
        </div>
      </div>
    {/each}

    <hr class="border-t-white" />

    <!-- Social Media -->
    <div class="flex mt-7 justify-center gap-7">
      {#each $contactInfoStore.social as item}
        <a href={item.url}
           target="_blank"
           rel="noreferrer"
           class="fill-white block h-7 w-7"
        >
          {@html item.icon}
        </a>
      {/each}
    </div>
  </div>

  <!-- Contact Form -->
  <div class="flex w-full justify-center py-20">
    <div class="flex flex-col gap-4 justify-center">
      <div class={tw(
        'flex gap-4 flex-col',
        'sm:flex-row sm:gap-10',
        'lg:flex-row lg:gap-10'
        )}
      >
        <Input placeholder="First Name" />
        <Input placeholder="Last Name" />
      </div>
      <div class={tw(
        'flex gap-4 flex-col',
        'sm:flex-row sm:gap-10',
        'lg:flex-row lg:gap-10'
        )}
      >
        <Input placeholder="Email Address" />
        <Input placeholder="Phone Number" />
      </div>
      <Input full
             placeholder="Current Website"
      />
      <TextArea placeholder="Message" />
      <div>
        <Button class="text-white">Send Message</Button>
      </div>
    </div>
  </div>
</div>

<style>
    .contact {
        box-shadow: 0 10px 80px rgba(29, 74, 133, 0.07);
    }
</style>
