'use client';
import { useEffect, useRef, useState, useCallback } from 'react';

const dots = 200;
const ldist = 200;
const mouseInfluenceRadius = 300; // Maximum distance for mouse influence
let points = [];

const NetBackground = ({ children }) => {
  const netRef = useRef(null);
  const canvasRef = useRef(null);
  const [netEffect, setNetEffect] = useState(null);
  const animationRef = useRef();
  const pointsRef = useRef([]);
  const mouseRef = useRef({ x: 0, y: 0 });

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const mouse = mouseRef.current;

    for (let i = 0; i < pointsRef.current.length; i++) {
      const { x, y, alpha, vx, vy } = pointsRef.current[i];
      
      const mouseDistance = Math.sqrt((x - mouse.x) ** 2 + (y - mouse.y) ** 2);
      
      const mouseAlpha = Math.max(0.1, 1 - mouseDistance / mouseInfluenceRadius);
      const finalAlpha = Math.min(alpha, mouseAlpha) * 2;

      ctx.fillStyle = `rgba(119,240,127,${finalAlpha})`;
      ctx.beginPath();
      ctx.arc(x, y, 2.5, 0, Math.PI * 2);
      ctx.fill();
      
      for (let j = i + 1; j < pointsRef.current.length; j++) {
        const p2 = pointsRef.current[j];
        const dx = p2.x - x;
        const dy = p2.y - y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < ldist) {
          const p2MouseDistance = Math.sqrt((p2.x - mouse.x) ** 2 + (p2.y - mouse.y) ** 2);
          const p2MouseAlpha = Math.max(0.1, 1 - p2MouseDistance / mouseInfluenceRadius);
          
          const avgMouseAlpha = (mouseAlpha + p2MouseAlpha) / 2;
          const distanceAlpha = 1 - dist / ldist;
          const lineAlpha = Math.min(avgMouseAlpha, distanceAlpha) * 0.7;
          
          ctx.strokeStyle = `rgba(119,240,127,${lineAlpha})`;
          ctx.lineWidth = Math.max(0.75, distanceAlpha * 2);
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
        }
      }
    }
    
    pointsRef.current = pointsRef.current.map((p) => {
      let { x, y, alpha, vx, vy } = p;
      x += vx;
      y += vy;
      if (x < 0 || x > canvas.width) vx = -vx;
      if (y < 0 || y > canvas.height) vy = -vy;
      return { x, y, alpha, vx, vy };
    });

    animationRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pointsRef.current = [];

    for (let i = 0; i < dots; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const alpha = 1;
      pointsRef.current.push({
        x: x,
        y: y,
        alpha: alpha,
        vx: (Math.random() - 0.5) / 2,
        vy: (Math.random() - 0.5) / 2,
      });
    }

    animationRef.current = requestAnimationFrame(animate);

    // Mouse tracking
    const handleMouseMove = (event) => {
      mouseRef.current = {
        x: event.clientX,
        y: event.clientY
      };
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      pointsRef.current = [];
      for (let i = 0; i < dots; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        pointsRef.current.push({
          x: x,
          y: y,
          alpha: 1,
          vx: (Math.random() - 0.5) / 2,
          vy: (Math.random() - 0.5) / 2
        });
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animate]);

  return (
    <>
      {/* Canvas for points */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0, // Changed from -1 to 0 to ensure it's above the background div
          pointerEvents: 'none'
        }}
      />
      {/* Vanta background container - always rendered */}
      <div 
        id='canvas'
        ref={netRef} 
        style={{ 
          width: '100%', 
          height: '100vh',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: -2,
          backgroundColor: '#3a2f6b', // Fallback color if Vanta fails
          //transition: 'opacity 1s ease-in-out'
        }}
      />   
      {children}
    </>
  );
};

export default NetBackground;