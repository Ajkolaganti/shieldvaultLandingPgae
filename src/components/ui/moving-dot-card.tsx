import React, { useState, useEffect } from 'react';

interface DotCardProps {
  target?: number;
  duration?: number;
  label?: string;
  suffix?: string;
}

export default function DotCard({ target = 777000, duration = 2000, label = "Views", suffix = "" }: DotCardProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    const range = end - start;
    if (range <= 0) return;
    const increment = Math.ceil(end / (duration / 50));
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, 50);
    return () => clearInterval(timer);
  }, [target, duration]);

  const formatDisplay = (num: number): string => {
    // For percentage or hour, we need to divide by 10 to get decimal place
    if (suffix === '%' || suffix === 'h') {
      const decimal = num / 10;
      return `${decimal.toFixed(1)}${suffix}`;
    }
    
    // For K+ numbers
    if (suffix === '+') {
      if (num < 1000) {
        return `${num}${suffix}`;
      }
      return `${(num / 1000).toFixed(1)}K${suffix}`;
    }
    
    // Default formatting
    if (suffix) {
      return `${num}${suffix}`;
    }
    
    if (num < 1000) {
      return num.toString();
    }
    return `${(num / 1000).toFixed(1)}k`;
  };

  const display = formatDisplay(count);

  return (
    <div className="outer">
      <div className="dot"></div>
      <div className="card">
        <div className="ray"></div>
        <div className="text">{display}</div>
        <div className="label">{label}</div>
        <div className="line topl"></div>
        <div className="line leftl"></div>
        <div className="line bottoml"></div>
        <div className="line rightl"></div>
      </div>
    </div>
  );
}

