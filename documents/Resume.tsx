import { Document, Head, Page, Spacer } from "@htmldocs/react";
import "~/index.css";

interface Education {
  school: string;
  degree: string;
  location?: string;
  startDate?: string;
  endDate: string;
  details?: string;
}

interface Experience {
  company: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string;
  achievements: string[];
}

interface Certification {
  name: string;
  organization: string;
  date: string;
}

interface Contact {
  phone: string;
  email: string;
  linkedin?: string;
  github?: string;
}

export interface ResumeProps {
  name: string;
  summary: string;
  contact: Contact;
  experience: Experience[];
  education: Education[];
  keySkills: string[];
  certifications?: Certification[];
  languages?: { language: string; level: string }[];
}

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-b-2 border-black mb-3 mt-5">
      <h2 className="text-base font-bold uppercase tracking-wider pb-1">{children}</h2>
    </div>
  );
}

function Resume({
  name,
  summary,
  contact,
  experience,
  education,
  keySkills,
  certifications,
  languages,
}: ResumeProps) {
  // Split skills into two columns
  const midpoint = Math.ceil(keySkills.length / 2);
  const leftSkills = keySkills.slice(0, midpoint);
  const rightSkills = keySkills.slice(midpoint);

  return (
    <Document size="A4" orientation="portrait">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Arial&display=swap" rel="stylesheet" />
      </Head>
      <Page className="text-[10pt] leading-tight p-12" style={{ fontFamily: "Arial, sans-serif" }}>
        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold mb-2 uppercase tracking-wide">{name}</h1>
          <div className="flex justify-center items-center gap-3 text-[9pt]">
            <a href={`mailto:${contact.email}`}>
              {contact.email}
            </a>
            <span>|</span>
            <span>
              {contact.phone}
            </span>
            <span>|</span>
            {contact.linkedin && (
              <>
                <a href={`https://linkedin.com/in/${contact.linkedin}`}>
                  in/{contact.linkedin}
                </a>
                <span>|</span>
              </>
            )}
            {contact.github && (
              <a href={`https://github.com/${contact.github}`}>
                github.com/{contact.github}
              </a>
            )}
          </div>
        </div>

        {/* Personal Statement */}
        <section>
          <SectionHeader>Personal Statement</SectionHeader>
          <p className="leading-relaxed text-justify">{summary}</p>
        </section>

        {/* Key Skills */}
        <section>
          <SectionHeader>Key Skills</SectionHeader>
          <div className="grid grid-cols-2 gap-x-8">
            <div>
              {leftSkills.map((skill, index) => (
                <div key={index} className="flex items-start mb-1">
                  <span className="mr-2">•</span>
                  <span className="text-[9.5pt]">{skill}</span>
                </div>
              ))}
            </div>
            <div>
              {rightSkills.map((skill, index) => (
                <div key={index} className="flex items-start mb-1">
                  <span className="mr-2">•</span>
                  <span className="text-[9.5pt]">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Work History */}
        <section>
          <SectionHeader>Work History</SectionHeader>
          {experience.map((job, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-baseline mb-0.5">
                <h3 className="font-bold text-[10.5pt] uppercase">{job.title}</h3>
                <span className="text-[9.5pt]">{job.startDate} - {job.endDate}</span>
              </div>
              <div className="italic text-[9.5pt] mb-1.5">
                {job.company} ({job.location})
              </div>
              <ul className="ml-5 space-y-1">
                {job.achievements.map((achievement, i) => (
                  <li key={i} className="leading-relaxed text-[9.5pt] list-disc">
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Education & Certifications */}
        <section>
          <SectionHeader>Education & Certifications</SectionHeader>
          
          {education.map((edu, index) => (
            <div key={index} className="mb-2">
              <p className="font-bold text-[10pt]">{edu.degree}</p>
              <p className="text-[9.5pt]">
                {edu.school} | {edu.endDate}
              </p>
            </div>
          ))}

          {certifications && certifications.length > 0 && (
            <div className="mt-3 space-y-2">
              {certifications.map((cert, index) => (
                <div key={index}>
                  <p className="font-bold text-[10pt]">{cert.name}</p>
                  <p className="text-[9.5pt]">{cert.organization} | {cert.date}</p>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Languages */}
        {languages && languages.length > 0 && (
          <section>
            <SectionHeader>Languages</SectionHeader>
            <ul className="list-disc ml-5">
              {languages.map((lang, index) => (
                <li key={index} className="text-[9.5pt]">
                  <span className="font-bold">{lang.language}</span> - {lang.level}
                </li>
              ))}
            </ul>
          </section>
        )}
      </Page>
    </Document>
  );
}

Resume.PreviewProps = {
  name: "Bernardo Trindade de Abreu",
  summary: "Senior Full Stack Engineer with 6+ years of experience across React, Next.js, Node.js, Python, and GraphQL. Skilled in AWS, Terraform, Docker, CI/CD, mobile development, microservices, and micro-frontends. Strong background integrating LLMs, RAG pipelines, and AI-driven features. Experienced building scalable APIs, secure authentication (OAuth2/OIDC), and automated test suites. Proven track record delivering high-performance solutions for enterprise clients in fintech, healthcare, media, and IT management.",
  contact: {
    phone: "+351 960 080 191",
    email: "btrindadedeabreu@gmail.com",
    linkedin: "bertrindade",
    github: "BerTrindade",
  },
  experience: [
    {
      company: "Ustwo",
      title: "Senior Full Stack Engineer",
      location: "London, UK",
      startDate: "Dec 2023",
      endDate: "Present",
      achievements: [
        "Designed and deployed scalable AWS architectures (ECS, Lambda, Cognito, Terraform), improving system reliability and reducing deployment time across multiple global client projects.",
        "Built full-stack solutions using React, Next.js, Node.js, FastAPI, and .NET 6, delivering highly secure, modular applications adopted in enterprise environments.",
        "Enhanced AI-powered products by integrating LLMs, LangChain, OpenAI APIs, and AWS Bedrock, increasing response accuracy and system traceability for RAG-based workflows.",
        "Established monorepo tooling using Nx, PNPM, and Plop.js, reducing onboarding time by 80% and improving developer productivity across teams.",
        "Delivered frontend design systems using React 19, Storybook, and Styled Components, establishing reusable UI foundations.",
        "Created and validated GraphQL and REST APIs with strong schema governance, authentication standards (OAuth2, OIDC, Apple OAuth2), and end-to-end data reliability.",
        "Defined testing standards using Jest, Vitest, Cypress, and Playwright, leading teams to consistently maintain 80%+ code coverage and significantly reduce regression defects.",
        "Authored technical documentation and ADRs, improving onboarding, delivery speed, and engineering consistency.",
      ],
    },
    {
      company: "NinjaOne (formerly NinjaRMM)",
      title: "Software Engineer",
      location: "Remote",
      startDate: "Apr 2022",
      endDate: "Nov 2023",
      achievements: [
        "Developed core UI features for global RMM software, improving user experience and reducing interface-related support tickets.",
        "Delivered a full IP allowlist management system (CRUD, validation, permissions), enabling administrators to enforce stricter security measures and reduce unauthorized access incidents.",
        "Integrated WebSocket communication for real-time workflows by subscribing to WAMP channels, improving real-time communication reliability and reducing error rates across critical connection features.",
        "Identified and resolved inheritance/security vulnerabilities, closing compliance gaps and strengthening organisational-level permission enforcement.",
        "Enhanced remote access UX with countdown timers, auto-state detection, and resilient reconnection logic, reducing failed session attempts.",
        "Improved CI/CD stability by fixing failing tests, restructuring modules, and increasing automated test coverage, resulting in more predictable releases.",
      ],
    },
    {
      company: "PrimeIT Consultancy",
      title: "Frontend Engineer",
      location: "Lisbon, PT",
      startDate: "Jan 2022",
      endDate: "Apr 2022",
      achievements: [
        "Built GDPR-compliance interfaces using React, TypeScript, MUI, and GraphQL, improving usability and helping Trustly (Sweden) meet regulatory requirements.",
        "Refactored UI components for reusability and scalability, reducing development time for new features across the platform.",
        "Collaborated with design teams to convert Figma prototypes into accessible, pixel-perfect production components.",
        "Supported Okta authentication integration by validating structure, security logic, and identity flows across internal teams.",
        "Improved frontend maintainability by proposing architectural and data-model enhancements adopted in later product cycles.",
        "Coordinated API contracts and cross-team dependencies, streamlining delivery and reducing blockers during sprints.",
      ],
    },
    {
      company: "Aurum Software",
      title: "Frontend Engineer",
      location: "Santa Catarina, BR",
      startDate: "May 2021",
      endDate: "Dec 2021",
      achievements: [
        "Led the migration from AngularJS to React, improving maintainability and reducing technical debt across healthcare applications.",
        "Built modular, reusable React components following best practices, accelerating feature delivery and improving code consistency.",
        "Collaborated with backend teams to integrate RESTful APIs and deliver secure, performant user interfaces for healthcare workflows.",
        "Enhanced UI accessibility and responsiveness, ensuring compliance with healthcare industry standards and improving user satisfaction scores.",
      ],
    },
    {
      company: "Meta",
      title: "React Native Developer",
      location: "Remote",
      startDate: "Aug 2018",
      endDate: "Apr 2021",
      achievements: [
        "Developed cross-platform mobile applications using React Native, delivering high-quality solutions for iOS and Android platforms.",
        "Integrated third-party APIs and native modules, extending app functionality and improving user engagement metrics.",
        "Optimized app performance by reducing bundle sizes, improving render times, and implementing lazy loading strategies.",
        "Collaborated with design and product teams to transform wireframes into production-ready mobile interfaces with pixel-perfect accuracy.",
        "Maintained CI/CD pipelines for automated builds and testing, reducing deployment time and increasing release confidence.",
      ],
    },
  ],
  keySkills: [
    "Initiative",
    "Communication",
    "Time Management",
    "Problem-solving & troubleshooting skills",
    "AngularJS",
    "Feature Flags",
    "Webpack Module Federation",
    "React.js, Next.js, React Native",
    "TypeScript, JavaScript, Redux",
    "Material UI, Storybook",
    "Node.js, Python (FastAPI), GraphQL",
    ".NET 6, Java (Spring Boot), NestJS",
    "LLM integration",
    "Jest, Vitest, Cypress",
    "Attention to Detail",
    "Analytical Thinking",
    "Team Work",
    "Organizational Excellence",
    "Monorepos (Nx), CI/CD pipelines",
    "Playwright, React Testing Library, JUnit",
    "PostgreSQL, Prisma, MongoDB, Puppeteer",
    "Scrum/Agile, ADR documentation",
    "AWS, Terraform, Docker, GitHub Actions",
    "Azure, Kubernetes",
    "Microservices, Micro-frontends",
    "Retrieval-Augmented Generation (RAG)",
    "LangChain, OpenAI APIs, AWS Bedrock",
  ],
  education: [
    {
      school: "Feevale University (Brazil)",
      degree: "Computer Science (BSc)",
      endDate: "Oct 2023",
    },
    {
      school: "SENAI (Brazil)",
      degree: "Information Technology (BTEC)",
      endDate: "Jul 2014",
    },
  ],
  certifications: [
    {
      name: "Node.js Part 1: Innovating with JavaScript on the Backend",
      organization: "Alura",
      date: "Jan 2019",
    },
    {
      name: "JavaScript: Programming in the Web Language",
      organization: "Alura",
      date: "Jan 2019",
    },
  ],
  languages: [
    { language: "English", level: "Professional" },
    { language: "Portuguese", level: "Native" },
  ],
};

Resume.documentId = "resume";

export default Resume;
