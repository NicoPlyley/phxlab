export let load;
load = async () => {
  return {
    seo: {
      title: 'Terms and Conditions for Phoenix Tech Lab',
      description:
        'Learn about the terms and conditions for using Phoenix Tech Lab\'s website and services. Read our policies on intellectual property, refunds, and more.',
    },
    header: {
      title: 'Terms and Conditions',
      subtitle: 'Phoenix Tech Lab',
      image: {
        path: 'cactus-bg2.webp',
        dev: true,
      },
    },
    content: [
      {
        title: 'Use of our Website and Services',
        list: [
          'You may use our website and services only for lawful purposes and in accordance with these Terms.',
          'You are responsible for ensuring that your use of our website and services complies with all applicable laws, regulations and guidelines.',
          'You may not use our website or services in any way that could damage, disable, overburden or impair our servers or networks, or interfere with any other party\'s use and enjoyment of our website or services.',
          'You may not attempt to gain unauthorized access to any of our services, user accounts or computer systems or networks, through hacking, password mining or any other means.',
        ],
      },
      {
        title: 'Intellectual Property Rights',
        list: [
          'All content and materials on our website, including but not limited to text, images, logos, graphics, and code, are the property of Phoenix Tech Lab and are protected by copyright or trademark laws.',
          'You may not use any content or materials on our website without our express written consent.',
        ],
      },
      {
        title: 'Third-Party Websites and Services',
        list: [
          'Our website may contain links to third-party websites and services. We do not control and are not responsible for the content or practices of these third-party websites and services.',
          'By using our website and services, you acknowledge and agree that Phoenix Tech Lab is not responsible or liable for any loss or damage of any kind incurred as a result of your use of any third-party websites or services.',
        ],
      },
      {
        title: 'Disclaimers',
        list: [
          'Our website and services are provided on an "as is" and "as available" basis. We make no representations or warranties of any kind, express or implied, as to the operation of our website or services or the information, content, materials or products included on our website or services.',
          'We do not warrant that our website or services will be uninterrupted or error-free, and we will not be liable for any interruptions or errors.',
          'We do not warrant that our website or services, or any content or materials on our website or services, will be free from viruses or other harmful components.',
        ],
      },
      {
        title: 'Limitation of Liability',
        list: [
          'In no event shall Phoenix Tech Lab, its directors, employees, partners, agents, suppliers, or affiliates, be liable for any damages, including but not limited to, direct, indirect, special, incidental, or consequential damages, arising out of or in connection with the use of our website or services.',
        ],
      },
      {
        title: 'Governing Law',
        list: [
          'These terms and conditions shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.',
          'Our failure to enforce any right or provision of these terms and conditions will not be considered a waiver of those rights.',
        ],
      },
      {
        title: 'Changes to our Terms and Conditions',
        list: [
          'We reserve the right, at our sole discretion, to modify or replace these terms and conditions at any time.',
          'By continuing to access or use our website or services after any revisions become effective, you agree to be bound by the revised terms and conditions.',
        ],
      },
      {
        title: 'Contact Us',
        list: [
          'If you have any questions about these terms and conditions, please contact us at info@phoenixtechlab.com',
        ],
      },
      {
        title: 'Logging and Analytics',
        list: [
          'We use Cloudflare and LogRocket',
        ],
      },
    ],
  };
};
