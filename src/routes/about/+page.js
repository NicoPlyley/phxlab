export let load;
load = async ({ fetch }) => {
  const blog = await fetch('/api/blog').then((response) => response.json());

  return {
    seo: {
      title: 'Discover Phoenix Tech Lab | Web Development & SEO Agency',
      description:
        'Discover the team, mission and services behind Phoenix Tech Lab, the web development and SEO agency that specializes in rebuilding websites and rising from the ashes to a stronger online presence. Learn more about us and how we can help your business succeed.',
    },
    header: {
      title: 'Discover Phoenix Tech Lab',
      subtitle: 'Web Development and SEO Experts in Revitalizing Websites',
      image: {
        path: 'cactus-bg2.webp',
        dev: true,
      },
    },
    about: {
      title: 'About Us',
      description: [
        'We are a web development and SEO agency that specializes in rebuilding websites and rising from the ashes to a stronger online presence. Our team of experts will design and optimize a stunning website that will help you stand out online and increase your visibility on search engines.',
        'Our company began in 2012 under the name LuxWay, where we started as a video production company. However, as the digital landscape evolved, in 2015 we saw an opportunity to expand our services to include website development. In 2022, we rebranded to Phoenix Tech Lab to reflect our new focus and mission.',
        'Our agency was founded by Nico Plyley and Jonathan Nyquist, who bring a wealth of experience and expertise in website development and SEO. Together, they have led Phoenix Tech Lab to become a leading agency in the industry.',
        'We pride ourselves on our ability to understand the unique needs of each of our clients and to deliver customized solutions that drive results. Our team of web developers and SEO experts are dedicated to creating websites that are not only visually stunning but also optimized for search engines, resulting in a better online visibility for our clients.',
        'We invite you to take a look at our portfolio to see the amazing websites and SEO campaigns we have created for our clients. If you are looking to revitalize your website and improve your online presence, contact us today to schedule a consultation.',
      ],
      image: {
        path: 'owners.webp',
        dev: true,
      },
    },
    team: {
      title: 'Meet The Core Team',
      background: '/about/cactus-background.webp',
      people: [
        {
          name: 'Nico Plyley',
          title: 'Founder / Lead Project Manager',
          image: {
            path: 'nico-plyley.webp',
            alt: 'Nico Plyley',
            dev: true,
          },
        },
        {
          name: 'Jonathan Nyquist',
          title: 'Founder / Lead Project Manager',
          image: {
            path: 'jonathan-nyquist.webp',
            alt: 'Jonathan Nyquist',
            dev: true,
          },
        },
        {
          name: 'Vibhor Thakral',
          title: 'Frontend Engineer',
          image: {
            path: 'vibhor-thakral.webp',
            alt: 'Vibhor Thakral',
          },
        },
      ],
    },
    reviews: {
      title: 'What Our Clients Say',
      reviews: [
        {
          message:
            'We recently had our website redesigned by Nico at Phoenix Tech Lab and we could not be happier. We are not very tech savvy, yet he knew just what we wanted and needed. He made many great suggestions for features that we would not have thought of. He helped us in the nicest possible way and never made us feel overwhelmed. I would highly recommend Nico at Phoenix Tech Lab for your website needs.',
          author: 'Jeanette Harold',
        },
        {
          message:
            'I can’t thank Nico at Phoenix Tech Lab enough for helping and guiding me along the way in building my Online Stores. He has been instrumental in helping my business grow through the platform and services he offers. He’s professional, knowledgeable and easy to work with and I highly recommend him.',
          author: 'Tim Heimbach',
        },
      ],
    },
    blog: {
      title: 'Latest Blog Posts',
      background: '/about/the-wave.webp',
      blog,
    },
    faqs: {
      title: 'Frequently Asked Questions',
      faqs: [
        {
          question: 'What is Phoenix Tech Lab?',
          answer: 'Phoenix Tech Lab is a web development and SEO agency that specializes in rebuilding websites and rising from the ashes to a stronger online presence. Our team of experts will design and optimize a stunning website that will help you stand out online and increase your visibility on search engines.',
        },
        {
          question: 'When was Phoenix Tech Lab founded?',
          answer: 'Phoenix Tech Lab was founded in 2012, under the name LuxWay. We started as a video production company, but as the digital landscape evolved, in 2015 we saw an opportunity to expand our services to include website development. In 2022, we rebranded to Phoenix Tech Lab to reflect our new focus and mission.',
        },
        {
          question: 'Who founded Phoenix Tech Lab?',
          answer: 'Phoenix Tech Lab was founded by Nico Plyley and Jonathan Nyquist, who bring a wealth of experience and expertise in website development and SEO. Together, they have led Phoenix Tech Lab to become a leading agency in the industry.',
        },
        {
          question: 'What services does Phoenix Tech Lab offer?',
          answer: 'Phoenix Tech Lab offers website development, SEO, logo design, and hosting solutions. We use top-of-the-line JavaScript frameworks that are usually used by large tech companies for all our website development projects and run our websites on edge hosting. We also offer custom server solutions for clients who need more resources.',
        },
        {
          question: 'Why is Phoenix Tech Lab different from other web development agencies?',
          answer: 'Phoenix Tech Lab is different because we use the latest technologies and design trends to deliver the highest quality results.',
        },
      ],
    },
  };
};
