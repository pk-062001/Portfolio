import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Preloader() {
  const canvasRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let animationFrame;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const chars =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const charArray = chars.split("");

const fontSize = 18;
let columns = Math.floor(canvas.width / fontSize);

let drops = Array(columns).fill(1);

const draw = () => {
  ctx.fillStyle = "rgba(0,0,0,0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.font = `${fontSize}px monospace`;

  for (let i = 0; i < drops.length; i++) {
    const text =
      charArray[Math.floor(Math.random() * charArray.length)];

    const opacity = Math.random() * 0.15 + 0.05;

    ctx.fillStyle = `rgba(255,255,255,${opacity})`;

    ctx.fillText(
      text,
      i * fontSize,
      drops[i] * fontSize
    );

    if (
      drops[i] * fontSize > canvas.height &&
      Math.random() > 0.995
    ) {
      drops[i] = 0;
    }

    drops[i] += 0.25; // much slower
  }

  animationFrame = requestAnimationFrame(draw);
};

    draw();

    const timer = setTimeout(() => {
      setLoading(false);
    }, 6000);

    return () => {
      cancelAnimationFrame(animationFrame);
      clearTimeout(timer);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black overflow-hidden"
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          {/* Canvas */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full z-0"
          />

          {/* Center Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <motion.h1
              className="font-mono text-6xl md:text-8xl font-bold text-white tracking-[0.25em]"
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1,
                duration: 1,
              }}
            >
              PK
            </motion.h1>

            <motion.p
              className="mt-6 font-mono text-xs md:text-sm tracking-[0.5em] text-white/50"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 2,
                duration: 1,
              }}
            >
              FULL STACK DEVELOPER
            </motion.p>

            {/* Blinking Cursor */}
            <motion.div
              className="mt-8 text-white text-2xl font-mono"
              animate={{
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
              }}
            >
              |
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}