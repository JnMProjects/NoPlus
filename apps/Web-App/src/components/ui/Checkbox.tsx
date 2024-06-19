"use client"

import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check, Minus } from "react-feather"

import { cn } from "@components/twm"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & {
    intermediate?: boolean
  }
>(({ className, children, intermediate, ...props }, ref) => (
  <div className="items-top flex space-x-2">
    <div className="text-l-txt dark:text-d-txt flex items-center ">
      <CheckboxPrimitive.Root
          ref={ref}
          className={cn(
              "peer duration-200 h-4 w-4 shrink-0 rounded-sm border border-l-prim dark:border-d-prim ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 cursor-pointer active:cursor-cell disabled:cursor-not-allowed disabled:opacity-50 bg-l-acc/30 text-l-txt dark:bg-d-acc/30 dark:text-d-txt data-[state=checked]:bg-l-sec dark:data-[state=checked]:bg-d-sec data-[state=checked]:text-l-prim dark:data-[state=checked]:text-d-prim",
              className
          )}
          {...props}
      >
          <CheckboxPrimitive.Indicator
              className={cn("flex items-center justify-center text-current data-[state=unchecked]:softblur")}
          >
              {intermediate ? <Minus className="h-4 w-4" /> : <Check className="h-4 w-4" />}
          </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
      
    </div>
    <div className="grid gap-1.5 leading-none">
      <label htmlFor="label" className="text-sm text-l-txt dark:text-d-txt font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        {children}
      </label>
    </div>
  </div>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }
