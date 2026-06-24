export type SocialLink = {
  label: string;
  href: string;
};

export type ExperienceItem = {
  company: string;
  title: string;
  dates: string;
  bullets: string[];
  badge?: string;
  tags?: string[];
};

export type ProjectItem = {
  name: string;
  summary: string;
  bullets?: string[];
  badge?: string;
  stack: string[];
  links: { label: string; href: string }[];
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type EducationItem = {
  school: string;
  degree: string;
  dates: string;
  gpa?: string;
  detail?: string;
};

export type SiteContent = {
  name: string;
  roles: string;
  oneLiner: string;
  threadLine: string;
  email: string;
  phone?: string;
  location: string;
  resumeHref: string;
  highlights: string[];
  experience: ExperienceItem[];
  leadership: ExperienceItem[];
  projects: ProjectItem[];
  skills: SkillGroup[];
  education: EducationItem[];
  social: SocialLink[];
  openTo: string;
};

/** Site copy — synced from resume (edit here to update the whole page). */
export const site: SiteContent = {
  name: "Zhuoer Du",
  roles: "Computer Science @ University of Michigan",
  oneLiner:
    "I build test automation, full-stack apps, and data/ML pipelines—focused on measurable impact, reliable systems, and clear user experiences.",
  threadLine:
    "Off the clock I crochet: loose yarn becomes pattern, one stitch at a time. I bring the same patience to code, data, and teamwork.",
  email: "zhuoerdu@umich.edu",
  phone: "(346) 513-6663",
  location: "Ann Arbor, MI · B.S.E. Computer Science, Minor in Statistics (Expected May 2028)",
  resumeHref: "/resume.pdf",
  highlights: [
    "Daikin: TypeScript API test automation across 5 REST endpoints and 100+ validation scenarios—cut regression testing time by 94%.",
    "LCDC Infrastructure Records Pipeline: Python ETL + React app adopted by 3–4 county offices; manual processing time down 91%.",
    "Fruit Nutrition App: TensorFlow CNN with React Native and Expo, wired to nutrition APIs for real-time dietary data.",
    "GEECS: Coordinate professional, social, and mentorship events for a 60+ member program supporting women in computing.",
  ],
  education: [
    {
      school: "University of Michigan, College of Engineering",
      degree: "B.S.E. in Computer Science, Minor in Statistics",
      dates: "Aug 2024 — May 2028",
      gpa: "3.74",
      detail:
        "Honors: UM Club of Houston Scholarship, Dean's Honor List, University Honors. Coursework: Data Structures & Algorithms, Computer Networks, Computer Security, Web Systems, Statistical Computing, Discrete Math, Computer Organization.",
    },
  ],
  experience: [
    {
      company: "Daikin",
      title: "Software Engineer Intern",
      dates: "May 2026 — Present · Waller, TX",
      bullets: [
        "Developed a TypeScript-based API test automation framework covering 5 REST endpoints and 100+ request/response validation scenarios, reducing regression testing time by 94% (30 minutes to 1.8 minutes).",
        "Integrated automated test results with an internal reporting dashboard by mapping test executions to API endpoints and leveraging Allure reporting, improving visibility into system behavior and failure diagnosis.",
        "Designed scalable test infrastructure for validating complex API request and response combinations, increasing automated test coverage across critical thermostat control services.",
      ],
      tags: ["TypeScript", "Allure", "Postman"],
    },
  ],
  leadership: [
    {
      company: "Girls in Electrical Engineering and Computer Science (GEECS)",
      title: "Event Logistics & Organizations Committee Member",
      dates: "Jan 2026 — Present · Ann Arbor, MI",
      badge: "GEECS",
      bullets: [
        "Coordinated logistics and member communications for GEECS professional, social, and mentorship events, supporting engagement across a 60+ member mentorship program.",
        "Collaborated with student leaders to organize networking and professional development initiatives that fostered community among women and gender minorities in computing.",
      ],
    },
  ],
  projects: [
    {
      name: "Fruit Nutrition App",
      badge: "MDST",
      summary:
        "Cross-platform mobile app that classifies fruit from photos and surfaces real-time nutritional data.",
      bullets: [
        "Developed a fruit image classification model using TensorFlow and convolutional neural networks (CNNs) to automatically identify fruits from user-submitted images.",
        "Built a cross-platform mobile application using React Native and Expo that integrated machine learning predictions with nutrition APIs to provide real-time nutritional information.",
        "Implemented an end-to-end image recognition workflow connecting image processing, model inference, and API-driven nutrition services to create a seamless user experience.",
      ],
      stack: [
        "Python",
        "TensorFlow",
        "React Native",
        "Expo",
        "JavaScript",
        "REST APIs",
      ],
      links: [{ label: "GitHub", href: "https://github.com/w-dze" }],
    },
    {
      name: "LCDC Infrastructure Records Pipeline",
      badge: "T4SG",
      summary:
        "Python data pipeline and React web app that automates county drainage record conversion and validation.",
      bullets: [
        "Developed a Python data-processing pipeline that automated the conversion of raw drainage records into structured mapping data, reducing manual processing time by 91%.",
        "Built a React web application for automated data transformation and validation, improving data accuracy and enabling efficient management of county drainage records.",
        "Collaborated directly with government stakeholders to gather requirements and deliver a production-ready solution adopted by 3–4 additional county offices.",
      ],
      stack: ["Python", "React", "JavaScript", "Vite", "HTML/CSS", "Regex"],
      links: [{ label: "GitHub", href: "https://github.com/w-dze" }],
    },
  ],
  skills: [
    {
      title: "Languages",
      items: [
        "Python",
        "TypeScript",
        "Java",
        "C/C++",
        "JavaScript",
        "SQL",
        "HTML/CSS",
        "R",
      ],
    },
    {
      title: "Frameworks & libraries",
      items: ["React", "React Native", "Flask", "TensorFlow", "NumPy", "Pandas"],
    },
    {
      title: "Tools & technologies",
      items: [
        "Git",
        "Docker",
        "REST APIs",
        "Allure",
        "Vite",
        "Linux/Unix",
        "VS Code",
        "Postman",
      ],
    },
  ],
  social: [
    { label: "GitHub", href: "https://github.com/w-dze" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/wendy-du" },
  ],
  openTo:
    "Seeking internship opportunities in software engineering, test automation, full-stack development, and ML/data platforms—available Summer 2027 onward; graduating May 2028.",
};
