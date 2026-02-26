"use client";

import { motion } from "framer-motion";
import { ReactNode, ComponentPropsWithoutRef } from "react";
import { Send } from "lucide-react";

type BaseProps = {
  children: ReactNode;
  variant?: "gaming" | "rounded" | "withIcon";
  size?: "small" | "medium" | "large";
  className?: string;
};

type MotionButtonProps = ComponentPropsWithoutRef<typeof motion.button>;

export type GameButtonProps = BaseProps & MotionButtonProps;

export function GameButton({
  children,
  variant = "gaming",
  size = "medium",
  className = "",
  ...rest
}: GameButtonProps) {
  const baseClasses =
    "relative font-semibold text-center transition-all cursor-pointer group inline-flex items-center justify-center select-none";

  const sizeClasses = {
    small: "px-6 py-2 text-sm",
    medium: "px-8 py-3 text-base",
    large: "px-12 py-4 text-lg",
  };

  const clipPathStyle = {
    clipPath: "polygon(24px 0, 100% 0, 100% 100%, 0 100%, 0 24px)",
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;

  const content = (
    <span className="relative z-10 flex items-center gap-3">
      {children}
      {variant === "withIcon" && (
        <>
          <span className="h-5 w-px bg-black" />
          <Send size={18} />
        </>
      )}
    </span>
  );

  return (
    <motion.button
      {...rest}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={
        variant === "gaming"
          ? "relative inline-block"
          : variant === "rounded"
          ? `${classes} border-2 border-primary text-primary rounded-lg`
          : `${classes} bg-thirdary text-black rounded-xl`
      }
    >
      {variant === "gaming" ? (
        <>
          {/* Border Layer */}
          <div
            className="absolute inset-0 bg-[#f0d784]"
            style={clipPathStyle}
          />
          {/* Inner Layer */}
          <div
            className={`relative bg-[#1e1e1e] text-[#f0d784] ${sizeClasses[size]} flex items-center justify-center gap-3`}
            style={{ ...clipPathStyle, margin: "2px" }}
          >
            {children}
          </div>
        </>
      ) : (
        content
      )}
    </motion.button>
  );
}