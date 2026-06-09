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
  location: "Ann Arbor, MI · B.S.E. Computer Science, Minor in Statistics (May 2028)",
  resumeHref: "/resume.pdf",
  highlights: [
    "Daikin: TypeScript + Playwright API automation across ~90 scenarios—cut manual endpoint validation from ~30 minutes to 86.4 ms.",
    "LCDC Infrastructure Records Pipeline: Python ETL + React/Vite app adopted by three government offices; record retrieval time down 91%.",
    "Fruit Nutrition App: TensorFlow classifier with Edamam API, Flask backend, and cross-platform React Native app—presented at Data Science Night.",
    "GEECS: Coordinate 3+ events/month and administer a 60-member mentorship program for women in CS and EE.",
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
        "Developed a TypeScript and Playwright API automation framework validating 5 internal service endpoints across approximately 90 test scenarios, eliminating ad-hoc manual testing processes.",
        "Built structured test reports tracking endpoint coverage, execution results, and validation status, reviewed by the engineering team to inform release decisions.",
        "Reduced manual endpoint validation time by 99.9% through full automation across 6 test files, cutting execution from approximately 30 minutes to 86.4 milliseconds.",
      ],
      tags: ["Playwright", "Postman", "TypeScript"],
    },
  ],
  leadership: [
    {
      company: "Girls in Electrical Engineering and Computer Science (GEECS)",
      title: "Event Logistics & Organizations Committee Member",
      dates: "Jan 2026 — Present · Ann Arbor, MI",
      badge: "GEECS",
      bullets: [
        "Coordinated logistics for 3+ community events per month within a competitive tech organization, tracking attendance and collecting member feedback to improve future programming.",
        "Administered a 60-member mentorship program pairing women in CS and EE, organizing monthly activities, managing engagement records, and documenting gatherings.",
        "Spearheaded annual presentation night by coordinating scheduling, sourcing slideshow contributions, and facilitating post-event reflections across the cohort.",
      ],
    },
  ],
  projects: [
    {
      name: "Fruit Nutrition App",
      badge: "MDST",
      summary:
        "End-to-end AI-powered mobile app that identifies fruits from photos and returns real-time nutritional data.",
      bullets: [
        "Built and trained a TensorFlow image classification model to identify fruits from photos, integrated with the Edamam Food Database API to return real-time nutritional data.",
        "Developed a Flask backend to serve model predictions, connecting the ML pipeline to a cross-platform React Native mobile app deployed on iOS and Android via Expo.",
        "Collaborated across a 5-person team to deliver an end-to-end AI-powered application from model training to user-facing deployment, presented at Data Science Night.",
      ],
      stack: [
        "TensorFlow",
        "Flask",
        "React Native",
        "Expo",
        "Edamam API",
      ],
      links: [{ label: "GitHub", href: "https://github.com/w-dze" }],
    },
    {
      name: "LCDC Infrastructure Records Pipeline",
      badge: "T4SG",
      summary:
        "Python ETL pipeline and React/Vite web app that standardizes county infrastructure records for GIS and staff lookup.",
      bullets: [
        "Developed a Python ETL pipeline using regex to parse, clean, and standardize historical infrastructure records into GIS-compatible formats for Lapeer County Drain Commission.",
        "Built a React + Vite web application to surface the cleaned data, enabling county staff to search and access records through a browser interface instead of manual file lookups.",
        "Reduced record retrieval time by 91% through automation, with the pipeline later adopted by three government offices.",
      ],
      stack: ["Python", "Regex", "React", "Vite"],
      links: [{ label: "GitHub", href: "https://github.com/w-dze" }],
    },
  ],
  skills: [
    {
      title: "Languages",
      items: ["Python", "TypeScript", "JavaScript", "Java", "C++", "SQL"],
    },
    {
      title: "Frameworks & tools",
      items: [
        "Playwright",
        "Postman",
        "TensorFlow",
        "React Native",
        "Flask",
        "Expo",
        "Node.js",
        "React",
        "Vite",
        "Git",
      ],
    },
    {
      title: "Data & ML",
      items: [
        "ETL pipelines",
        "Image classification",
        "Data cleaning",
        "GIS-compatible data formats",
        "Statistical computing",
      ],
    },
    {
      title: "Design",
      items: ["Figma", "Wireframing", "UX prototyping"],
    },
  ],
  social: [
    { label: "GitHub", href: "https://github.com/w-dze" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/wendy-du" },
  ],
  openTo:
    "Seeking internship opportunities in software engineering, test automation, full-stack development, and ML/data platforms—available Summer 2027 onward; graduating May 2028.",
};
