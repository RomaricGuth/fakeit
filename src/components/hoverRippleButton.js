"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { set } from "react-hook-form";
import { Button } from "./ui/button";
import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "relative overflow-hidden",
  {
    variants: {
      variant: {
        default: "hover:bg-primary",
        outline: "hover:bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const HoverRippleButton = React.forwardRef((
  {
    className,
    children,
    variant,
    ...props
  },
  ref,
) => {
  const [ripple, setRipple] = useState({ x: 0, y: 0, size: 0, up: false });

  const repositionRipple = (event) => {
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();

    // compute distance with most distant corner
    const eventX = event.clientX;
    const eventY = event.clientY;

    // Calculate distances to the corners
    const distances = [
      Math.hypot(eventX - rect.left, eventY - rect.top),
      Math.hypot(eventX - rect.right, eventY - rect.top),
      Math.hypot(eventX - rect.left, eventY - rect.bottom),
      Math.hypot(eventX - rect.right, eventY - rect.bottom),
    ];

    // Get the maximum distance
    const size = Math.max(...distances) * 2;

    // center of the ripple
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    return { x, y, size };
  };

  const growRipple = (event) => {
    const { x, y, size } = repositionRipple(event);
    setRipple({ x, y, size, up: true });
  }

  const shrinkRipple = (event) => {
    const { x, y, size } = repositionRipple(event);
    setRipple({ x, y, size, up: false });
  }

  return (
    (<Button
      onMouseEnter={growRipple}
      onMouseOut={shrinkRipple}
      className={cn(buttonVariants({variant, className}))}
      ctaLabel={children}
      variant={variant}
      ref={ref}
      {...props}>
      <div className="relative z-10 pointer-events-none">{children}</div>
      {ripple && (
        <span
          className={`pointer-events-none absolute rounded-full transition-transform ${variant === "outline" ? 'bg-primary' : 'bg-accent'}`}
          style={{
            width: `${ripple.size}px`,
            height: `${ripple.size}px`,
            top: `${ripple.y}px`,
            left: `${ripple.x}px`,
            transform: ripple.up ? "scale(1)" : "scale(0)",
          }} />
      )}
    </Button>)
  );
});

HoverRippleButton.displayName = "HoverRippleButton";

export default HoverRippleButton;
