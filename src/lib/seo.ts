import { Metadata } from 'next';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

export function generateSEO({
  title = 'Jake Dennison - Senior Solutions Engineer at Atlassian',
  description = "Based in the UK, I'm a Senior Solutions Engineer at Atlassian for the Teamwork collection, specialising in Jira, Confluence, Rovo, and Loom. With over a decade of experience in IT consulting, I deliver scalable and innovative solutions.",
  keywords = [],
  image = 'https://www.neoautomate.com/neo.png',
  url = 'https://www.neoautomate.com',
  type = 'website',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
}: SEOProps = {}): Metadata {
  const baseKeywords = [
    'Senior Solutions Engineer',
    'Atlassian',
    'Jira',
    'Confluence',
    'Rovo',
    'Loom',
    'IT Consulting',
    'UK',
    'Microsoft 365',
    'Salesforce',
    'Azure',
    'OpenAI',
    'SharePoint',
    'Power Platform',
    'Python',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Docker',
    'Git',
    'SaaS Solutions',
    'AI Platforms',
    'Business Automation',
    'Teamwork Collection',
  ];

  const allKeywords = [...baseKeywords, ...keywords, ...tags];

  return {
    title,
    description,
    keywords: allKeywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type,
      title,
      description,
      url,
      siteName: 'Jake Dennison Portfolio',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_GB',
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(section && { section }),
      ...(tags.length > 0 && { tags }),
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function generateArticleSchema({
  headline,
  description,
  author = 'Jake Dennison',
  datePublished,
  dateModified,
  image,
  url,
}: {
  headline: string;
  description: string;
  author?: string;
  datePublished: string;
  dateModified?: string;
  image: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    author: {
      '@type': 'Person',
      name: author,
    },
    datePublished,
    dateModified: dateModified || datePublished,
    image,
    url,
    publisher: {
      '@type': 'Person',
      name: author,
    },
  };
}

export function generateProjectSchema({
  name,
  description,
  url,
  image,
  technologies,
  dateCreated,
}: {
  name: string;
  description: string;
  url: string;
  image: string;
  technologies: string[];
  dateCreated: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name,
    description,
    url,
    image,
    applicationCategory: 'WebApplication',
    operatingSystem: 'Any',
    author: {
      '@type': 'Person',
      name: 'Jake Dennison',
    },
    dateCreated,
    keywords: technologies.join(', '),
  };
}
