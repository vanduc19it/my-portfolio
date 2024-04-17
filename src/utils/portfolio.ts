import {
  AboutSectionType,
  ContactSectionType,
  ExperienceSectionType,
  FooterSectionType,
  HeroSectionType,
  NavbarSectionType,
  ProjectsSectionType,
  SkillsSectionType,
  SocialSectionType,
} from '../types/sections';
import { StringKeyValueType } from '../types';
import { resumeFileName } from './config';
import { getId } from './helper';

/*
 * =========================
 * AUTHOR INFO
 * =========================
 */

export const socialLinks: StringKeyValueType = {
  instagram: 'https://www.instagram.com/vanduc_194/',
  tumblr: 'https://vanduc1904.tumblr.com/',
  github: 'https://github.com/vanduc19it',
  linkedin: 'https://www.linkedin.com/in/vanduc19it/',
};

export const author = {
  name: 'Dustin',
  email: 'cvduc.19it1vku@gmail.com',
};

export const seoData = {
  title: 'Van Duc | Full-Stack Developer',
  description:
    'Duc is a full-stack developer who specializes in building (and occasionally designing) exceptional visual interfaces.',
  author: author.name,
  image: '/aboutme.jpg',
  url: '',
  keywords: [
    'Duc',
    'Duc Van',
    '@vanduc19it',
    'Portfolio',
    'Duc Portfolio ',
    'Duc Van Portfolio',
  ],
};

/*
 * =========================
 * SECTIONS
 * =========================
 */

// Navbar Section

export const navbarSection: NavbarSectionType = {
  navLinks: [
    { name: 'about', url: '/#about' },
    { name: 'skills', url: '/#skills' },
    { name: 'experience', url: '/#experience' },
    { name: 'projects', url: '/#projects' },
    { name: 'contact', url: '/#contact' },
  ],
  cta: {
    title: 'resume',
    url: `/${resumeFileName}`,
  },
};

// * Hero Section

export const heroSection: HeroSectionType = {
  subtitle: "Hello fren 👋, I'm ",
  title: 'Van Duc (Dustin)',
  tagline: 'A Software Engineer base in Da Nang city, Viet Nam.',
  description:
    "< I'm a passionate Fullstack Web Developer having an experience of creating web applications using ReactJS & NodeJS. /> ",
  specialText: 'Full-stack , Blockchain Developer',

  cta: {
    title: 'see my resume',
    url: `/${resumeFileName}`,
    hideInDesktop: true,
  },
};

// * About Section

export const aboutSection: AboutSectionType = {
  title: 'about me 😎',
  list: {
    title: 'Here are a few technologies I’ve been working with recently:',
    items: [
      'Next.js',
      'React.js',
      'TailwindCSS',
      'Solidity',
      'Express',
      'Hardhat',
    ],
  },
  img: '/aboutme.jpg',
};

// * Skills Section

export const skillsSection: SkillsSectionType = {
  title: 'what i can do',
  skills: [
    {
      id: getId(),
      title: 'full stack development',
      // animation lottie file: https://lottiefiles.com/
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Building responsive static websites using Next.js',
        'Building responsive Single Page Apps in React.js',
        'Building RESTful APIs in Express',
      ],
      softwareSkills: [
        // iconify icons: https://icon-sets.iconify.design/
        { name: 'HTML5', icon: 'vscode-icons:file-type-html' },
        { name: 'CSS3', icon: 'vscode-icons:file-type-css' },
        { name: 'javaScript', icon: 'vscode-icons:file-type-js-official' },
        {
          name: 'typeScript',
          icon: 'vscode-icons:file-type-typescript-official',
        },
        { name: 'node.js', icon: 'logos:nodejs-icon' },
        { name: 'react.js', icon: 'logos:react' },
        { name: 'next.js', icon: 'logos:nextjs-icon' },
        { name: 'tailwind CSS', icon: 'logos:tailwindcss-icon' },
        { name: 'redux', icon: 'logos:redux' },
        { name: 'database', icon: 'vscode-icons:file-type-sql' },
      ],
    },
    {
      id: getId(),
      title: 'blockchain development',
      lottie: {
        light: '/lotties/ethereum.json',
        dark: '/lotties/ethereum-dark.json',
      },
      points: [
        'Experience in developing Smart Contract using Solidity & Ethereum',
        'Developing NFT Smart Contracts using ERC-721 Token Standard',
        'Building Dapps with React.js & Solidity using Web3.js',
      ],
      softwareSkills: [
        { name: 'ethereum', icon: 'logos:ethereum' },
        { name: 'solidity', icon: 'logos:solidity' },
        { name: 'metamask', icon: 'logos:metamask-icon' },
        { name: 'hardhat', icon: 'logos:hardhat-icon' },
      ],
    },
  ],
};

