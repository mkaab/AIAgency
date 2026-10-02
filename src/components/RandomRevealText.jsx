import { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

export default function RandomRevealText({ text, className, as: Component = 'h1' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });
  const [revealedIndices, setRevealedIndices] = useState(new Set());
  
  useEffect(() => {
    if (!isInView || typeof text !== 'string') return;
    
    let unrevealed = Array.from(Array(text.length).keys()).filter(i => text[i] !== ' ' && text[i] !== '\n');
    
    const interval = setInterval(() => {
      if (unrevealed.length === 0) {
        clearInterval(interval);
        return;
      }
      
      const toRevealCount = Math.max(1, Math.floor(text.length / 25));
      const indicesToReveal = [];
      for (let i = 0; i < toRevealCount; i++) {
        if (unrevealed.length === 0) break;
        const randomIndex = Math.floor(Math.random() * unrevealed.length);
        indicesToReveal.push(unrevealed[randomIndex]);
        unrevealed.splice(randomIndex, 1);
      }
      
      setRevealedIndices(prev => {
        const next = new Set(prev);
        indicesToReveal.forEach(idx => next.add(idx));
        return next;
      });
    }, 40);
    
    return () => clearInterval(interval);
  }, [isInView, text]);

  if (typeof text !== 'string') {
    return <Component ref={ref} className={className}>{text}</Component>;
  }

  return (
    <Component ref={ref} className={className}>
      {text.split('').map((char, index) => {
        if (char === '\n') return <br key={index} className="hidden md:block" />;
        if (char === ' ') return <span key={index}>&nbsp;</span>;
        
        return (
          <span
            key={index}
            className={`transition-opacity duration-75 ${revealedIndices.has(index) ? 'opacity-100' : 'opacity-0'}`}
          >
            {char}
          </span>
        );
      })}
    </Component>
  );
}
