<script>
  import { Button, Container, imageHandler, Logo, Text, tw } from '$lib';
  import List from './List.svelte';

  export let data;
</script>

<div
  class="relative pb-1 md:pb-40"
  style={`
    background-image: url("${imageHandler('footer-bg.svg')}");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center top;
    padding-top: 185px;
`}
>
  <Container>
    <div class="flex flex-col items-center pb-32 text-center">
      <Text type="h2">
        {data.title}
      </Text>
      <Text class="my-10 md:w-3/4">{data.description}</Text>
      <Button link={data.button.link}
              white
      >{data.button.title}</Button>
    </div>

    <hr class="border-text" />

    <div class="mb-40 flex flex-wrap justify-evenly pt-32 lg:justify-between">
      <div class="mb-10 lg:mb-0 lg:w-1/3">
        <div class="flex items-center justify-center lg:justify-start">
          <Logo class="h-14" />
          <Text class="ml-6 text-text"
                color
                type="h3"
          >
            Phoenix<br />Tech Lab
          </Text>
        </div>
        <Text class="mt-7 text-center lg:text-left">{data.info.description}</Text>
        <div class={tw(
          'flex mt-4 items-center justify-center flex-wrap',
          'md:flex-nowrap md:justify-start'
          )}
        >
          {#each data.info.social as item}
            <a class="h-7 w-7 mx-2 fill-text block"
               href={item.url}
               target="_blank"
               rel="noreferrer"
            >
              {@html item.icon}
            </a>
          {/each}
        </div>
      </div>
      {#each data.lists as list, idx}
        <List title={list.title}
              icon={idx === data.lists.length - 1}
              items={list.items}
        />
      {/each}
    </div>
  </Container>
  <div class="absolute bottom-0 w-full bg-black/80 py-4">
    <Container class="flex justify-center md:justify-between flex-wrap">
      <Text class="text-white"
            color
      >&copy; Phoenix Tech Lab 2023 All Rights Reserved
      </Text>
      <Text class="text-white"
            color
      >
        <a class="hover:underline"
           href="/privacy"
        >
          Privacy Policy
        </a>
        <span class="px-2"> | </span>
        <a class="hover:underline"
           href="/terms"
        >
          Terms &amp; Conditions
        </a>
      </Text>
    </Container>
  </div>
</div>
