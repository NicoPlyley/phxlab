<script>
  import { Contact, Container, imageHandler } from '$lib';
</script>

<div class="relative py-32">
  <div class="absolute top-16 w-full h-full -z-10"
       style={`
     background-image: url('${imageHandler('/contact/contact-bg.svg')}');
     background-position: bottom;
     background-size: cover;
     `}
  />

  <Container>
    <Contact />
  </Container>
</div>
