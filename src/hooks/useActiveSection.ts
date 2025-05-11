// src\hooks\useActiveSection.ts
import { useState, useEffect, useRef } from "react";

/**
 * Custom hook to track the most visible section in the viewport on desktop devices (≥ 1024px).
 * Uses Intersection Observer to determine the active section based on visibility.
 * @param sectionIds Array of section IDs to track (e.g., ["about", "experience", "projects"]).
 * @returns Object containing active section ID, setter, and section refs.
 */
export const useActiveSection = (sectionIds: string[]) => {
    const [activeSection, setActiveSection] = useState<string>(sectionIds[0]);
    const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

    useEffect(() => {
        // Only run on desktop devices (≥ 1024px)
        const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
        if (!isDesktop) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntries = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

                if (visibleEntries.length > 0) {
                    setActiveSection(visibleEntries[0].target.id);
                }
            },
            {
                threshold: [0.1, 0.2, 0.3, 0.4, 0.5],
                rootMargin: "-10% 0px -10% 0px",
            }
        );

        sectionIds.forEach((id) => {
            const element = document.getElementById(id);
            if (element) {
                sectionRefs.current[id] = element;
                observer.observe(element);
            }
        });

        // Handle resize to disable/enable logic
        const handleResize = () => {
            if (!window.matchMedia("(min-width: 1024px)").matches) {
                observer.disconnect();
            } else {
                sectionIds.forEach((id) => {
                    const element = document.getElementById(id);
                    if (element && !sectionRefs.current[id]) {
                        sectionRefs.current[id] = element;
                        observer.observe(element);
                    }
                });
            }
        };
        window.addEventListener("resize", handleResize);

        return () => {
            observer.disconnect();
            window.removeEventListener("resize", handleResize);
        };
    }, [sectionIds]);

    return { activeSection, setActiveSection, sectionRefs };
};