
"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import SocialIcons from "../components/SocialIcons";
import Image from "next/image";
import { useGradientCursor } from "../hooks/useGradientCursor";
import { useStickyHeaders } from "../hooks/useStickyHeaders";
import { useActiveSection } from "../hooks/useActiveSection";
import Link from "next/link";


const imagePaths = ["/assets/1.webp", "/assets/2.webp", "/assets/g-force.webp", "/assets/8.webp"];

type Section = { id: string; title: string };
type Job = {
  title: string;
  company: string;
  url: string;
  period: string;
  description: string;
  skills: string[];
};
type Project = {
  title: string;
  url: string;
  description: string;
  image: string;
  skills: string[];
};

const sections: Section[] = [
  { id: "about", title: "About" },
  { id: "experience", title: "Experience" },
  { id: "projects", title: "Projects" },
];

const jobs: Job[] = [
  {
    title: "Front End Developer",
    company: "Decode Meta Tech",
    url: "https://decodemetatech.com/",
    period: "Dec 2022 — Present",
    description:
      "Built robust enterprise web applications with React.js, TypeScript, and Tailwind CSS, ensuring excellent performance and strong SEO results. Greatly improved page load speeds for an e-commerce platform through effective code splitting and lazy loading techniques. Mentored two junior developers on front-end best practices, improving team code quality.",
    skills: ["React.js", "TypeScript", "Tailwind CSS", "Next.js"],
  },
  {
    title: "Front End Developer",
    company: "Eppeok Solutions",
    url: "https://eppeok.com",
    period: "Sep 2021 — Nov 2022",
    description:
      "Transformed legacy jQuery websites into modern, intuitive interfaces using Lottie.js animations, significantly enhancing scalability and streamlining maintenance efforts. Enhanced SEO with modern CSS architecture, achieving 90+ Lighthouse scores across sites. Conducted A/B testing on landing pages, significantly increasing conversion rates for a trading website.",
    skills: ["React.js", "Lottie.js", "HTML", "SCSS", "WordPress"],
  },
  {
    title: "Front End Developer",
    company: "SZI Technologies",
    url: "https://szitechnologies.com",
    period: "Mar 2020 — Aug 2021",
    description:
      "Boosted site efficiency by 40% for key projects by streamlining asset delivery with Webpack and integrating Cloudflare CDN for enhanced caching. Developed WCAG 2.1-compliant user interfaces using Axe and VoiceOver, enhancing accessibility for users with disabilities. Converted PSD/Figma mockups into responsive HTML/CSS templates with hover animations and scroll effects.",
    skills: ["JavaScript", "Webpack", "HTML", "CSS", "Figma"],
  },
  {
    title: "Cyber Cafe Manager",
    company: "Family Cyber Cafe Business",
    url: "#",
    period: "2011 — 2019",
    description:
      "Managed daily operations of a high-traffic cyber cafe, overseeing hardware maintenance, software troubleshooting, and customer support. Enhanced operational efficiency by organizing workstation maintenance schedules, reducing downtime and improving customer access to services. Promoted business growth by creating basic online listings and flyers using Photoshop, boosting local visibility and attracting more repeat customers.",
    skills: ["Photoshop", "Customer Support", "Hardware Maintenance"],
  },
];

const projects: Project[] = [
  {
    title: "Brahman Samaj USA Informative",
    url: "https://brahmansamajusa.org/",
    description:
      "Developed an informative website for Brahman Samaj USA, featuring community news, upcoming events, and donation campaigns. Implemented dynamic content management using PHP, ensuring accessibility and responsive design across devices.",
    image: imagePaths[0],
    skills: ["HTML/CSS", "Glassmorphism", "Bootstrap", "JavaScript", "WordPress"],
  },
  {
    title: "Rank Crest Informative",
    url: "https://rankcrest.com/",
    description:
      "Created a marketing-focused website for Rank Crest, optimized for SEO and user engagement. Utilized React and Tailwind CSS for a responsive, modern interface, with animations powered by Framer Motion to enhance user experience.",
    image: imagePaths[1],
    skills: ["WordPress", "Bootstrap CSS", "Lottie.js", "AOS"],
  },
  {
    title: "Force Club",
    url: "https://arh-force-club.netlify.app/",
    description:
      "Developed a community platform for Force Club, featuring event listings and member profiles. Built with Next.js and Tailwind CSS, optimized for performance and accessibility with WCAG 2.1 compliance.",
    image: imagePaths[2],
    skills: ["Next.js", "Tailwind CSS", "JavaScript", "Minimalist UI"],
  },
  {
    title: "Oliamoda",
    url: "https://oliamoda.com/",
    description:
      "Built an e-commerce platform for Oliamoda, focusing on responsive design and performance optimization. Integrated WordPress for content management and used Lottie.js for engaging animations.",
    image: imagePaths[3],
    skills: ["WordPress", "Bootstrap CSS", "JavaScript"],
  },
];

const Portfolio = () => {
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { stickyStates, sectionRefs: stickyRefs } = useStickyHeaders(sections.map((s) => s.id));
  const { activeSection, setActiveSection, sectionRefs: activeRefs } = useActiveSection(sections.map((s) => s.id));

  const mergedRefs = (id: string) => (el: HTMLElement | null) => {
    stickyRefs.current[id] = el;
    activeRefs.current[id] = el;
  };

  useGradientCursor();

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveSection(id);
  };

  return (
    <div className="wrapper">
      <header className="header">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col h-full"
        >
          <div className="mb-0 lg:mb-12">
            <motion.h1
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ rotate: 10 }}
              className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl"
            >
              Ali Rehan Haider
            </motion.h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
              Front End Engineer
            </h2>
            <p className="mt-4 max-w-xs leading-normal">
              I build engaging and accessible digital experiences for the web.
            </p>
          </div>

          <nav className="hidden lg:block">
            <ul className="space-y-4 mb-3">
              {sections.map(({ id, title }) => (
                <li key={id}>
                  <motion.button
                    className={`group flex items-center space-x-4 p-2 transition-colors ${activeSection === id ? "text-[#64ffda]" : "hover:text-[#64ffda] text-[#8892b0]"
                      }`}
                    onClick={() => handleNavClick(id)}
                  >
                    <span
                      className={`h-px transition-all duration-300 ${activeSection === id
                        ? "w-20 bg-[#64ffda]"
                        : "w-8 group-hover:w-16 group-hover:bg-[#64ffda] bg-[#8892b0]"
                        }`}
                    />
                    <motion.span whileHover={{ x: 5 }} className="text-xs font-bold uppercase tracking-widest">
                      {title}
                    </motion.span>
                  </motion.button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex space-x-5 mt-0 lg:mt-8">
            <SocialIcons />
          </div>
        </motion.div>
      </header>

      <main className="main">
        <motion.section
          id="about"
          className="flex flex-col max-w-3xl scroll-mt-20 lg:scroll-mt-0"
          ref={mergedRefs("about")}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="sticky-header -mx-6 px-6" data-sticky={stickyStates.about ? "true" : "false"}>
            <h2 className="block lg:hidden text-sm font-bold uppercase tracking-widest text-slate-200 sticky top-0 z-20">
              About
            </h2>
          </div>
          <div className="space-y-4 pt-5">
            <p>
              I{'’'}m an experienced software engineer passionate about building engaging and accessible digital experiences
              that combine thoughtful design with robust engineering. My work focuses on creating pixel-perfect,
              performance-optimized interfaces that are WCAG-compliant and user-friendly.
            </p>
            <p>
              Currently, I{'’'}m a Front End Developer at <span className="text-[#64ffda]">Decode Meta Tech</span>, where I
              develop enterprise-level web applications using React.js, TypeScript, and Tailwind CSS, with a strong
              emphasis on SEO and performance optimization.
            </p>
            <p>
              Previously, I{'’'}ve worked at <span className="text-[#64ffda]">Eppeok Solutions</span> and{" "}
              <span className="text-[#64ffda]">SZI Technologies</span>, where I modernized legacy systems, improved
              accessibility, and enhanced site performance through modern frameworks and tools like Webpack and Cloudflare
              CDN. I also managed a family cyber cafe business, honing skills in customer support and operational efficiency.
            </p>
            <p>
              I hold a Diploma in Graphic and Web Design from Arena Animation (2020), a B.A. (Honors) from JRN Rajasthan
              Vidyapeeth (2011), and a certification from NIOS (2008). In my spare time, I enjoy climbing, reading, and
              exploring new technologies.
            </p>
          </div>
        </motion.section>

        <motion.section
          id="experience"
          className="py-20 flex flex-col max-w-3xl scroll-mt-20 lg:scroll-mt-0"
          ref={mergedRefs("experience")}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="sticky-header -mx-6 px-6" data-sticky={stickyStates.experience ? "true" : "false"}>
            <h2 className="block lg:hidden text-sm font-bold uppercase tracking-widest text-slate-200 sticky top-0 z-20">
              Experience
            </h2>
          </div>
          <div className="space-y-14 pt-5 [&>*]:bg-[#112240] job-container">
            {jobs.map((job, index) => (
              <div
                key={index}
                className="group rounded-lg p-6 border-l-2 border-transparent hover:shadow-2xl hover:border-[#64ffda] transition-all duration-300 job-item"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 group-hover:text-[#64ffda] transition-colors duration-300">
                  <div>
                    <div className="flex items-center experience-inner-container">
                      <h3 className="text-sm font-semibold text-slate-200 group-hover:text-[#64ffda]">{job.title}</h3>
                      <a
                        href={job.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 text-[#64ffda] hover:underline"
                      >
                        <span className="inline-flex items-center text-sm font-semibold text-slate-200 group-hover:text-[#64ffda]">
                          {job.company}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 ml-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                        </span>
                      </a>
                    </div>
                    <p className="text-sm text-[#8892b0] mt-1">{job.period}</p>
                  </div>
                </div>
                <p className="text-sm text-[#a8b2d1] mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, i) => (
                    <span key={i} className="bg-[#172a45] text-[#64ffda] px-3 py-1 rounded-full text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <div className="mt-0 mb-2">
          <a
            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-[#64ffda] focus-visible:text-[#64ffda] text-base"
            href="/assets/resume.pdf"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="View Full Résumé (opens in a new tab)"
          >
            <span>
              View Full Résumé
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </a>
        </div>

        <motion.section
          id="projects"
          className="py-20 pb-9 flex flex-col max-w-4xl scroll-mt-20 lg:scroll-mt-0"
          ref={mergedRefs("projects")}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="sticky-header -mx-6 px-6" data-sticky={stickyStates.projects ? "true" : "false"}>
            <h2 className="block lg:hidden text-sm font-bold uppercase tracking-widest text-slate-200 sticky top-0 z-20">
              Projects
            </h2>
          </div>
          <div className="space-y-14 pt-5 project-container">
            {projects.map((project, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-6 lg:p-4 md:hover:bg-[#172a45] rounded-md md:hover:shadow-2xl transition-all duration-300 project-item"
                ref={(el) => {
                  projectRefs.current[index] = el;
                }}
              >
                <div className="md:w-1/4 flex-shrink-0">
                  <div className="p-2 rounded-md overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={240}
                      height={135}
                      sizes="(max-width: 768px) 100vw, 25vw"
                      quality={80}
                      className="w-full h-auto rounded object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="md:w-3/4">
                  <div className="flex items-center mb-2">
                    <h3 className="text-sm font-semibold text-[#ccd6f6]">{project.title}</h3>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 text-[#64ffda] hover:text-[#64ffda]/80"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                  <p className="text-sm text-[#a8b2d1] mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, i) => (
                      <span key={i} className="bg-[#172a45] text-[#64ffda] px-3 py-1 rounded-full text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        <div className="mt-0 mb-12">
          <Link
            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-[#64ffda] focus-visible:text-[#64ffda] text-base"
            href="/archive"
            aria-label="View Full Project Archive"
          >
            <span>
              View Full Project Archive
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </Link>
        </div>

        <footer className="pb-16 text-sm text-slate-500 md:w-[92%] sm:w-[65%]">
          <p>
            Loosely designed in{" "}
            <a
              href="https://www.figma.com/"
              className="font-medium text-slate-400 hover:text-[#64ffda] focus-visible:text-[#64ffda]"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Figma (opens in a new tab)"
            >
              Figma
            </a>{" "}
            and coded in{" "}
            <a
              href="https://code.visualstudio.com/"
              className="font-medium text-slate-400 hover:text-[#64ffda] focus-visible:text-[#64ffda]"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Visual Studio Code (opens in a new tab)"
            >
              Visual Studio Code
            </a>{" "}
            by yours truly. Built with{" "}
            <a
              href="https://nextjs.org/"
              className="font-medium text-slate-400 hover:text-[#64ffda] focus-visible:text-[#64ffda]"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Next.js (opens in a new tab)"
            >
              Next.js
            </a>{" "}
            and{" "}
            <a
              href="https://tailwindcss.com/"
              className="font-medium text-slate-400 hover:text-[#64ffda] focus-visible:text-[#64ffda]"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Tailwind CSS (opens in a new tab)"
            >
              Tailwind CSS
            </a>
            , deployed with{" "}
            <a
              href="https://vercel.com/"
              className="font-medium text-slate-400 hover:text-[#64ffda] focus-visible:text-[#64ffda]"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Vercel (opens in a new tab)"
            >
              Vercel
            </a>
            . All text is set in the{" "}
            <a
              href="https://rsms.me/inter/"
              className="font-medium text-slate-400 hover:text-[#64ffda] focus-visible:text-[#64ffda]"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Inter (opens in a new tab)"
            >
              Inter
            </a>{" "}
            typeface.
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Portfolio;