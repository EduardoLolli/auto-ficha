"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn("progress", className)}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="indicator"
      style={{
        transform: `translateX(-${30 - (Math.min(value || 0, 30) / 30) * 30}%)`,
        width: `${Math.min(((value || 0) / 30) * 100, 100)}%`,
      }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
