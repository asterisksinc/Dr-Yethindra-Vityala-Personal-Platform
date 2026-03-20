"use client";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface Point {
  x: number;
  y: number;
}

export default function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef<Point>({ x: 0, y: 0 });
  const points = useRef<Point[]>([]);
  const MAX_POINTS = 35;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Initialize position directly inside useEffect to prevent SSR hydration panics
    mouse.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    
    // Pre-fill points logic cleanly to prevent trailing array jump
    if (points.current.length === 0) {
      for (let i = 0; i < MAX_POINTS; i++) {
        points.current.push({ x: mouse.current.x, y: mouse.current.y });
      }
    }

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    window.addEventListener('mousemove', onMouseMove);

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const pts = points.current;
      pts[0].x = gsap.utils.interpolate(pts[0].x, mouse.current.x, 0.45);
      pts[0].y = gsap.utils.interpolate(pts[0].y, mouse.current.y, 0.45);

      for (let i = 1; i < MAX_POINTS; i++) {
        pts[i].x = gsap.utils.interpolate(pts[i].x, pts[i - 1].x, 0.45);
        pts[i].y = gsap.utils.interpolate(pts[i].y, pts[i - 1].y, 0.45);
      }

      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.shadowBlur = 8;

      let p0 = pts[0];
      let p1 = pts[0];
      
      // Render continuous elastic segments with quadratic curves forming the thread
      for (let i = 1; i < MAX_POINTS; i++) {
        const p2 = pts[i];
        const xc = (p1.x + p2.x) / 2;
        const yc = (p1.y + p2.y) / 2;

        ctx.beginPath();
        ctx.moveTo(p0.x, p0.y);
        ctx.quadraticCurveTo(p1.x, p1.y, xc, yc);

        const progress = i / MAX_POINTS;
        const alpha = 1 - progress;
        
        let r, g, b;
        if (progress <= 0.5) {
          // #ff40ac (255, 64, 172) to #6C63FF (108, 99, 255)
          const p = progress * 2;
          r = Math.round(255 + (108 - 255) * p);
          g = Math.round(64 + (99 - 64) * p);
          b = Math.round(172 + (255 - 172) * p);
        } else {
          // #6C63FF (108, 99, 255) to #00e676 (0, 230, 118)
          const p = (progress - 0.5) * 2;
          r = Math.round(108 + (0 - 108) * p);
          g = Math.round(99 + (230 - 99) * p);
          b = Math.round(255 + (118 - 255) * p);
        }

        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${alpha * 0.9})`;
        ctx.shadowColor = `rgb(${r}, ${g}, ${b})`;
        ctx.lineWidth = Math.max(0.5, 2.5 * alpha);
        ctx.stroke();

        p0 = { x: xc, y: yc };
        p1 = p2;
      }
    };

    gsap.ticker.add(tick);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      gsap.ticker.remove(tick);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-9999"
      style={{ userSelect: 'none' }}
    />
  );
}
