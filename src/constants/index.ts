import {
  napa,
  vku,
  truebpm,
  fpt,
  decisions,
  vegetable,
  napatool,
} from '../assets';

const experiences = [
  {
    title: 'Engineering Degree',
    company_name:
      'Vietnam–Korea University of Information and Communication Technology',
    icon: vku,
    iconBg: '#333333',
    date: '2019 - 2024',
  },
  {
    title: 'No-Code Platform Intern',
    company_name: 'TrueBPM Company',
    icon: truebpm,
    iconBg: '#333333',
    date: 'JUL 2021 - SEP 2021',
    projects: [
      {
        name: 'STUDENT MANAGEMENT',
        role: 'System Analysis and Design',
        tech: 'Decisions',
        description:
          'Building a system for manage student profile, subject, grade, tuition revenue and expenditure.',
        teamSize: 4,
        img: decisions,
        link: 'https://map.decisions.vn/map',
      },
    ],
  },
  {
    title: 'Back-End Intern',
    company_name: 'FPT Software Company',
    icon: fpt,
    iconBg: '#333333',
    date: 'JULY 2023 - SEP 2023',
    projects: [
      {
        name: 'GROCERY STORE',
        role: 'Full-stack Developer',
        tech: 'SpringBoot, Thymeleaf',
        description:
          'Building a fresh vegetable store to provide products directly at the store or online transactions. The focus is on user-friendly experience, transaction quickly.',
        teamSize: 6,
        img: vegetable,
        link: 'https://vegetable.com.vn/',
      },
    ],
  },
  {
    title: 'Full Stack Developer',
    company_name: 'NAPA Global Company',
    icon: napa,
    iconBg: '#333333',
    date: 'OCT 2023 - PRESENT',
    projects: [
      {
        name: 'NAPA TOOL',
        role: 'Frontend Developer',
        tech: 'ReactJS, NestJS, PostgreSQL',
        description:
          'A system designed specifically for Napies, helping to manage internal information quickly and effectively.',
        teamSize: 20,
        img: napatool,
        link: '#',
      },
    ],
  },
];

export { experiences };
