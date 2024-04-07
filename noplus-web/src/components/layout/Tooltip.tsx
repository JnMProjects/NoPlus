"use client"

import * as React from "react"
import * as RawTooltipPrimitive from "@radix-ui/react-tooltip"

import { cn } from "@components/twm"

const RawTooltipProvider = RawTooltipPrimitive.Provider

const RawTooltip = RawTooltipPrimitive.Root

const RawTooltipTrigger = RawTooltipPrimitive.Trigger

const RawTooltipContent = React.forwardRef<
  React.ElementRef<typeof RawTooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof RawTooltipPrimitive.Content>
>(({ className, sideOffset = 4, side = "top", ...props }, ref) => (
  <RawTooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      "z-50 overflow-hidden rounded-md border border-l-bg dark:border-d-bg bg-l-bg/20 dark:bg-d-bg/20 glassblur px-3 py-1.5 text-sm text-l-txt dark:text-d-txt shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    )}
    {...props}
  />
))
RawTooltipContent.displayName = RawTooltipPrimitive.Content.displayName

const Tooltip = React.forwardRef<
    React.ElementRef<typeof RawTooltipContent>,
    React.ComponentPropsWithoutRef<typeof RawTooltipContent> & {
        tips: string,
    }
>(({ children, tips, ...props }, ref) => (
    <RawTooltipProvider>
        <RawTooltip>
            <RawTooltipTrigger >
                {children}
            </RawTooltipTrigger>
            <RawTooltipContent {...props} ref={ref} >{tips}</RawTooltipContent>
        </RawTooltip>
    </RawTooltipProvider>
))
Tooltip.displayName = "Tooltip"

export { Tooltip }