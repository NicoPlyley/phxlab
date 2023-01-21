<script>
  export let placeholder = '';
  export let full = false;
</script>

<input class="bg-tertiary-90 px-7 py-4 rounded-lg {full ? 'w-full' : 'lg:w-[200px] xl:w-[300px] w-full'}"
       {placeholder}
       type="text"
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
