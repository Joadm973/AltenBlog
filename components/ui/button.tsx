import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-gentle ease-elegant focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:scale-[1.02] hover:-translate-y-0.5",
  {
    variants: {      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/80",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-gray-600 bg-gray-800 hover:bg-gray-700 text-gray-200 hover:shadow-lg hover:shadow-gray-500/20",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",        ghost: "hover:bg-gray-800 hover:text-gray-100 hover:shadow-lg hover:shadow-gray-500/20",
        link: "text-blue-400 underline-offset-4 hover:underline",
        gradient: "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-sm hover:shadow-xl hover:shadow-blue-400/30 transition-all duration-gentle ease-elegant hover:from-blue-600 hover:to-indigo-700",
        glow: "bg-blue-500 text-white shadow-sm hover:shadow-xl hover:shadow-blue-400/30 transition-all duration-gentle ease-elegant hover:bg-blue-600",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
