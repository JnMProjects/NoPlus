"use client"

import * as React from "react"
import * as CollapsePrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "react-feather"

import { cn } from "../twm"

const Collapse = CollapsePrimitive.Root

const CollapseItem = React.forwardRef<
  React.ElementRef<typeof CollapsePrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CollapsePrimitive.Item>
>(({ className, ...props }, ref) => (
  <CollapsePrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
))
CollapseItem.displayName = "CollapseItem"

const CollapseTrigger = React.forwardRef<
  React.ElementRef<typeof CollapsePrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof CollapsePrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <CollapsePrimitive.Header className="flex">
    <CollapsePrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </CollapsePrimitive.Trigger>
  </CollapsePrimitive.Header>
))
CollapseTrigger.displayName = CollapsePrimitive.Trigger.displayName

const CollapseContent = React.forwardRef<
  React.ElementRef<typeof CollapsePrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof CollapsePrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <CollapsePrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-Collapse-up data-[state=open]:animate-Collapse-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </CollapsePrimitive.Content>
))

CollapseContent.displayName = CollapsePrimitive.Content.displayName

export { Collapse, CollapseItem, CollapseTrigger, CollapseContent }
