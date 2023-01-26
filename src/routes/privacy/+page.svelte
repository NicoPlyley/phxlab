<script>
  import { Contact, Header } from '$lib/blocks/about';
  import { Container, Text } from '$lib';

  export let data = {};
  const { seo, header } = data;
</script>

<svelte:head>
  <title>{seo.title}</title>
  <meta content={seo.description}
        name="description"
  />
</svelte:head>

<Header data={header} />

<Container class="my-7">
  <Text>
    At Phoenix Tech Lab, we are committed to protecting the privacy of our customers and website visitors. This Privacy
    Policy explains our practices regarding the collection, use, and disclosure of personal information that we may
    collect through our website and services.
  </Text>

  <Text class="mt-7 mb-5"
        type="h3"
  >
    Information Collection and Use
  </Text>

  <Text>
    We may collect personal information from you when you visit our website, including your IP address, browser type,
    and
    page views. This information is used to improve the performance and functionality of our website and to better
    understand how visitors use our site. We use
    <a class="underline"
       href="https://www.cloudflare.com/privacypolicy/"
       rel="noreferrer"
       target="_blank"
    >
      Cloudflare
    </a>
    and
    <a class="underline"
       href="https://logrocket.com/privacy/"
       rel="noreferrer"
       target="_blank"
    >
      LogRocket
    </a>
    to monitor and analyze this data.

    We may also collect personal information when you sign up for our services or contact us through our website. This
    information may include your name, email address, and other contact information. We use this information to provide
    you with the services you requested, to communicate with you about your account, and to send you promotional
    materials
    and other marketing communications.

    We do not share or sell any of the personal information we collect to third parties. We only use it to provide you
    with the services you requested and to communicate with you about your account.
  </Text>

  <Text class="mt-7 mb-5"
        type="h3"
  >
    Cookies and Tracking Technologies
  </Text>

  <Text>
    We use cookies and other tracking technologies to personalize your experience on our website and to improve the
    performance and functionality of our site. You can set your browser to refuse all or some cookies, or to alert you
    when cookies are being sent. However, if you disable or refuse cookies, some features of our website may not
    function
    properly.
  </Text>

  <Text class="mt-7 mb-5"
        type="h3"
  >
    Data Security
  </Text>

  <Text>
    We take reasonable measures to protect the personal information we collect from loss, misuse, unauthorized access,
    disclosure, alteration, and destruction. However, no internet transmission is ever completely secure or error-free,
    so
    we cannot guarantee that unauthorized access, hacking, data loss, or other breaches will never occur.
  </Text>

  <Text class="mt-7 mb-5"
        type="h3"
  >
    Changes to this Privacy Policy
  </Text>

  <Text>
    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy
    Policy on our website. You are advised to review this Privacy Policy periodically for any changes.
  </Text>

  <Text class="mt-7 mb-5"
        type="h3"
  >
    Contact Us
  </Text>

  <Text>
    If you have any questions about this Privacy Policy, please contact us at
    <a class="underline"
       href="tel:8887578785"
    >(888) 757-8785</a> or
    <a class="underline"
       href="mailto:privacy@phoenixtechlab.com"
    >privacy@phoenixtechlab.com</a>.
  </Text>

  <Text class="my-7">Effective date: <i>January 25, 2023</i></Text>

  <Text>Thank you for choosing Phoenix Tech Lab for your web development needs.</Text>
</Container>

<Contact />
