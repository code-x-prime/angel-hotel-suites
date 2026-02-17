"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    // Only run on client
    if (typeof window === "undefined") return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Check if hovering over clickable element
      const target = e.target;
      const isClickable = 
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button");
        
      setIsPointer(!!isClickable);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="hidden lg:block fixed top-0 left-0 pointer-events-none z-[9999] transition-transform duration-100 ease-out"
      style={{
        transform: `translate(${position.x}px, ${position.y}px) scaleX(-1)`,
      }}
    >
      <div className={`relative ${isPointer ? "scale-110" : "scale-100"} transition-transform duration-200`}>
        {/* Adjusted offset to allow the "tip" (if pointing left) to be closer */}
        <div className="-translate-x-1/2 -translate-y-1/2"> 
            <Image
            src="/key.png"
            alt="Custom Cursor"
            width={32}
            height={32}
            className="drop-shadow-md"
            priority
            />
        </div>
      </div>
    </div>
  );
}
