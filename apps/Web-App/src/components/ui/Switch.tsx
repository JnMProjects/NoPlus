"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@components/twm"

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-l-acc dark:focus-visible:ring-d-acc focus-visible:ring-offset-2 focus-visible:ring-offset-l-prim dark:focus-visible:ring-offset-d-prim disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-l-bg-300 dark:data-[state=checked]:bg-d-bg-400 data-[state=unchecked]:bg-l-bg",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-5 w-5 rounded-full bg-l-bg-500 dark:bg-d-bg-800 shadow-lg ring-0 duration-200 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 data-[state=checked]:bg-system-highlight-light-cyan dark:data-[state=checked]:bg-system-highlight-dark-cyan"
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
