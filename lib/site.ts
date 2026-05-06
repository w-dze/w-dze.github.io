export type SocialLink = {
  label: string;
  href: string;
};

export type ExperienceItem = {
  company: string;
  title: string;
  dates: string;
  bullets: string[];
};

export type ProjectItem = {
  name: string;
  summary: string;
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
    "I build full-stack web apps, data/ML pipelines, and civic-tech tools—focused on clear systems, measurable impact, and great user experiences.",
  threadLine:
    "Off the clock I crochet: loose yarn becomes pattern, one stitch at a time. I bring the same patience to code, data, and teamwork.",
  email: "zhuoerdu@umich.edu",
  phone: "(346) 513-6663",
  location: "Ann Arbor, MI · B.S.E. Computer Science, Minor in Statistics (May 2028)",
  resumeHref: "/resume.pdf",
  highlights: [
    "University of Michigan College of Engineering — Dean’s List & University Honors; UM Club of Houston Scholarship.",
    "Tech 4 Social Good: Python GIS pipeline adopted by 4 county offices; automated workflows cut processing time ~60%.",
    "Michigan Data Science Team: CNN fruit-classification model (~70% accuracy) with nutrition API; 1000+ labeled training images.",
    "Mentored 60+ students (ages 8–18) in HTML, CSS, JavaScript, and Unity at iCode Cypress.",
  ],
  education: [
    {
      school: "University of Michigan, College of Engineering",
      degree: "B.S.E. in Computer Science, Minor in Statistics",
      dates: "Aug 2024 — May 2028",
      detail:
        "Honors & awards: UM Club of Houston Scholarship, Dean’s List, University Honors. Coursework: Data Structures & Algorithms, Discrete Mathematics, Computer Organization, Web Systems, Statistical Computing, Computer Security, Computer Networks.",
    },
  ],
  experience: [
    {
      company: "Daikin",
      title: "Incoming Summer Intern",
      dates: "Summer 2026",
      bullets: [
        "Incoming Summer 2026 software engineering internship at Daikin.",
      ],
    },
    {
      company: "Tech 4 Social Good",
      title: "Software Engineer",
      dates: "Sept 2024 — Present · Ann Arbor, MI",
      bullets: [
        "Built a Python data-processing pipeline converting raw drainage and infrastructure data into GIS-friendly formats—shipped tooling adopted by four county offices.",
        "Automated manual cleaning and conversion flows, reducing processing time roughly 60% and cutting recurring reporting errors.",
        "Partnered with county stakeholders and a cross-functional student team to translate real government needs into maintainable production tools.",
      ],
    },
    {
      company: "Michigan Data Science Team",
      title: "Data Scientist",
      dates: "Jan 2025 — Present · Ann Arbor, MI",
      bullets: [
        "Trained a CNN classifier in TensorFlow for fruit recognition, wired predictions to a nutrition API, and surfaced results in an end-user-facing app.",
        "Curated and labeled 1000+ public images through iterative preprocessing to reach roughly 70% accuracy.",
        "Contributed to an AlphaFold-inspired protein-structure initiative—mining biological sequences and prototyping deep architectures for folding behavior.",
      ],
    },
    {
      company: "Taubman Health Sciences Library",
      title: "Information Desk Assistant",
      dates: "Jan 2025 — Present · Ann Arbor, MI",
      bullets: [
        "Serve 15–25 patrons per shift—triaging navigation, access, and space reservations with fast, accurate guidance.",
        "Run circulation for 200–300 materials weekly with consistent records so shared resources stay reliable.",
        "Process 20–30 holds/reserves daily, tightening turnaround on high-demand items.",
      ],
    },
    {
      company: "iCode Cypress",
      title: "Lab Mentor",
      dates: "Aug 2023 — May 2024 · Cypress, TX",
      bullets: [
        "Taught 60+ learners (ages 8–18) HTML, CSS, JavaScript, and Unity through hands-on labs tailored to varied skill levels.",
        "Designed projects and curricula that boosted engagement and culminated in working games and sites.",
        "Provided 1:1 debugging coaching so students shipped projects confidently.",
      ],
    },
  ],
  leadership: [
    {
      company: "MProduct",
      title: "Product Manager",
      dates: "Jan 2026 — Present · Ann Arbor, MI",
      bullets: [
        "Driving a housing product from discovery—user interviews synthesized into prioritized requirements.",
        "Shaped UX via wireframes, flows, and interactive prototypes aligning engineering work with validated needs.",
        "Shipped iterative Figma UI at high fidelity, incorporating peer and user feedback for each milestone.",
      ],
    },
    {
      company: "Girls in Electrical Engineering and Computer Science (GEECS)",
      title: "Event Logistics & Organizations Committee Member",
      dates: "Jan 2026 — Present · Ann Arbor, MI",
      bullets: [
        "Coordinate logistics for ~3 community events monthly (rooms, materials, day-of execution) for 20+ attendees each.",
        "Support a 30+ student mentorship program with monthly family meetings, engagement tracking, and relationship-building activities.",
        "Partner across committees to plan workshops, socials, and talks that keep membership active.",
      ],
    },
  ],
  projects: [
    {
      name: "MapReduce",
      summary:
        "Distributed job runner that shards work across multiple worker processes with health checks, automatic failover, and verified completion under failure injection.",
      stack: [
        "Python",
        "Distributed Systems",
        "Parallel Processing",
        "Networking",
        "Process Management",
      ],
      links: [{ label: "GitHub", href: "https://github.com/w-dze" }],
    },
    {
      name: "Insta485",
      summary:
        "Instagram-style React client backed by Flask REST APIs—infinite-scroll feed, authenticated likes/comments/double-tap gestures, live comment refresh, and auto-updating timestamps without full reloads.",
      stack: [
        "React",
        "JavaScript",
        "Flask",
        "REST",
        "SQL",
        "AWS",
        "Webpack",
        "HTML/CSS",
      ],
      links: [{ label: "GitHub", href: "https://github.com/w-dze" }],
    },
  ],
  skills: [
    {
      title: "Languages",
      items: ["Java", "Python", "C/C++", "SQL", "JavaScript", "HTML/CSS", "R"],
    },
    {
      title: "Frameworks",
      items: ["React", "Node.js", "Flask"],
    },
    {
      title: "Developer tools",
      items: ["Git", "Docker", "VS Code", "PyCharm", "Eclipse"],
    },
    {
      title: "Libraries",
      items: ["pandas", "NumPy", "Matplotlib", "TensorFlow"],
    },
  ],
  social: [
    { label: "GitHub", href: "https://github.com/w-dze" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/wendy-du" },
  ],
  openTo:
    "Seeking internship opportunities in software engineering, full-stack development, ML/data platforms, and civic-tech teams—available Summer 2026 onward; graduating May 2028.",
};
