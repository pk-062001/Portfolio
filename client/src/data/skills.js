import {
  SiJavascript,
  SiOpenjdk,
  SiHtml5,
  SiCss,
  SiMysql,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiSocketdotio,
  SiMongodb,
  SiDigitalocean,
  SiDocker,
  SiGit,
  SiGithubactions,
  SiGnubash,
} from 'react-icons/si';
import { TbApi, TbBrandAws } from 'react-icons/tb';
import { MdSecurity } from 'react-icons/md';
import { GiSnake } from 'react-icons/gi';

// Skills data — TypeScript interfaces removed, identical icon + data structure
export const skills = [
  // Languages
  { name: 'JavaScript (ES6+)', icon: SiJavascript, category: 'Languages' },
  { name: 'Java', icon: SiOpenjdk, category: 'Languages' },
  { name: 'HTML5', icon: SiHtml5, category: 'Languages' },
  { name: 'CSS3', icon: SiCss, category: 'Languages' },
  { name: 'SQL', icon: SiMysql, category: 'Languages' },
  { name: 'Bash', icon: SiGnubash, category: 'Languages' },
  // Frontend
  { name: 'React.js', icon: SiReact, category: 'Frontend' },
  { name: 'Redux', icon: SiRedux, category: 'Frontend' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, category: 'Frontend' },
  { name: 'Framer Motion', icon: SiFramer, category: 'Frontend' },
  { name: 'REST API Integration', icon: TbApi, category: 'Frontend' },
  // Backend
  { name: 'Node.js', icon: SiNodedotjs, category: 'Backend' },
  { name: 'Express.js', icon: SiExpress, category: 'Backend' },
  { name: 'REST APIs', icon: TbApi, category: 'Backend' },
  { name: 'JWT Auth', icon: MdSecurity, category: 'Backend' },
  { name: 'Socket.io', icon: SiSocketdotio, category: 'Backend' },
  { name: 'Mongoose', icon: SiMongodb, category: 'Backend' },
  { name: 'NodeMailer', icon: SiNodedotjs, category: 'Backend' },
  { name: 'MVC Architecture', icon: SiExpress, category: 'Backend' },
  { name: 'Juspay', icon: GiSnake, category: 'Backend' },
  // Database
  { name: 'MongoDB Atlas', icon: SiMongodb, category: 'Database' },
  { name: 'MySQL', icon: SiMysql, category: 'Database' },
  // DevOps
  { name: 'AWS', icon: TbBrandAws, category: 'DevOps' },
  { name: 'DigitalOcean', icon: SiDigitalocean, category: 'DevOps' },
  { name: 'Docker', icon: SiDocker, category: 'DevOps' },
  { name: 'Git', icon: SiGit, category: 'DevOps' },
  { name: 'GitHub Actions', icon: SiGithubactions, category: 'DevOps' },
  { name: 'PM2', icon: SiNodedotjs, category: 'DevOps' },
  { name: 'Bash', icon: SiGnubash, category: 'DevOps' },
];

export const skillCategories = ['All', 'Languages', 'Frontend', 'Backend', 'Database', 'DevOps'];
