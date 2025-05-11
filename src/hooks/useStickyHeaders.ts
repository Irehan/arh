import { useState, useEffect, useRef } from "react";

interface StickyStates {
    [key: string]: boolean;
}

export const useStickyHeaders = (sectionIds: string[]) => {
    const [stickyStates, setStickyStates] = useState<StickyStates>(
        sectionIds.reduce((acc, id) => ({ ...acc, [id]: false }), {})
    );
    const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

    useEffect(() => {
        const isSmallDevice = window.matchMedia("(max-width: 992px)").matches;
        if (!isSmallDevice) return;

        const handleStickyHeaders = () => {
            const newStickyStates = { ...stickyStates };
            let hasChanges = false;

            const reversedSections = [...sectionIds].reverse();

            reversedSections.forEach((id) => {
                const section = sectionRefs.current[id];
                if (!section) return;

                const rect = section.getBoundingClientRect();
                const header = section.querySelector(".sticky-header") as HTMLElement | null;

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
        handleStickyHeaders();

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sectionIds]);

    return { stickyStates, sectionRefs };
};