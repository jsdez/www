import { Hammersmith_One } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Metadata } from 'next';

const hammersmithOne = Hammersmith_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-hammersmith-one',
});

// Metadata needs to be exported this way in Next.js 13+
export const metadata: Metadata = {
  title: {
    default: 'Jake Dennison - Senior Solutions Engineer at Atlassian',
    template: '%s | Jake Dennison',
  },
  description:
    "Based in the UK, I'm a Senior Solutions Engineer at Atlassian for the Teamwork collection, specialising in Jira, Confluence, Rovo, and Loom. With over a decade of experience in IT consulting, I deliver scalable and innovative solutions that drive real business value.",
  keywords: [
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
  ],
  authors: [{ name: 'Jake Dennison', url: 'https://www.neoautomate.com' }],
  creator: 'Jake Dennison',
  publisher: 'Jake Dennison',
  metadataBase: new URL('https://www.neoautomate.com'),
  alternates: {
    canonical: 'https://www.neoautomate.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    title: 'Jake Dennison - Senior Solutions Engineer at Atlassian',
    description:
      "Based in the UK, I'm a Senior Solutions Engineer at Atlassian for the Teamwork collection, specialising in Jira, Confluence, Rovo, and Loom. With over a decade of experience in IT consulting, I deliver scalable and innovative solutions that drive real business value.",
    url: 'https://www.neoautomate.com',
    siteName: 'Jake Dennison Portfolio',
    images: [
      {
        url: 'https://www.neoautomate.com/neo.png',
        width: 1200,
        height: 630,
        alt: 'Jake Dennison - Senior Solutions Engineer at Atlassian',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jake Dennison - Senior Solutions Engineer at Atlassian',
    description:
      "Based in the UK, I'm a Senior Solutions Engineer at Atlassian for the Teamwork collection, specialising in Jira, Confluence, Rovo, and Loom.",
    images: ['https://www.neoautomate.com/neo.png'],
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual code when available
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
  category: 'technology',
  classification: 'Portfolio Website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Jake Dennison',
    jobTitle: 'Senior Solutions Engineer at Atlassian',
    description:
      'Senior Solutions Engineer at Atlassian for the Teamwork collection, specialising in Jira, Confluence, Rovo, and Loom. Over a decade of experience in IT consulting.',
    url: 'https://www.neoautomate.com',
    image: 'https://www.neoautomate.com/neo.png',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'United Kingdom',
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Atlassian',
    },
    knowsAbout: [
      'Atlassian',
      'Jira',
      'Confluence',
      'Rovo',
      'Loom',
      'IT Consulting',
      'Solutions Engineering',
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
      'Business Automation',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance',
    },
    sameAs: [
      'https://github.com/jsdez',
      'https://www.linkedin.com/in/jake-dennison-fcl/',
      // Add other social profiles as needed
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={hammersmithOne.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
