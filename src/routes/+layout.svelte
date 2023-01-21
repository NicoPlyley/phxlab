<script>
  import '../app.css';
  import { contactInfoStore, Footer, Navigation } from '$lib';

  export let data = {};
  let { footer, navigation } = data;

  contactInfoStore.set({
    social: [ ...footer.info.social ],
    contact: [ ...footer.lists[2].items ],
  });
</script>

<Navigation data={navigation} />
<slot />
<Footer data={footer} />
