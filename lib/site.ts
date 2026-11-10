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
    "Daikin: TypeScript + Playwright API automation across thermostat models and firmware releases—cut validation from 20 hours to 17 minutes.",
    "Syllabus Visualizer: Next.js + PostgreSQL/Prisma app that turns unstructured syllabi into interactive schedules—20 minutes down to 2.",
    "LCDC Infrastructure Pipeline: Python + React GIS pipeline adopted across three local government offices; ~80% less manual processing.",
    "Real-Time Notification Service: Node.js, Kafka, Redis, Docker/Kubernetes on AWS EC2 with autoscaling under bursty load.",
  ],
  education: [
    {
      school: "University of Michigan, College of Engineering",
      degree: "B.S.E. in Computer Science, Minor in Statistics",
      dates: "Aug 2024 — May 2028",
      gpa: "3.74",
      detail:
        "Honors: UM Club of Houston Scholarship, Dean's Honor List, University Honors. Coursework: Data Structures & Algorithms, Computer Networks, Computer Security, Web Systems, Computer Organization, Machine Learning, Database Management Systems.",
    },
  ],
  experience: [
    {
      company: "Daikin Comfort Technologies North America",
      title: "Software Engineer Intern",
      dates: "May 2026 — July 2026 · Waller, TX",
      bullets: [
        "Designed a TypeScript and Playwright automated testing framework validating RESTful API endpoints across thermostat models and 3 firmware releases.",
        "Cut validation time from 20 hours down to just 17 minutes through the automated testing framework, freeing the QA team for exploratory investigation.",
        "Built Python monitoring and load-testing tools to troubleshoot local API reliability under sustained thermostat traffic during peak usage periods.",
        "Identified a 500ms minimum stable inter-request delay through the load-testing tools, accelerating defect diagnosis for the whole firmware team.",
        "Developed a reusable TypeScript device-discovery module with polling and retry logic, syncing local and cloud device state via CI/CD-gated releases.",
      ],
      tags: ["TypeScript", "Playwright", "Python"],
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
      name: "Haggle",
      summary:
        "Multilingual bill-negotiation assistant that explains charges in Spanish, Mandarin, or Korean, then calls providers in English with live translated subtitles.",
      bullets: [
        "Built a Next.js/TypeScript app that OCRs bills with Gemini, detects price jumps and fee anomalies, and explains findings in the user's language with number-checked LLM output.",
        "Integrated ElevenLabs outbound voice agents to negotiate recurring services in English while streaming live translated subtitles and requiring mid-call user approval before any commitment.",
        "Modeled case files, calls, transcripts, approvals, and an append-only hash-chained audit trail in Neon Postgres with Drizzle ORM for end-to-end negotiation workflows.",
        "Enforced server-side guardrails—walk-away price limits, destination allowlists, no credential handling, and a kill switch—so users who can't follow English calls stay in control.",
      ],
      stack: [
        "TypeScript",
        "Next.js",
        "Gemini",
        "ElevenLabs",
        "Neon Postgres",
        "Drizzle",
      ],
      links: [{ label: "Live", href: "https://haggle-beige.vercel.app" }],
    },
    {
      name: "Relational Database Engine",
      summary:
        "CLI relational database engine in C++ with CREATE, INSERT, DELETE, PRINT, and JOIN across multiple linked tables.",
      bullets: [
        "Built a CLI relational database engine in C++ supporting CREATE, INSERT, DELETE, PRINT, and JOIN operations across multiple linked tables.",
        "Applied object-oriented design to manage tables, records, and query execution, keeping the engine's core modules cleanly separated by responsibility.",
        "Sped up record lookup and filtering across relational datasets by implementing hash-table and binary-search-tree indexes for the query planner used.",
        "Handled invalid commands, edge cases, and multiple query paths to strengthen correctness, applying core data structures and debugging techniques.",
      ],
      stack: ["C++"],
      links: [],
    },
    {
      name: "Syllabus Visualizer",
      summary:
        "Full-stack Next.js app that turns unstructured syllabi into interactive course schedules for students juggling multiple classes.",
      bullets: [
        "Created a full-stack Next.js application transforming unstructured syllabi into interactive course schedules for students managing multiple classes.",
        "Cut a recurring student workflow from 20 minutes down to just 2 minutes by automating the entire syllabus-to-schedule conversion process end to end.",
        "Designed backend API and PostgreSQL/Prisma workflows to extract, validate, persist, and serve structured course data to a responsive React interface.",
        "Deployed production app to Vercel with Dockerized local development environment, using Gemini API schema validation to prevent malformed outputs.",
      ],
      stack: [
        "TypeScript",
        "Next.js",
        "React",
        "PostgreSQL",
        "Prisma",
        "Gemini API",
      ],
      links: [
        { label: "Live", href: "https://syllabus-visualizer.vercel.app/" },
      ],
    },
    {
      name: "LCDC Infrastructure Pipeline",
      badge: "T4SG",
      summary:
        "Python data pipeline and React interface that transforms public infrastructure records into GIS-ready data for mapping analysis.",
      bullets: [
        "Developed a Python data-processing pipeline transforming public infrastructure records into validated, GIS-ready data for downstream mapping analysis.",
        "Cut manual processing time by roughly 80% through the automated pipeline, supporting adoption across three separate local government office teams.",
        "Implemented a React interface with reusable parsing and validation workflows, automating processing of heterogeneous public infrastructure records.",
        "Worked with developers and government stakeholders through Agile sprints, code reviews, and iterative feedback to ship maintainable software for users.",
      ],
      stack: ["Python", "React", "Regular Expressions", "GIS"],
      links: [{ label: "Live", href: "https://lcdc.netlify.app/" }],
    },
    {
      name: "Real-Time Notification Service",
      summary:
        "Node.js notification service streaming activity events through Kafka, with Redis caching and Kubernetes autoscaling on AWS.",
      bullets: [
        "Built a real-time notification service in Node.js, streaming user activity events through Kafka to downstream subscriber services reliably each time.",
        "Cached frequently accessed user preferences in Redis, cutting notification delivery latency significantly during peak traffic windows tested overall.",
        "Containerized the service with Docker and deployed it on Kubernetes, configuring horizontal pod autoscaling for bursty notification traffic volume.",
        "Hosted the deployment on AWS EC2 behind an Application Load Balancer, routing traffic across replicas for consistent availability under heavy load.",
        "Load-tested the pipeline with simulated concurrent users, tuning Kafka partition counts and Redis eviction policies to hold latency perfectly steady.",
      ],
      stack: [
        "Node.js",
        "Kafka",
        "Redis",
        "Docker",
        "Kubernetes",
        "AWS EC2",
      ],
      links: [],
    },
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
      links: [],
    },
  ],
  skills: [
    {
      title: "Languages",
      items: [
        "TypeScript/JavaScript",
        "Python",
        "C++",
        "C",
        "Java",
        "SQL",
        "HTML/CSS",
      ],
    },
    {
      title: "Frameworks & libraries",
      items: ["React", "Next.js", "Node.js", "Flask", "Prisma"],
    },
    {
      title: "Databases & APIs",
      items: ["PostgreSQL", "SQLite", "REST APIs"],
    },
    {
      title: "Tools & infrastructure",
      items: [
        "Git/GitHub",
        "Docker",
        "AWS EC2",
        "Vercel",
        "Playwright",
        "Linux/Unix",
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
