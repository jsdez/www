import React from 'react';
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

const SkillsShowcase = () => {
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
    <div className="max-w-5xl mx-auto my-12 px-4">
      <h2 className="text-4xl font-bold text-center mb-10">Skills</h2>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="
                            bg-gray-900 
                            text-white 
                            rounded-base 
                            p-6 
                            flex 
                            flex-col 
                            items-center 
                            justify-center 
                            space-y-2
                        "
          >
            <skill.Icon className="w-12 h-12" />
            <span className="text-lg font-bold">{skill.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsShowcase;
