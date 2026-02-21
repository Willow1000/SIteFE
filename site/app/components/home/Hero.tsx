'use client';

import { useEffect, useState, useRef } from 'react';
import { useModal } from '../auth/ModalContext';

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const { openSignup } = useModal();

  useEffect(() => {
    setIsMounted(true);

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = canvas.parentElement!.offsetHeight;
      initParticles();
    };

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas!.width;
        this.y = Math.random() * canvas!.height;
        this.size = Math.random() * 3 + 1; 
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.color = 'rgba(74, 157, 126, ' + (Math.random() * 0.3 + 0.1) + ')';
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        const rect = canvas.getBoundingClientRect();
        const mouseX = mousePosition.current.x - rect.left;
        const mouseY = mousePosition.current.y - rect.top;

        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          const force = (150 - distance) / 150;
          this.x -= dx * force * 0.03;
          this.y -= dy * force * 0.03;
        }

        if (this.x > canvas!.width) this.x = 0;
        else if (this.x < 0) this.x = canvas!.width;
        if (this.y > canvas!.height) this.y = 0;
        else if (this.y < 0) this.y = canvas!.height;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 20000);
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      ctx.lineWidth = 0.5;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) { 
            ctx.strokeStyle = `rgba(74, 157, 126, ${0.12 * (1 - distance / 150)})`; 
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('resize', resizeCanvas);
    document.addEventListener('mousemove', handleMouseMove);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#1a1d29] pt-24 pb-20 md:pt-40 md:pb-32 px-4 sm:px-6 lg:px-8">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-50"
      />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-[#4a9d7e]/10 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-[#4a9d7e]/5 blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className={`relative max-w-7xl mx-auto text-center transition-all duration-1000 ease-out ${isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#4a9d7e]/10 border border-[#4a9d7e]/20 mb-8">
          <span className="flex h-2 w-2 rounded-full bg-[#4a9d7e] animate-ping" />
          <span className="text-[#4a9d7e] text-xs font-bold tracking-wider uppercase">AI Trading Engine v4.0 Live</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-8 leading-[1.1] tracking-tight">
          Institutional-Grade <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4a9d7e] to-[#6bc99e]">
            Asset Management
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-300">
          Experience professional-grade algorithms and sophisticated trading tools 
          designed for the modern investor. Precision, performance, and transparency.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-500">
          <button
            onClick={openSignup}
            className="group relative inline-flex items-center justify-center bg-[#4a9d7e] hover:bg-[#3d8567] text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(74,157,126,0.3)] hover:shadow-[0_0_30px_rgba(74,157,126,0.5)] overflow-hidden"
          >
            <span className="relative z-10">Open Account</span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700" />
          </button>
          
          <button
            onClick={openSignup}
            className="group inline-flex items-center justify-center text-gray-300 hover:text-white font-semibold py-4 px-10 rounded-xl border border-gray-700 hover:border-gray-500 transition-all duration-300"
          >
            View Demo
            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 opacity-40 grayscale hover:grayscale-0 transition-all duration-700 delay-700">
          {[
            { label: 'AUM', value: '$2.4B+' },
            { label: 'Uptime', value: '99.9%' },
            { label: 'Execution', value: '12ms' },
            { label: 'Traders', value: '50k+' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center animate-float" style={{ animationDelay: `${i * 0.5}s` }}>
              <span className="text-white text-2xl font-bold">{stat.value}</span>
              <span className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
