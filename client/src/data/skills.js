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
  SiOpenai,
} from 'react-icons/si';
import { TbApi, TbBrandAws } from 'react-icons/tb';
import { MdSecurity } from 'react-icons/md';
import { GiSnake } from 'react-icons/gi';

export const skills = {
  Frontend: [
    { name: 'React.js', icon: SiReact },
    { name: 'Redux', icon: SiRedux },
    { name: 'Tailwind CSS', icon: SiTailwindcss },
    { name: 'Framer Motion', icon: SiFramer },
    { name: 'Responsive UI', icon: SiHtml5 },
  ],
  Backend: [
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'Express.js', icon: SiExpress },
    { name: 'REST APIs', icon: TbApi },
    { name: 'JWT Auth', icon: MdSecurity },
    { name: 'Socket.io', icon: SiSocketdotio },
    { name: 'MVC Architecture', icon: SiExpress },
    { name: 'Juspay', icon: GiSnake },
  ],
  Databases: [
    { name: 'MongoDB Atlas', icon: SiMongodb },
    { name: 'Mongoose', icon: SiMongodb },
    { name: 'MySQL', icon: SiMysql },
    { name: 'Data Modeling', icon: SiMysql },
  ],
  Languages: [
    { name: 'JavaScript (ES6+)', icon: SiJavascript },
    { name: 'Java', icon: SiOpenjdk },
    { name: 'HTML5', icon: SiHtml5 },
    { name: 'CSS3', icon: SiCss },
    { name: 'SQL', icon: SiMysql },
    { name: 'Bash', icon: SiGnubash },
  ],
  Cloud: [
    { name: 'AWS', icon: TbBrandAws },
    { name: 'DigitalOcean', icon: SiDigitalocean },
    { name: 'Docker', icon: SiDocker },
    { name: 'GitHub Actions', icon: SiGithubactions },
    { name: 'PM2', icon: SiNodedotjs },
  ],
  AI: [
    { name: 'Applied AI', icon: SiOpenai },
    { name: 'LLM Integrations', icon: SiOpenai },
    { name: 'Prompt Design', icon: SiOpenai },
    { name: 'RAG Concepts', icon: SiOpenai },
  ],
  Tools: [
    { name: 'Git', icon: SiGit },
    { name: 'Postman', icon: SiGnubash },
    { name: 'VS Code', icon: SiGnubash },
    { name: 'Notion', icon: SiGnubash },
  ],
};

export const skillCategories = ['Frontend', 'Backend', 'Databases', 'Languages', 'Cloud', 'AI', 'Tools'];
