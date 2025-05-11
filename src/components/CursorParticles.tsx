// src\components\CursorParticles.tsx
"use client";
import { useEffect, useRef } from "react";

const CursorParticles = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const particles: any[] = [];

    useEffect(() => {
        const canvas = canvasRef.current!;
        const ctx = canvas.getContext("2d")!;
        let width = window.innerWidth;
        let height = window.innerHeight;

        canvas.width = width;
        canvas.height = height;

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        window.addEventListener("resize", resize);

        const addParticle = (x: number, y: number) => {
            particles.push({
                x,
                y,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2,
                radius: Math.random() * 2 + 1,
                alpha: 1,
            });
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            for (let i = particles.length - 1; i >= 0; i--) {
                const p = particles[i];
                p.x += p.vx;
                p.y += p.vy;
                p.alpha -= 0.015;
                p.radius *= 0.98;

                if (p.alpha <= 0 || p.radius <= 0.2) {
                    particles.splice(i, 1);
                    continue;
                }

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(100, 255, 218, ${p.alpha})`;
                ctx.fill();
            }

            requestAnimationFrame(animate);
        };

        const handleMouseMove = (e: MouseEvent) => {
            for (let i = 0; i < 3; i++) {
                addParticle(e.clientX, e.clientY);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        animate();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full pointer-events-none z-10"
        />
    );
};

export default CursorParticles;
