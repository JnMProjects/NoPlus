"use client"

import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cva, type VariantProps } from "cva"

import { cn } from "@components/twm"

const toggleVariants = cva(
    {
        base: "text-l-txt dark: text-d-txt inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-l-txt-500 dark:hover:text-d-txt-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-l-acc dark:data-[state=on]:bg-d-acc data-[state=on]:text-l-txt-500 dark:data-[state=on]:text-d-txt-500",
        variants: {
            variant: {
                default: "bg-transparent",
                outline:
                    "border border-l-acc-200/75 dark:border-d-acc-700/75 bg-transparent hover:bg-l-sec dark:hover:bg-d-sec hover:text-l-txt-500 dark:hover:text-d-txt-500",
            },
            size: {
                default: "h-10 px-3",
                sm: "h-9 px-2.5",
                lg: "h-11 px-5",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
    VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
  <TogglePrimitive.Root
    ref={ref}
    className={cn(toggleVariants({ variant, size, className }))}
    {...props}
  />
))

Toggle.displayName = TogglePrimitive.Root.displayName

export { Toggle, toggleVariants }
