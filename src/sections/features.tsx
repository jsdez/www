import {
  SiSalesforce,
  SiOpenai,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiPython,
  SiDocker,
  SiGit,
} from 'react-icons/si';
import { TbCloudComputing } from 'react-icons/tb';
import { RiRobot2Fill } from 'react-icons/ri';
import { MdOutlineTableView } from 'react-icons/md';
import { FaMicrosoft } from 'react-icons/fa';

export default function Features() {
  const skills = [
    { text: 'Microsoft 365', Icon: FaMicrosoft },
    { text: 'Salesforce', Icon: SiSalesforce },
    { text: 'Azure', Icon: TbCloudComputing },
    { text: 'OpenAI', Icon: SiOpenai },
    { text: 'SharePoint', Icon: MdOutlineTableView },
    { text: 'Power Platform', Icon: RiRobot2Fill },
    { text: 'JavaScript', Icon: SiJavascript },
    { text: 'TypeScript', Icon: SiTypescript },
    { text: 'React', Icon: SiReact },
    { text: 'HTML5', Icon: SiHtml5 },
    { text: 'CSS3', Icon: SiCss3 },
    { text: 'Bootstrap', Icon: SiBootstrap },
    { text: 'Python', Icon: SiPython },
    { text: 'Docker', Icon: SiDocker },
    { text: 'Git', Icon: SiGit },
  ];

  return (
    <div>
      <section className="border-t-border dark:border-t-darkBorder dark:bg-darkBg border-t-2 bg-bg py-20 font-base lg:py-[100px]">
        <h2 className="mb-14 px-5 text-center text-2xl font-heading md:text-3xl lg:mb-20 lg:text-4xl">
          Skills and Technologies
        </h2>

        <div className="mx-auto grid max-w-full grid-cols-1 gap-5 px-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, i) => {
            return (
              <div
                className="border-border dark:border-darkBorder dark:bg-secondaryBlack shadow-light dark:shadow-dark flex flex-col gap-3 rounded-base border-2 bg-white p-5"
                key={i}
              >
                <h4 className="text-xl font-heading flex items-center gap-3">
                  <skill.Icon className="text-2xl" /> {/* Icon with a size */}
                  {skill.text} {/* Skill Name */}
                </h4>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
