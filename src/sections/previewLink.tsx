import Link from 'next/link';
import neoImage from '@/media/neo.png';
import Image from 'next/image'; // Make sure this path points to your image

async function LinkPreview() {
  return (
    <Link
      href={'https://www.linkedin.com/in/jake-dennison-fcl/'} // Replace with your LinkedIn or any other URL
      target="_blank"
      className="text-black w-[50%] h-[200px] cursor-pointer flex items-center bg-[#f3f3f3] gap-3 text-left border-white border-[2px]"
      style={{
        textDecoration: 'none',
      }}
    >
      <div className="object-cover h-full">
        <Image
          src={neoImage} // Your image
          alt="Jake Dennison"
          className="object-cover h-full w-[340px] m-0"
        />
      </div>
      <div className="p-4 w-[60%]">
        <h3 className="text-3xl font-bold leading-[2rem] mb-2 ">
          Jake Dennison - Senior Solutions Engineer at Atlassian
        </h3>
        <p className="text-base line-clamp-3 mb-2 ">
          Based in the UK, I&#39;m a Senior Solutions Engineer at Atlassian for the Teamwork collection, specialising in Jira, Confluence, Rovo, and Loom.
        </p>
        <span className="mt-3 opacity-50 text-xs">
          &nbsp;{'https://www.linkedin.com/in/jake-dennison-fcl/'}
        </span>
      </div>
    </Link>
  );
}

export default LinkPreview;
