'use client';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Marquee from 'react-fast-marquee';
import { motion } from 'framer-motion';
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
  SiJira,
  SiConfluence,
  SiLoom,
} from 'react-icons/si';
import { TbCloudComputing } from 'react-icons/tb';
import { RiRobot2Fill } from 'react-icons/ri';
import { MdOutlineTableView } from 'react-icons/md';
import { FaMicrosoft } from 'react-icons/fa';
import Image from 'next/image';
import React, { memo, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

// Mapping of language codes to "Hello" translations
const greetings: Record<string, string> = {
  en: 'Hello!',
  es: 'Hola!',
  fr: 'Bonjour!',
  de: 'Hallo!',
  it: 'Ciao!',
  pt: 'Olá!',
  nl: 'Hallo!',
  ru: 'Привет!',
  zh: '你好!',
  ja: 'こんにちは!',
  ko: '안녕하세요!',
  ar: 'مرحبا!',
  hi: 'नमस्ते!',
  pl: 'Cześć!',
  tr: 'Merhaba!',
  sv: 'Hej!',
  no: 'Hei!',
  da: 'Hej!',
  fi: 'Hei!',
  el: 'Γεια σου!',
  he: 'שלום!',
  cs: 'Ahoj!',
  ro: 'Salut!',
  hu: 'Szia!',
  th: 'สวัสดี!',
  vi: 'Xin chào!',
  id: 'Halo!',
  uk: 'Привіт!',
};

// Memoize skills array to prevent re-creation on every render
const skills = [
  { text: 'Jira', Icon: SiJira },
  { text: 'Confluence', Icon: SiConfluence },
  { text: 'Loom', Icon: SiLoom },
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

const HeroSection = memo(function HeroSection() {
  const [localizedGreeting, setLocalizedGreeting] = useState('Hello!');

  useEffect(() => {
    // Detect browser language
    const browserLang = navigator.language || navigator.languages?.[0] || 'en';
    // Extract the primary language code (e.g., 'en-US' -> 'en')
    const langCode = browserLang.split('-')[0].toLowerCase();
    // Set the greeting based on detected language, default to 'Hello!' if not found
    setLocalizedGreeting(greetings[langCode] || 'Hello!');
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const socialIconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20,
      },
    },
    hover: {
      scale: 1.1,
      rotate: [0, -10, 10, -10, 0],
      transition: {
        duration: 0.4,
      },
    },
  };

  const marqueeContainerVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
        delay: 1.2,
      },
    },
  };

  return (
    <header className="relative flex min-h-[600px] max-h-[900px] h-screen w-full flex-col items-center justify-center bg-white dark:bg-black overflow-hidden pb-16 sm:pb-20">
      {/* Grid background */}
      <div
        className={cn(
          'absolute inset-0',
          '[background-size:20px_20px]',
          '[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]',
          'dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]',
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>

      <motion.div
        className="mx-auto max-w-full px-5 py-4 md:py-8 lg:py-4 text-left flex flex-col lg:flex-row items-center justify-between relative z-10 flex-1"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start lg:pl-8 order-2 lg:order-1">
          <motion.div variants={itemVariants}>
            <TypeAnimation
              className="text-2xl sm:text-3xl font-bold text-[#2b55ff] dark:text-[#4b6fff] relative z-10"
              sequence={[localizedGreeting, 2000]}
              repeat={0}
            />
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-2xl font-heading md:text-3xl lg:text-5xl mt-3 md:mt-5 text-center lg:text-left"
          >
            I&#39;m Jake Dennison.
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="my-5 md:my-6 lg:my-8 text-base md:text-lg lg:text-xl font-normal leading-relaxed lg:leading-relaxed text-center lg:text-left max-w-2xl lg:max-w-xl"
          >
            Based in the UK, I&#39;m a Senior Solutions Engineer at Atlassian for the Teamwork collection, specialising in Jira, Confluence, Rovo, and Loom. With over a decade of experience in IT consulting, I deliver scalable and innovative solutions across SaaS platforms that drive real business value.
          </motion.p>

          <div className="flex flex-col items-center lg:items-start mb-6 md:mb-8 w-full">
            <motion.div className="flex space-x-6 mb-5 md:mb-6" variants={itemVariants}>
              <motion.a
                href="https://github.com/jsdez"
                target="_blank"
                rel="noopener noreferrer"
                variants={socialIconVariants}
                whileHover="hover"
              >
                <FaGithub className="text-3xl md:text-4xl text-gray-800 dark:text-white hover:text-cerulean-400 transition-colors duration-300" />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/jake-dennison-fcl/"
                target="_blank"
                rel="noopener noreferrer"
                variants={socialIconVariants}
                whileHover="hover"
              >
                <FaLinkedin className="text-3xl md:text-4xl text-gray-800 dark:text-white hover:text-cerulean-400 transition-colors duration-300" />
              </motion.a>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="w-full lg:w-1/2 mt-2 lg:mt-0 flex justify-center lg:justify-end order-1 lg:order-2"
          variants={itemVariants}
        >
          <div className="relative">
            <div className="bg-teal-300 dark:bg-darkBg border-4 border-border dark:border-darkBorder rounded-base shadow-light dark:shadow-dark overflow-hidden" style={{boxShadow: 'var(--shadow)'}}>
              <Image
                src="/jake-profile.webp"
                alt="Jake Dennison"
                priority // This is above the fold, so load it immediately
                width={400}
                height={400}
                sizes="(max-width: 768px) 280px, (max-width: 1024px) 350px, 450px"
                className="w-auto h-auto max-w-[240px] sm:max-w-[280px] md:max-w-[310px] lg:max-w-[400px]"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-0 w-full z-0"
        variants={marqueeContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <Marquee
          className="border-t-border dark:border-t-darkBorder dark:bg-secondaryBlack border-t-2 border-b-2 border-b-border dark:border-b-darkBorder bg-white py-2 sm:py-3 lg:py-5 font-base"
          direction="left"
          speed={70}
          loop={0}
          gradientWidth={50}
        >
          {' '}
          {skills.map((skill, id) => (
            <motion.div
              className="flex items-center mx-4 sm:mx-6 lg:mx-8"
              key={id}
              whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
            >
              <skill.Icon className="text-2xl sm:text-3xl lg:text-4xl mr-2 sm:mr-3" />
              <span className="text-lg sm:text-xl lg:text-2xl font-heading">{skill.text}</span>
            </motion.div>
          ))}
        </Marquee>
      </motion.div>
    </header>
  );
});

export default HeroSection;
