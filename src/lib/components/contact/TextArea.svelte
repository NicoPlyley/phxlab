<script>
  export let placeholder = '';
</script>

<textarea class="bg-tertiary-90 px-7 py-4 rounded-lg w-full h-32 resize-none"
          {placeholder}
/>

<style>
    ::placeholder {
        color: #848484;
    }

    :-ms-input-placeholder {
        color: #848484;
    }

    ::-ms-input-placeholder {
        color: #848484;
    }
</style>
