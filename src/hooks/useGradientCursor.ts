// src/hooks/useGradientCursor.ts
import { useEffect } from 'react';

export const useGradientCursor = () => {
    useEffect(() => {
        if (window.innerWidth < 992) return;
        let mouseX = 0;
        let mouseY = 0;
        let ticking = false;
        let lastMoveTime = Date.now();

        const sectionColors: Record<string, string> = {
            about: "#64ffda",
            experience: "#ff6bcb",
            projects: "#ffc857",
        };

        // Update cursor position
        const updateGradientPosition = () => {
            document.documentElement.style.setProperty('--mouse-x', `${mouseX}px`);
            document.documentElement.style.setProperty('--mouse-y', `${mouseY}px`);
            ticking = false;
        };

        // Debounced mousemove
        const handleMouseMove = (e: MouseEvent) => {
            const now = Date.now();
            if (now - lastMoveTime < 10) return; // debounce threshold (10ms)
            lastMoveTime = now;

            mouseX = e.clientX;
            mouseY = e.clientY;

            if (!ticking) {
                requestAnimationFrame(updateGradientPosition);
                ticking = true;
            }
        };

        // Observe sections and change gradient color
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const id = entry.target.id;
                        const color = sectionColors[id];
                        if (color) {
                            document.documentElement.style.setProperty('--gradient-color', color);
                        }
                    }
                });
            },
            { threshold: 0.5 }
        );

        const sectionIds = Object.keys(sectionColors);
        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        // Add particles/parallax via body class (optional)
        document.body.classList.add('cursor-trail-enabled');

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            observer.disconnect();
            document.body.classList.remove('cursor-trail-enabled');
        };
    }, []);
};