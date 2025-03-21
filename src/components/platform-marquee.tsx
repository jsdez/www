import Image from "next/image";
import Marquee from "react-fast-marquee";

const platforms = [
  { name: "Microsoft", logo: "/logos/microsoft.svg" },
  { name: "Google Cloud", logo: "/logos/google-cloud.svg" },
  { name: "Salesforce", logo: "/logos/salesforce.svg" },
  { name: "Nintex", logo: "/logos/nintex.svg" },
  { name: "Power Platform", logo: "/logos/power-platform.svg" },
  { name: "OpenAI", logo: "/logos/openai.svg" },
  { name: "Atlassian", logo: "/logos/atlassian.svg" },
  { name: "HubSpot", logo: "/logos/hubspot.svg" },
];

export default function PlatformMarquee() {
  return (
    <Marquee
      className="border-y-border dark:border-y-darkBorder dark:border-darkBorder dark:bg-secondaryBlack border-y-2 bg-white py-3 font-base sm:py-5"
      direction="left"
    >
      {platforms.map((platform, id) => (
        <div className="flex items-center mx-8" key={id}>
          <Image
            src={platform.logo}
            alt={platform.name}
            width={100}
            height={30}
            className="h-10 w-36 object-contain"
          />
        </div>
      ))}
    </Marquee>
  );
}