// * Experience Section

export const experienceSection: ExperienceSectionType = {
  title: 'Work Experience',
  experiences: [
    {
      company: 'NAPA Global',
      companyUrl: 'https://about.airmenus.in',
      role: 'Fullstack Developer Intern',
      started: 'Oct 2023',
      upto: 'March 2024',
      tasks: [
        "Built 15+ dynamic web applications using React and Next.js, resulting in a 15% increase in user engagement.                      Collaborated closely 'with' the design team to implement pixel-perfect UI/UX designs, consistently delivering projects           on-time.",
        'Developed and maintained responsive web applications for clients in the food and hospitality industry, enhancing their           online presence and customer engagement. Implemented Tailwind CSS to streamline the development process, reducing CSS            codebase by 20%',
        'Collaborated with clients to gather project requirements and translate them into actionable technical tasks, ensuring            client expectations were met or exceeded.',
      ],
    },
    {
      company: 'FPT Software',
      companyUrl: 'https://starkcon.com',
      role: 'Backend Developer Intern',
      started: 'June 2023',
      upto: 'July 2023',
      tasks: [
        'Selected for the first cohort of StarkCon Cairo Fellow program and got trained on blockchain, Cairo and started building on StarkNet. ',
        'Underwent a 5 week program under mentorship of professionals from StarkNet ecosystem. ',
        'Learnt how to setup Cairo environment, blockchain, basics of ZK and Cairo, writing smart contracts and Starklings.',
        'Earned an exclusive NFT as proof of completion and custom swag kit.',
      ],
    },
    {
      company: 'TrueBPM',
      companyUrl: 'https://yellowfryum.com',
      role: 'No Code Platform Intern',
      started: 'March 2022',
      upto: 'May 2022',
      tasks: [
        'Spearheaded the design and development of a responsive landing page using ReactJS and Tailwind CSS, resulting in a               40% increase in page load speed',
        'Worked closely with a cross-functional team of 5 interns to ideate and implement UI/UX improvements, resulting in a 20%          boost in user engagement and a 15% increase in conversion rates.',
        'Conducted user research and usability testing, gathering feedback from over 100+ users, which directly influenced                design decisions and led to a 30% improvement in user satisfaction scores.',
        'Met project deadlines consistently, delivering good-quality code and designs on time.',
      ],
    },
    {
      company: 'VKU',
      companyUrl: 'https://cloud.google.com/',
      role: "Bachelor's Degree",
      started: '2019',
      upto: '2024',
      tasks: [
        'Selected as Google Cloud Facilitator for my institution.',
        'Enrolled 600+ students from mine as well as students all across India.',
        'Trained and helped them complete skill badges and quests in the domains of Cloud Infrastructure, Cloud Native Application Development, Big Data and Machine Learning, Security, Machine Learning & AI',
        'At the end of program, approximately 550 students completed their milestones and gained significant knowledge in their respective tracks',
        'The institution as a whole achieved Milestone 3 out of 4 which is a big feat with its first year in the GCRF program.',
      ],
    },
    // {
    //   company: '',
    //   companyUrl: '',
    //   role: '',
    //   started: '',
    //   upto: '',
    //   tasks: [

    //   ],
    // },
  ],
};

// * Projects Section

