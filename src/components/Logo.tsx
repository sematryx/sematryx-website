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
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
          animation: glowSe 3s ease-in-out infinite;
        }

        .logo-ma {
          color: #5eb9ff;
          text-shadow: 0 0 20px rgba(94, 185, 255, 0.6);
          animation: glowMa 3s ease-in-out infinite 0.5s;
          position: relative;
        }

        .logo-tryx {
          color: #1a5fff;
          text-shadow: 0 0 20px rgba(26, 95, 255, 0.7);
          animation: glowTryx 3s ease-in-out infinite 1s;
        }

        @keyframes glowSe {
          0%, 100% { text-shadow: 0 0 15px rgba(255, 255, 255, 0.4); }
          50% { text-shadow: 0 0 25px rgba(255, 255, 255, 0.7); }
        }

        @keyframes glowMa {
          0%, 100% { text-shadow: 0 0 15px rgba(94, 185, 255, 0.6); }
          50% { text-shadow: 0 0 25px rgba(94, 185, 255, 0.9); }
        }

        @keyframes glowTryx {
          0%, 100% { text-shadow: 0 0 15px rgba(26, 95, 255, 0.7); }
          50% { text-shadow: 0 0 25px rgba(26, 95, 255, 1); }
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

