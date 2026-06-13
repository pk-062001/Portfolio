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
  { name: 'JavaScript (ES6+)', icon: SiJavascript },
  { name: 'Java', icon: SiOpenjdk },
  { name: 'HTML5', icon: SiHtml5 },
  { name: 'CSS3', icon: SiCss },
  { name: 'SQL', icon: SiMysql },
  { name: 'Bash', icon: SiGnubash },
  // Frontend
  { name: 'React.js', icon: SiReact },
  { name: 'Redux', icon: SiRedux },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Framer Motion', icon: SiFramer },
  { name: 'REST API Integration', icon: TbApi },
  // Backend
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Express.js', icon: SiExpress },
  { name: 'REST APIs', icon: TbApi },
  { name: 'JWT Auth', icon: MdSecurity },
  { name: 'Socket.io', icon: SiSocketdotio },
  { name: 'Mongoose', icon: SiMongodb },
  { name: 'NodeMailer', icon: SiNodedotjs },
  { name: 'MVC Architecture', icon: SiExpress },
  { name: 'Juspay', icon: GiSnake },
  // Database
  { name: 'MongoDB Atlas', icon: SiMongodb },
  { name: 'MySQL', icon: SiMysql },
  // DevOps
  { name: 'AWS', icon: TbBrandAws },
  { name: 'DigitalOcean', icon: SiDigitalocean },
  { name: 'Docker', icon: SiDocker },
  { name: 'Git', icon: SiGit },
  { name: 'GitHub Actions', icon: SiGithubactions },
  { name: 'PM2', icon: SiNodedotjs },
  { name: 'Bash', icon: SiGnubash},
];

export const skillCategories = ['All', 'Languages', 'Frontend', 'Backend', 'Database', 'DevOps'];
