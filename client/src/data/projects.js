export const projects = [
  {
    id: 1,
    title: 'Personal Developer Portfolio',
    category: 'Full Stack',
    description:
      'A production-grade personal portfolio built with React.js frontend and Node.js/Express.js backend. Features automated CI/CD via GitHub Actions — every push to main triggers zero-downtime deployment. Includes environment-based config, full form validation, and fully responsive UI.',
    stack: ['React.js', 'Node.js', 'Express.js', 'GitHub Actions', 'CI/CD', 'MongoDB'],
    liveUrl: 'PORTFOLIO_LIVE_URL',
    githubUrl: 'PORTFOLIO_GITHUB_URL',
    featured: true,
  },
  {
    id: 2,
    title: 'Airbnb Clone',
    category: 'Full Stack',
    description:
      'A full-stack Airbnb-inspired property rental platform built with the MERN stack. Features JWT authentication, property listings with image uploads, search and filter by location and price, booking management system, and host and guest dashboards — fully responsive UI.',
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST APIs', 'Tailwind CSS'],
    liveUrl: 'AIRBNB_LIVE_URL',
    githubUrl: 'AIRBNB_GITHUB_URL',
    featured: false,
  },
];

export const projectCategories = ['All', 'Full Stack', 'Frontend', 'Backend'];
