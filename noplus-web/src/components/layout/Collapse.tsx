"use client"

import * as React from "react"
import * as CollapsePrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "react-feather"

import { cn } from "../twm"

interface CGroupProps {
    children?: React.ReactNode;
}

const CollapseGroup: React.FC<CGroupProps> = ({ children, ...props }) => {
  return (
    <CollapsePrimitive.Root type="multiple" {...props} defaultValue={["default"]} className="border-t border-b border-d-bg dark:border-l-bg" >
      {children}
    </CollapsePrimitive.Root>
  );
}

const CollapseItem = React.forwardRef<
  React.ElementRef<typeof CollapsePrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CollapsePrimitive.Item>
>(({ className, ...props }, ref) => (
  <CollapsePrimitive.Item
    ref={ref}
    {...props}
    className={cn("border-t border-b border-d-bg/70 dark:border-l-bg/70", className)}
  />
))
CollapseItem.displayName = "AccordionItem"

const CollapseHeadRaw = React.forwardRef<
  React.ElementRef<typeof CollapsePrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof CollapsePrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <CollapsePrimitive.Header className="flex text-l-txt">
    <CollapsePrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between text-l-txt dark:text-d-txt font py-4 font-medium transition-all [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </CollapsePrimitive.Trigger>
  </CollapsePrimitive.Header>
))
CollapseHeadRaw.displayName = "CollapseHeadRaw"

const CollapseContentRaw = React.forwardRef<
  React.ElementRef<typeof CollapsePrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof CollapsePrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <CollapsePrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-collapse-up data-[state=open]:animate-collapse-down"
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </CollapsePrimitive.Content>
))
 
CollapseContentRaw.displayName = CollapsePrimitive.Content.displayName
 

interface CollapseProps {
    title?: string;
    children?: React.ReactNode;
    trigger: React.ReactNode;
    className?: string;
    no?: string;
    defaultExpanded?: boolean;
}
let collapseCounter = 0;
const Collapse: React.FC<CollapseProps> = ({ defaultExpanded, title, trigger, children, className, no, ...props }) => {
  const value = no || `collapse-${collapseCounter++}`;
  
  if (!defaultExpanded) {
    return (
      <CollapseItem className={cn("border-b border-t")} value={value}>
        <CollapseHeadRaw>{trigger}</CollapseHeadRaw>
        <CollapseContentRaw>
          <h1 className=" font-bold border-collapse top-2 text-l-txt-800 dark:text-d-txt-400">{title}</h1>
          <div className={cn("text-l-txt dark:text-d-txt", className)} {...props} >{children}</div>
        </CollapseContentRaw>
      </CollapseItem>
    );
  } else {
    return (
      <CollapseItem className={cn("border-b border-t")} value={"default"}>
        <CollapseHeadRaw>{trigger}</CollapseHeadRaw>
        <CollapseContentRaw>
          <h1 className=" font-bold border-collapse top-2 text-l-txt-800 dark:text-d-txt-400">{title}</h1>
          <div className={cn("text-l-txt dark:text-d-txt", className)} {...props} >{children}</div>
        </CollapseContentRaw>
      </CollapseItem>
    );
  }
};

export { CollapseGroup, Collapse };