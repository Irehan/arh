// src\hooks\useStickyHeaders.ts
import { useState, useEffect, useRef } from "react";

interface StickyStates {
    [key: string]: boolean;
}

/**
 * Custom hook to manage sticky section headers on small devices (≤ 992px).
 * Tracks when section headers should stick to the top based on scroll position.
 * @param sectionIds Array of section IDs to track (e.g., ["about", "experience", "projects"]).
 * @returns Object containing sticky states and section refs.
 */
export const useStickyHeaders = (sectionIds: string[]) => {
    const [stickyStates, setStickyStates] = useState<StickyStates>(
        sectionIds.reduce((acc, id) => ({ ...acc, [id]: false }), {})
    );
    const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

    useEffect(() => {
        // Only run on small devices (≤ 992px)
        const isSmallDevice = window.matchMedia("(max-width: 992px)").matches;
        if (!isSmallDevice) return;

        const handleStickyHeaders = () => {
            const newStickyStates = { ...stickyStates };
            let hasChanges = false;

            // Process sections in reverse for correct z-index layering
            const reversedSections = [...sectionIds].reverse();

            reversedSections.forEach((id) => {
                const section = sectionRefs.current[id];
                if (!section) return;

                const rect = section.getBoundingClientRect();
                const header = section.querySelector(".sticky-header") as HTMLElement | null;

                // Sticky when section top is at or above viewport top and bottom is below header height
                const shouldBeSticky = rect.top <= 0 && rect.bottom > (header ? header.offsetHeight : 60);

                if (shouldBeSticky !== newStickyStates[id]) {
                    newStickyStates[id] = shouldBeSticky;
                    hasChanges = true;

                    if (header) {
                        header.dataset.sticky = shouldBeSticky ? "true" : "false";
                    }
                }
            });

            if (hasChanges) {
                setStickyStates(newStickyStates);
            }
        };

        // Throttle scroll handling with requestAnimationFrame
        let ticking = false;
        const scrollHandler = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    handleStickyHeaders();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", scrollHandler, { passive: true });
        handleStickyHeaders(); // Initial call

        // Handle resize to disable/enable logic
        const handleResize = () => {
            if (!window.matchMedia("(max-width: 992px)").matches) {
                setStickyStates(sectionIds.reduce((acc, id) => ({ ...acc, [id]: false }), {}));
            } else {
                handleStickyHeaders();
            }
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("scroll", scrollHandler);
            window.removeEventListener("resize", handleResize);
        };
    }, [sectionIds]); // Removed stickyStates from dependencies

    return { stickyStates, sectionRefs };
};