export const projectsSection: ProjectsSectionType = {
  title: 'Personal Projects',
  projects: [
    {
      id: getId(),
      name: 'Biccas Landing Page',
      url: 'https://vanduc19it.github.io/Challenge3_Responsive_LandingPage/',
      repo: 'https://github.com/vanduc19it/Challenge3_Responsive_LandingPage',
      img: 'https://res.cloudinary.com/do2kg3dtf/image/upload/v1713344414/xqo7kwjaegw53lwzlftg.png',
      year: 2024,
      tags: ['HTML', 'CSS', 'SCSS', 'JavaScript'],
    },
    {
      id: getId(),
      name: 'NFT Marketplace',
      url: 'https://github.com/vanduc19it/marketplace_nft',
      repo: 'https://marketplace-nft-vanduc19it.vercel.app/',
      img: 'https://res.cloudinary.com/do2kg3dtf/image/upload/v1712895009/nodgpo9n6l06vuzksqcs.png',
      year: 2023,
      tags: ['NextJS', 'Typescript', 'Solidity', 'Hardhat'],
    },
    {
      id: getId(),
      name: 'Vegetable store',
      url: 'https://github.com/vanduc19it/Vegetables-store',
      repo: 'https://github.com/vanduc19it/Vegetables-store',
      img: 'https://res.cloudinary.com/do2kg3dtf/image/upload/v1712895157/l5dhp2cb2upufvxx6yfi.png',
      year: 2023,
      tags: ['HTML', 'CSS', 'Javascript', 'Jquery', 'Spring', 'Thymeleaf'],
    },
    {
      id: getId(),
      name: 'Multisig Wallet',
      url: 'https://multisig-wallet-vanduc19it.vercel.app/',
      repo: 'https://github.com/vanduc19it/multisig-wallet',
      img: 'https://res.cloudinary.com/do2kg3dtf/image/upload/v1712896177/ks6gwihavyygilkoib7g.png',
      year: 2023,
      tags: ['React', 'Thirdweb', 'Solidity', 'HardHat'],
    },
    {
      id: getId(),
      name: 'Lan Monitoring',
      url: 'https://github.com/vanduc19it/LAN-Monitoring',
      repo: 'https://github.com/vanduc19it/LAN-Monitoring',
      img: 'https://res.cloudinary.com/do2kg3dtf/image/upload/v1713343715/abmlwqxst7vpvn323wqa.jpg',
      year: 2022,
      tags: ['C#'],
    },
    {
      id: getId(),
      name: 'Ecommerce Website',
      url: 'https://vanduc19it-webshop.vercel.app/',
      repo: 'https://github.com/vanduc19it/webShop_frontend',
      img: 'https://res.cloudinary.com/do2kg3dtf/image/upload/v1712894755/qzz0bpfx32upswakrxox.png',
      year: 2023,
      tags: ['React', 'Redux', 'NodeJS', 'MongoDB'],
    },
    {
      id: getId(),
      name: 'Chat Realtime',
      url: 'https://github.com/vanduc19it/Challenge_6_Chat',
      repo: 'https://challenge-6-chat.vercel.app/register',
      img: 'https://res.cloudinary.com/do2kg3dtf/image/upload/v1712897379/kocq6bungnur6r7zjrr8.png',
      year: 2023,
      tags: ['React', 'Antd', 'Redux', 'Express', 'MongoDB'],
    },
    {
      id: getId(),
      name: 'AI Virtual Assistant',
      url: 'https://github.com/vanduc19it/AI-virtual-assistant',
      repo: 'https://github.com/vanduc19it/AI-virtual-assistant',
      img: 'https://res.cloudinary.com/do2kg3dtf/image/upload/v1712894129/ws9cfui0ndxksmgvo7on.png',
      year: 2022,
      tags: ['Python'],
    },
  ],
};

// * Contact Section

export const contactSection: ContactSectionType = {
  title: 'get in touch',
  subtitle: "what's next",
  paragraphs: [
    "I'm currently looking for a remote job or any new opportunities.",
    'Whether you have a project to discuss or just want to say hi, my inbox is open for all!',
  ],
  link: `mailto:${author.email}`,
};

// Social Links Section

export const socialSection: SocialSectionType = {
  socialLinks: [
    {
      icon: 'tabler:brand-github',
      url: socialLinks.github,
    },
    {
      icon: 'mdi:instagram',
      url: socialLinks.instagram,
    },
    {
      icon: 'tabler:brand-tumblr',
      url: socialLinks.tumblr,
    },
    {
      icon: 'lucide:linkedin',
      url: socialLinks.linkedin,
    },
  ],
};

// Footer Section

export const footerSection: FooterSectionType = {
  title: 'Design Inspiration @Van Duc',
  link: 'https://github.com/vanduc19it',
};
