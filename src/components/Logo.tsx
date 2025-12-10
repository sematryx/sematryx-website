'use client'

export default function Logo({ className = "", size = "normal" }: { className?: string, size?: "small" | "normal" | "large" }) {
  const sizeClasses = {
    small: "text-2xl",
    normal: "text-3xl",
    large: "text-5xl md:text-7xl"
  }

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap');
        
        .logo-font {
          font-family: 'Orbitron', monospace;
        }

        .logo-se {
          color: #ffffff;
          text-shadow: 
            0 0 20px rgba(255, 255, 255, 0.6),
            0 0 40px rgba(255, 255, 255, 0.3),
            0 0 60px rgba(255, 255, 255, 0.1);
          animation: glowSe 3s ease-in-out infinite;
        }

        .logo-ma {
          color: #5eb9ff;
          text-shadow: 
            0 0 20px rgba(94, 185, 255, 0.8),
            0 0 40px rgba(94, 185, 255, 0.4),
            0 0 60px rgba(94, 185, 255, 0.2);
          animation: glowMa 3s ease-in-out infinite 0.5s;
          position: relative;
        }

        .logo-ma::before {
          content: 'ma';
          position: absolute;
          left: 0;
          top: 0;
          color: #ffffff;
          clip-path: polygon(0 0, 30% 0, 30% 100%, 0 100%);
          opacity: 0.2;
        }

        .logo-ma::after {
          content: 'ma';
          position: absolute;
          left: 0;
          top: 0;
          color: #1a5fff;
          clip-path: polygon(70% 0, 100% 0, 100% 100%, 70% 100%);
          opacity: 0.25;
        }

        .logo-tryx {
          color: #1a5fff;
          text-shadow: 
            0 0 20px rgba(26, 95, 255, 0.9),
            0 0 40px rgba(26, 95, 255, 0.5),
            0 0 60px rgba(26, 95, 255, 0.3);
          animation: glowTryx 3s ease-in-out infinite 1s;
        }

        @keyframes glowSe {
          0%, 100% { 
            text-shadow: 
              0 0 20px rgba(255, 255, 255, 0.6),
              0 0 40px rgba(255, 255, 255, 0.3),
              0 0 60px rgba(255, 255, 255, 0.1);
          }
          50% { 
            text-shadow: 
              0 0 30px rgba(255, 255, 255, 0.9),
              0 0 60px rgba(255, 255, 255, 0.5),
              0 0 90px rgba(255, 255, 255, 0.2);
          }
        }

        @keyframes glowMa {
          0%, 100% { 
            text-shadow: 
              0 0 20px rgba(94, 185, 255, 0.8),
              0 0 40px rgba(94, 185, 255, 0.4),
              0 0 60px rgba(94, 185, 255, 0.2);
          }
          50% { 
            text-shadow: 
              0 0 30px rgba(94, 185, 255, 1),
              0 0 60px rgba(94, 185, 255, 0.6),
              0 0 90px rgba(94, 185, 255, 0.3);
          }
        }

        @keyframes glowTryx {
          0%, 100% { 
            text-shadow: 
              0 0 20px rgba(26, 95, 255, 0.9),
              0 0 40px rgba(26, 95, 255, 0.5),
              0 0 60px rgba(26, 95, 255, 0.3);
          }
          50% { 
            text-shadow: 
              0 0 30px rgba(26, 95, 255, 1),
              0 0 60px rgba(26, 95, 255, 0.7),
              0 0 90px rgba(26, 95, 255, 0.4);
          }
        }
      `}</style>
      
      <div className={`logo-font font-black tracking-wider uppercase flex items-baseline ${sizeClasses[size]} ${className}`}>
        <span className="logo-se">Se</span>
        <span className="logo-ma">ma</span>
        <span className="logo-tryx">tryx</span>
      </div>
    </>
  )
}
