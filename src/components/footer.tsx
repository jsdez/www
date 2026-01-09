import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="m500:text-xs dark:bg-secondaryBlack z-30 bg-white px-5 py-5 text-center font-base">
      <div className="mb-4 flex items-center justify-center gap-2">
        <a
          target="_blank"
          href="https://www.linkedin.com/company/neoautomate/"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 font-heading underline hover:opacity-80 transition-opacity"
        >
          <Image
            src="/logos/linkedin.svg"
            alt="LinkedIn"
            width={24}
            height={24}
            className="dark:invert"
          />
          Connect on LinkedIn
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} NeoAutomate Limited. All rights reserved.</p>
      <p>
        The source code is available on{' '}
        <a
          target="_blank"
          href="https://github.com/jsdez/www"
          className="font-heading underline"
        >
          GitHub
        </a>
        .
      </p>
      <p>
        Released under the MIT License. Original template by{' '}
        <a
          target="_blank"
          href="https://github.com/neobrutalism-templates/saas"
          className="font-heading underline"
        >
          neobrutalism-templates
        </a>
        .
      </p>
    </footer>
  );
}
