"use client"

import * as React from "react"
import * as CollapsePrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "react-feather"

import { cn } from "../twm"

interface CGroupProps {
    children?: React.ReactNode;
}

const CollapseGroup: React.FC<CGroupProps> = ({ children }) => {
    return (
        <CollapsePrimitive.Root type="multiple" >
            {children}
        </CollapsePrimitive.Root>
    );
}


interface CollapseProps {
    title?: string;
    children?: React.ReactNode;
    trigger: React.ReactNode;
    className?: string;
}

const Collapse: React.FC<CollapseProps> = ({ title, trigger, children, className, ...props }) => {
    return (

        <CollapsePrimitive.Item className={cn(" border-b border-t")} value="">
            <CollapsePrimitive.Header className={cn("text-l-txt")}>
                {title}
                <CollapsePrimitive.Trigger className={cn("your-trigger-styles")}>
                    {trigger}
                <ChevronDown />
                </CollapsePrimitive.Trigger>
            </CollapsePrimitive.Header>
                <CollapsePrimitive.Content className={cn("your-content-styles", className)} {...props}>
                    {children}
                </CollapsePrimitive.Content>
        </CollapsePrimitive.Item>
    );
};

export { CollapseGroup, Collapse };