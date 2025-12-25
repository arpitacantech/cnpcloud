"use client";
import { useEffect, useRef } from "react";

interface AnimatedLogoProps {
  className?: string;
}

export default function AnimatedLogo({ className }: AnimatedLogoProps) {
  const mainPathRef = useRef<SVGPathElement>(null);
  const glowLineRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const mainPath = mainPathRef.current;
    const glowLine = glowLineRef.current;

    if (!mainPath || !glowLine) return;

    const length = mainPath.getTotalLength();

    mainPath.style.strokeDasharray = `${length}`;
    mainPath.style.strokeDashoffset = `${length}`;
    mainPath.animate(
      [{ strokeDashoffset: length }, { strokeDashoffset: 0 }],
      { duration: 3000, iterations: 1, easing: "ease-in-out" }
    ).onfinish = () => {
      mainPath.style.strokeDashoffset = "0";
      glowLine.style.opacity = "2";
      glowLine.style.strokeDasharray = `${length}`;
      glowLine.style.strokeDashoffset = `${length}`;
      glowLine.animate(
        [{ strokeDashoffset: length }, { strokeDashoffset: 0 }],
        { duration: 3000, iterations: Infinity, easing: "linear" }
      );
    };
  }, []);

  return (
    <svg
      className={className}
      viewBox="0 0 400 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        ref={mainPathRef}
        d="M138.75 97.7996C100.557 74.2741 29.0868 45.5861 11.325 92.041C5.11001 108.296 7.96151 127.132 16.9874 142.011C33.7595 169.659 69.0788 184.291 128.643 113.366C135.509 105.191 141.246 96.0715 147.028 87.0978C177.155 40.3464 231.698 -14.0697 283.596 17.281C318.097 38.1228 331.07 90.678 301.978 118.577C277.093 142.443 228.028 149.344 138.75 97.7996Z"
        stroke="gray"
        strokeWidth="26"
        fill="none"
      />
      <path
        ref={glowLineRef}
        d="M138.75 97.7996C100.557 74.2741 29.0868 45.5861 11.325 92.041C5.11001 108.296 7.96151 127.132 16.9874 142.011C33.7595 169.659 69.0788 184.291 128.643 113.366C135.509 105.191 141.246 96.0715 147.028 87.0978C177.155 40.3464 231.698 -14.0697 283.596 17.281C318.097 38.1228 331.07 90.678 301.978 118.577C277.093 142.443 228.028 149.344 138.75 97.7996Z"
        stroke="white"
        strokeWidth="20"
        fill="none"
        opacity={0}
      />
    </svg>
  );
}
