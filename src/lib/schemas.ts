export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.neoautomate.com',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Journey',
      item: 'https://www.neoautomate.com#journey',
    },

  ],
};

export const portfolioSchema = {
  '@context': 'https://schema.org',
  '@type': 'CreativeWork',
  name: 'Jake Dennison Portfolio',
  description:
    'Professional portfolio showcasing geospatial development and software engineering projects',
  author: {
    '@type': 'Person',
    name: 'Jake Dennison',
  },
  url: 'https://www.neoautomate.com',
  dateCreated: '2024',
  inLanguage: 'en-US',
  audience: {
    '@type': 'Audience',
    audienceType: 'Employers, Clients, Recruiters',
  },
};
