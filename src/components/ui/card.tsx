// components/ui/card.tsx
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const cardVariants = cva(
  "rounded-xl transition-all duration-300",
  {
    variants: {
      variant: {
        default: "glass-card",
        neon: "neon-border bg-dark-800",
        solid: "bg-dark-800 border border-dark-600",
        gradient: "bg-gradient-cyber from-gradient-cyber-start to-gradient-cyber-end p-[1px]",
      },
      hover: {
        none: "",
        glow: "hover:shadow-neon-blue",
        scale: "hover:scale-105",
        lift: "hover:-translate-y-2",
      }
    },
    defaultVariants: {
      variant: "default",
      hover: "none",
    },
  }
)

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, hover, ...props }, ref) => {
    return (
      <div
        className={cn(cardVariants({ variant, hover, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Card.displayName = "Card"

export { Card, cardVariants }