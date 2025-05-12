"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useGradientCursor } from "../../hooks/useGradientCursor";
const projects = [
    {
        year: "2025",
        title: "Brahman Samaj USA",
        madeAt: "Decode Meta Tech",
        builtWith: ["Wordpress", "Glassmorphism", "AOS", "Bootstrap"],
        link: "https://brahmansamajusa.org",
    },
    {
        year: "2025",
        title: "Rank Crest",
        madeAt: "Decode Meta Tech ",
        builtWith: ["Wordpress", "Bootstrap CSS", "Lottie.js", "AOS"],
        link: "https://rankcrest.com/",
    },
    {
        year: "2025",
        title: "Force Club",
        madeAt: "Decode Meta Tech ",
        builtWith: ["NextJs", "Tailwind", "Minimalist UI",],
        link: "https://arh-force-club.netlify.app/",
    },
    {
        year: "2022",
        title: "Oliamoda",
        madeAt: "Eppeok Solutions",
        builtWith: ["Wordpress", "Boorstrap", "Custom Animation"],
        link: "https://oliamoda.com/",
    },
    {
        year: "2022",
        title: "Avdaga",
        madeAt: "Eppeok Solutions",
        builtWith: ["Lottie.js", "Minimalist UI", "Boorstrap"],
        link: "https://arh-avdaga.netlify.app",
    },
    {
        year: "2022",
        title: "Crypto Market",
        madeAt: "Eppeok Solutions",
        builtWith: ["Minimalist UI", "Dark Theme", "Minimalist UI"],
        link: "https://arh-crypto-markets.netlify.app",
    },
    {
        year: "2022",
        title: "Firearm",
        madeAt: "Eppeok Solutions",
        builtWith: ["Wordpress", "Bootstrap", "Custom Animation"],
        link: "https://www.firearmwebsites.com/",
    },
    {
        year: "2021",
        title: "Carol-Ann",
        madeAt: "SZI Technologies",
        builtWith: ["Bootstrap", "Custom Animation"],
        link: "https://arh-carol-ann.netlify.app",
    },
    {
        year: "2021",
        title: "ZAK",
        madeAt: "SZI Technologies",
        builtWith: ["Bootstrap", "Neon Dark Theme", "Custom Animation"],
        link: "https://arh-zak.netlify.app/",
    },
    {
        year: "2020",
        title: "Online Course",
        madeAt: "SZI Technologies",
        builtWith: ["React", "Bootstrap", "Jquery", "Custom Animation"],
        link: "https://online-course-cyan.vercel.app/",
    },
    // Add more projects as needed 
];

const ArchivePage = () => {
    useGradientCursor();
    return (
        <div className="min-h-screen bg-[#0a192f] text-[#8892b0] archieve wrapper-box max-w-screen-xl mx-auto gradient-bg lg:py-24 py-16 px-6 sm:py-20">
            <header className="mb-12">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link
                        href="/"
                        className="group mb-2 inline-flex items-center font-semibold leading-tight text-[#64ffda] hover:text-teal-300"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                                clipRule="evenodd"
                            />
                        </svg>
                        Ali Rehan Haider
                    </Link>
                    <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                        All Projects
                    </h1>
                </motion.div>
            </header>

            <main>
                <motion.table
                    id="content"
                    className="mt-12 w-full border-collapse text-left"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <thead className="sticky top-0 z-10 py-5 border-b border-slate-300/10 bg-[#0a192f]/75  backdrop-blur">
                        <tr>
                            <th className="py-4 pr-8 text-sm font-semibold text-slate-200">
                                Year
                            </th>
                            <th className="py-4 pr-8 text-sm font-semibold text-slate-200">
                                Project
                            </th>
                            <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">
                                Made at
                            </th>
                            <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">
                                Built with
                            </th>
                            <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 sm:table-cell">
                                Link
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map((project, index) => (
                            <tr
                                key={index}
                                className="border-b border-slate-300/10 last:border-none"
                            >
                                <td className="py-4 pr-4 align-top text-sm">
                                    <div className="translate-y-px">{project.year}</div>
                                </td>
                                <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                                    <div>
                                        <div className="block sm:hidden">
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noreferrer noopener"
                                                className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-[#64ffda] focus-visible:text-[#64ffda] sm:hidden group/link text-base"
                                                aria-label={`${project.title} (opens in a new tab)`}
                                            >
                                                <span>
                                                    {project.title}
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
                                        <div className="hidden sm:block">{project.title}</div>
                                    </div>
                                </td>
                                <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
                                    <div className="translate-y-px whitespace-nowrap">
                                        {project.madeAt}
                                    </div>
                                </td>
                                <td className="hidden py-4 pr-4 align-top lg:table-cell">
                                    <ul className="flex -translate-y-1.5 flex-wrap">
                                        {project.builtWith.map((tech, techIndex) => (
                                            <li key={techIndex} className="my-1 mr-1.5">
                                                <div className="flex items-center rounded-full bg-[#172a45] px-3 py-1 text-xs font-medium leading-5 text-[#64ffda]">
                                                    {tech}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </td>
                                <td className="hidden py-4 align-top sm:table-cell">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-[#64ffda] focus-visible:text-[#64ffda] text-base"
                                        aria-label={`${project.title} (opens in a new tab)`}
                                    >
                                        <span>
                                            <span className="inline-block">
                                                Link
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
                                        </span>
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </motion.table>
            </main>
        </div>
    );
};

export default ArchivePage;