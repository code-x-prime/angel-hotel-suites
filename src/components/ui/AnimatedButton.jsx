"use client";

import { cn } from "@/lib/utils";

export default function AnimatedButton({ 
  children, 
  className, 
  href, 
  onClick, 
  type = "button",
  disabled = false
}) {
  const ButtonContent = () => (
    <>
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
      <span
        className="absolute w-[150%] h-[500%] -top-[200%] -right-[10%] bg-sky-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"
      ></span>
      <span
        className="absolute w-[150%] h-[500%] -top-[200%] -right-[10%] bg-sky-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"
      ></span>
      <span
        className="absolute w-[150%] h-[500%] -top-[200%] -right-[10%] bg-sky-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"
      ></span>
    </>
  );

  const baseClasses = cn(
    "overflow-hidden relative bg-[#E86C3D] text-white border-none rounded-md font-bold cursor-pointer z-10 group shadow-md hover:shadow-lg transition-all",
    className
  );

  if (href) {
    return (
      <a href={href} className={baseClasses} onClick={onClick}>
        <ButtonContent />
      </a>
    );
  }

  return (
    <button 
      type={type} 
      className={baseClasses} 
      onClick={onClick}
      disabled={disabled}
    >
      <ButtonContent />
    </button>
  );
}
