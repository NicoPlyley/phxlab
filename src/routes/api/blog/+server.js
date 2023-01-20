export let GET;
GET = async () => {
  const headers = {
    'Content-Type': 'application/json',
  };

  const posts = [
    {
      title: 'How to add an SSL certificate to any website',
      link: 'post-1',
      date: '2023-01-02 00:00:00',
      image: { path: 'blog.webp', alt: 'Blog Post', dev: true },
    },
    {
      title: 'Why custom-built websites are better than template-based solutions',
      link: 'post-2',
      date: '2023-01-09 00:00:00',
      image: { path: 'blog.webp', alt: 'Blog Post', dev: true },
    },
    {
      title: 'The role of SEO in website development',
      link: 'post-3',
      date: '2023-01-16 00:00:00',
      image: { path: 'blog.webp', alt: 'Blog Post', dev: true },
    },
  ];

  return new Response(JSON.stringify(posts), { headers });
};
