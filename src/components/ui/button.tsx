// components/ui/button.tsx
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "relative inline-flex items-center justify-center rounded-lg text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "cyber-button text-white shadow-lg hover:shadow-neon-blue",
        ghost: "bg-transparent hover:bg-dark-700/50 text-white",
        neon: "neon-border bg-dark-800 text-white hover:bg-dark-700",
        matrix: "bg-dark-800 matrix-text hover:bg-dark-700 border border-neon-green/20",
        outline: "border border-dark-600 hover:border-neon-blue/50 hover:bg-dark-800/50",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4",
        lg: "h-14 px-8 text-base",
        icon: "h-11 w-11",
      },
      glow: {
        none: "",
        blue: "hover:shadow-neon-blue",
        purple: "hover:shadow-neon-purple",
        green: "hover:shadow-neon-green",
        pink: "hover:shadow-neon-pink",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      glow: "none",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, glow, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, glow, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }