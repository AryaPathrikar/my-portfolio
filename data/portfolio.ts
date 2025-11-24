export const experiences = [
  {
    title: 'Founding AI Engineer',
    company: 'Plick.ai',
    location: 'San Ramon, CA',
    period: 'June 2024 - Present',
    description:
      'Leading development of scalable web applications using modern technologies. Collaborating with cross-functional teams to deliver high-quality products.',
    achievements: [
      'Built image-generation flows with Stable Diffusion paired with a React interface for creating ad visuals',
      'Developed Gemini-based text generation for personalized ad messaging using streamlined workflows in Cursor',
      'Added automated publishing by linking FastAPI services with Buffer’s API, reducing time by 60%',
    ],
    technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker']
  },
  {
    title: 'Software Engineer',
    company: 'iConsult, Collaborative at SyracuseU',
    location: 'Syracuse, NY',
    period: 'August 2024 - March 2025',
    description:
      'Developed and maintained multiple client projects. Worked on both frontend and backend development',
    achievements: [
      'Built a new contact workflow in React with Google Sheets API integration for reliable data capture',
      'Improved site usability by refactoring UI components and fixing form behavior, increasing form accuracy by 35%',
      'Added an event calendar with react-big-calendar and deployed the site using AWS services'
    ],
    technologies: ['React', 'Tailwind CSS', 'Amazon Web Services', 'JavaScript', 'Git']
  },
  {
    title: 'Software Engineering Intern',
    company: 'Woodpecker Analytics and Services',
    location: 'Pune, India',
    period: 'June 2024 - August 2024',
    description: 'Assisted in developing web applications and learned industry best practices.',
    achievements: [
      'Developed Spring Boot microservices with PostgreSQL and JPA to strengthen system reliability',
      'Automated deployments using Docker & Kubernetes to reuduce release ovehead by 75%',
      'Built API tests and monitoring scripts with JUnit and Bash for consistent system checks'
    ],
    technologies: ['Java', 'Spring Boot', 'Docker', 'REST APIs', 'Kubernetes', 'MySQL', 'Maven']
  }
];

export const education = [
  {
    degree: 'Master of Science in Computer Science',
    institution: 'Syracuse University',
    location: 'Syracuse, NY',
    period: 'August 2023 - May 2025',
    description:
      'Research Assistant: Worked on an intelligent API traffic monitoring system, developing anomaly-detection models, engineering data pipelines, and building tooling to support research on system performance and predictive insights.',
    courses: ['Design & Analysis of Algorithms', 'Natural Language Processing', 'Database Systems', 'Machine Learning', 'Operating Systems', 'Artificial Intelligence', 'Object Oriented Design']
  },
  {
    degree: 'Bachelor of Engineering in Information Technology, Honors in AI/ML',
    institution: 'Savitribai Phule Pune University',
    location: 'Pune, India',
    period: 'August 2019 - May 2023',
    description:
      'Capstone Project: Designed an AI-driven system combining LBPH face recognition and CNN-based food analysis to study nutritional and educational outcomes under the PM Poshan Scheme. Publication: "AI-Driven Nutritional and Educational Outcomes of PM Poshan Scheme" in the International Journal of Computer Engineering and Applications (IJCEA), 2023.',
    courses: ['Data Structures', 'Web Application', 'Deep Learning', 'Distributed Systems', 'Computer Networks']
  }
];

export const projects = [
  {
    title: 'Reel-to-Itinerary Multi-Agent Engine',
    description: 'A multi-agent system that extracts locations from Instagram reels, verifies them using Google Maps APIs, and auto-generates travel itineraries.',
    image: '🛒',
    technologies: ['LLMs', 'Google ADK', 'Model Context Protocol (MCP)', 'FastAPI'],
    github: 'https://github.com/AryaPathrikar',
    featured: true
  },
  {
    title: 'Crowd-sourced Delivery Management System',
    description: 'A crowdsourced delivery management platform supporting parcel requests, task assignment, and real-time tracking.',
    image: '📝',
    technologies: ['Java', 'Spring Boot', 'React', 'MySQL', 'REST APIs'],
    github: 'https://github.com/AryaPathrikar',
    featured: true
  },
  {
    title: 'Stress Detection Using Wearables',
    description: 'A stress-detection system that reads biometric signals from wearables and predicts stress levels by learning patterns in the data.',
    image: '📋',
    technologies: ['Vue.js', 'Firebase', 'WebSockets', 'Vuex'],
    github: 'https://github.com/AryaPathrikar',
    featured: false
  },
  {
    title: 'Collaborative Task Management System',
    description: 'A task management system that enables users to organize work, collaborate with teams, and personalize their dashboards for better productivity.',
    image: '📸',
    technologies: ['ReactJS', 'Material UI', 'Java 17', 'JDBC', 'Maven'],
    github: 'https://github.com/AryaPathrikar',
    featured: false
  },
  {
    title: 'Tracking the impact of PM Poshan Scheme',
    description: 'A computer-vision driven solution that tracks student attendance and estimates meal consumption, helping evaluate the effectiveness of the PM Poshan Scheme through visual analytics.',
    image: '🌤️',
    technologies: ['CNN', 'SQLite', 'Streamlit', 'Feature Engineering'],
    github: 'https://github.com/AryaPathrikar',
    featured: false
  },
  {
    title: 'Portfolio Website',
    description: 'A modern, responsive portfolio website showcasing projects and skills with smooth animations.',
    image: '💼',
    technologies: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
    github: 'https://github.com/AryaPathrikar',
    featured: false
  }
];

