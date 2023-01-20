export let GET;
GET = async () => {
  const headers = {
    'Content-Type': 'application/json',
  };

  const posts = [
    {
      title: 'Post 1',
      link: 'post-1',
      date: '2020-01-01',
      image: { path: 'blog.webp', alt: 'Blog Post', dev: true },
    },
    {
      title: 'Post 2',
      link: 'post-2',
      date: '2020-01-02',
      image: { path: 'blog.webp', alt: 'Blog Post', dev: true },
    },
    {
      title: 'Post 3',
      link: 'post-3',
      date: '2020-01-03',
      image: { path: 'blog.webp', alt: 'Blog Post', dev: true },
    },
  ];

  return new Response(JSON.stringify(posts), { headers });
};