export const certificates = [
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'January 2025',
    description: '',
    credential: 'AWS-CSA-2023',
    icon: '☁️',
    link: 'https://www.credly.com/badges/a541c5e4-17f0-4ae8-99c6-cfc98fa3b119/linked_in_profile'
  },
  {
    title: 'OCI 2025 Certified GenAI Professional',
    issuer: 'Oracle',
    date: 'October 2025',
    description: '',
    credential: 'FCC-FSWD-2022',
    icon: '💻',
    link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=9CED3920416D88609A04D4D79A92F7854D33940DE53A800E1C41021BEA7CBDEF'
  },
  {
    title: "Tracking the impact of PM Poshan on child's health",
    issuer: 'IJCEA Journal',
    date: 'March 2023',
    description: 'Published research evaluating the PM Poshan Scheme through image-based attendance and nutrition analysis.',
    credential: 'META-REACT-2022',
    icon: '📄',
    image: '/IJCEA-paper-publication.jpg',
    link: 'https://ijcea.com/wp-content/uploads/170401-Prof.-Megha-R.-Mehar.pdf'
  },
  {
    title: 'Barclays Hackathon Participant',
    issuer: 'Barclays',
    date: '2021',
    description: 'Participated in Barclays hackathon showcasing JavaScript skills and problem-solving abilities.',
    credential: 'FCC-JS-2021',
    icon: '📜',
    image: '/barclays-hackathon.jpg',
    certificateLink: '', // Add your certificate link here
    articleLink: 'https://www.isquareit.edu.in/event/fe-student-teams-from-i²it-for-winning-the-first-and-the-second-prize-at-the-barclays-tech-innovation-challenge-2019/' // Add your article link here
  },
  // {
  //   title: 'Docker Certified Associate',
  //   issuer: 'Docker Inc.',
  //   date: '2023',
  //   description: 'Containerization and orchestration expertise with Docker.',
  //   credential: 'DCA-2023',
  //   icon: '🐳'
  // },
  // {
  //   title: 'MongoDB Certified Developer',
  //   issuer: 'MongoDB University',
  //   date: '2022',
  //   description: 'NoSQL database design and development with MongoDB.',
  //   credential: 'MDB-DEV-2022',
  //   icon: '🍃'
  // },
  // {
  //   title: 'Google Cloud Professional',
  //   issuer: 'Google Cloud',
  //   date: '2023',
  //   description: 'Cloud architecture and deployment on Google Cloud Platform.',
  //   credential: 'GCP-PRO-2023',
  //   icon: '☁️'
  // }
];

export const skillCategories = [
  {
    category: 'Frontend',
    color: 'from-pink-500 to-rose-600',
    skills: [
      { name: 'React', level: 90 },
      { name: 'JavaScript', level: 90 },
      { name: 'TypeScript', level: 80 },
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 90 },
      { name: 'TailwindCSS', level: 85 },
      { name: 'Bootstrap', level: 80 }
    ]
  },
  {
    category: 'Backend Development',
    color: 'from-rose-500 to-pink-600',
    skills: [
      { name: 'Java', level: 85 },
      { name: 'Spring Boot', level: 85 },
      { name: 'Hibernate', level: 75 },
      { name: 'Python', level: 80 },
      { name: 'FastAPI', level: 75 },
      { name: 'Flask', level: 70 },
      { name: 'Node.js', level: 80 },
      { name: 'JUnit', level: 75 },
      { name: 'Bash', level: 70 },
      { name: 'MySQL', level: 80 },
      { name: 'PostgreSQL', level: 75 },
      { name: 'MongoDB', level: 75 }
    ]
  },
  {
    category: 'DevOps & Tooling',
    color: 'from-fuchsia-500 to-pink-600',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Maven', level: 75 },
      { name: 'Docker', level: 80 },
      { name: 'Kubernetes', level: 70 },
      { name: 'Linux', level: 80 },
      { name: 'Agile/Scrum', level: 75 },
      { name: 'JIRA', level: 80 }
    ]
  },
  {
    category: 'AI / Machine Learning',
    color: 'from-pink-500 to-fuchsia-600',
    skills: [
      { name: 'TensorFlow', level: 75 },
      { name: 'PyTorch', level: 70 },
      { name: 'Pandas', level: 85 },
      { name: 'Hugging Face', level: 75 },
      { name: 'LLMs', level: 75 },
      { name: 'BERT', level: 70 },
      { name: 'LangChain', level: 75 },
      { name: 'LangGraph', level: 70 }
    ]
  }
];

export const roles = ['Full Stack Developer', 'AI Engineer', 'Java Engineer', 'Machine Learning Engineer'];
