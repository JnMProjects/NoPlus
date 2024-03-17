"use client"

import * as React from "react"
import * as RawAlertDialogPrimitive from "@radix-ui/react-alert-dialog"

import { cn } from "../twm"
import { Button } from "@ui/."

const AlertDialogWrapper = RawAlertDialogPrimitive.Root

const RawAlertDialogTrigger = React.forwardRef<
  React.ElementRef<typeof RawAlertDialogPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof RawAlertDialogPrimitive.Trigger> & {
    triggervariant?: "primary" | "secondary" | "tertiary" | "soft" | "text"
  }
>(({ className, triggervariant, children, ...props }, ref) => (
  <RawAlertDialogPrimitive.Trigger
    className={cn(
      "",
      className
    )}
    {...props}
    ref={ref}
    asChild
  >
    <Button type={triggervariant="primary"}>{children}</Button>
  </RawAlertDialogPrimitive.Trigger>
))
RawAlertDialogTrigger.displayName = RawAlertDialogPrimitive.Trigger.displayName

const RawAlertDialogPortal = RawAlertDialogPrimitive.Portal

const RawAlertDialogOverlay = React.forwardRef<
  React.ElementRef<typeof RawAlertDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof RawAlertDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <RawAlertDialogPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
))
RawAlertDialogOverlay.displayName = RawAlertDialogPrimitive.Overlay.displayName

const RawAlertDialogContent = React.forwardRef<
  React.ElementRef<typeof RawAlertDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof RawAlertDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
  <RawAlertDialogPortal>
    <RawAlertDialogOverlay className=" bg-l-bg/20 dark:bg-d-bg/20 softblur"/>
    <RawAlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-l-prim bg-l-bg/60 glassblur text-l-txt dark:border-d-prim dark:bg-d-bg/60 dark:text-d-txt p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    />
  </RawAlertDialogPortal>
))
RawAlertDialogContent.displayName = RawAlertDialogPrimitive.Content.displayName

const RawAlertDialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
RawAlertDialogHeader.displayName = "RawAlertDialogHeader"

const RawAlertDialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
RawAlertDialogFooter.displayName = "RawAlertDialogFooter"

const RawAlertDialogTitle = React.forwardRef<
  React.ElementRef<typeof RawAlertDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof RawAlertDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <RawAlertDialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold", className)}
    {...props}
  />
))
RawAlertDialogTitle.displayName = RawAlertDialogPrimitive.Title.displayName

const RawAlertDialogDescription = React.forwardRef<
  React.ElementRef<typeof RawAlertDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof RawAlertDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <RawAlertDialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
RawAlertDialogDescription.displayName =
  RawAlertDialogPrimitive.Description.displayName

const RawAlertDialogAction = React.forwardRef<
  React.ElementRef<typeof RawAlertDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof RawAlertDialogPrimitive.Action> & {
    actionvariant?: "primary" | "secondary" | "tertiary" | "soft" | "text"
  }
>(({ className, children, actionvariant, ...props }, ref) => (
  <RawAlertDialogPrimitive.Action
    ref={ref}
    className={cn("", className)}
    {...props} asChild
  >
    <Button type={actionvariant}>{children}</Button>
  </RawAlertDialogPrimitive.Action>
))
RawAlertDialogAction.displayName = RawAlertDialogPrimitive.Action.displayName

const RawAlertDialogCancel = React.forwardRef<
  React.ElementRef<typeof RawAlertDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof RawAlertDialogPrimitive.Cancel> & {
    closevariant?: "primary" | "secondary" | "tertiary" | "soft" | "text"
  }
>(({ className, closevariant, children, ...props }, ref) => (
  <RawAlertDialogPrimitive.Cancel
    ref={ref}
    className={cn("mt-2 sm:mt-0",className
    )}
    {...props} asChild
  >
    <Button type={closevariant="soft"} outlined>{children}</Button>
  </RawAlertDialogPrimitive.Cancel>
))
RawAlertDialogCancel.displayName = RawAlertDialogPrimitive.Cancel.displayName

interface AlertDialogProps {
  trigger?: string
  triggervariant?: "primary" | "secondary" | "tertiary" | "soft" | "text"
  title: string
  titlestyle?: string
  description?: string
  descriptionstyle?: string
  plusheader?: React.ReactNode // falls noch zum header was dazu
  extracontent?: React.ReactNode
  close?: string
  closevariant?: "primary" | "secondary" | "tertiary" | "soft" | "text"
  action?: string
  actionvariant?: "primary" | "secondary" | "tertiary" | "soft" | "text"
  onClose?: () => void
  onAction?: () => void
  onOpen?: () => void
}
const AlertDialog: React.FC<AlertDialogProps & React.HTMLAttributes<HTMLElement>> = ({ children, trigger, triggervariant, title, titlestyle, description, descriptionstyle, close, closevariant, action, actionvariant, onOpen, onClose, onAction, ...props }) => {
  return (<>
    <RawAlertDialogTrigger triggervariant={triggervariant} onClick={onOpen}>
        {trigger="Open"}
    </RawAlertDialogTrigger>
    <RawAlertDialogContent>
      <RawAlertDialogHeader>
        <RawAlertDialogTitle className={titlestyle}>
          {title}
        </RawAlertDialogTitle>
        <RawAlertDialogDescription className={descriptionstyle}>
          {description}
        </RawAlertDialogDescription>
        {props.plusheader}
      </RawAlertDialogHeader>
      {props.extracontent}
      <RawAlertDialogFooter>
        <RawAlertDialogCancel closevariant={closevariant} onClick={onClose}>
          {close="Cancel"}
        </RawAlertDialogCancel>
        <RawAlertDialogAction actionvariant={actionvariant} onClick={onAction}>
          {action="Proceed"}
        </RawAlertDialogAction>
      </RawAlertDialogFooter>
    </RawAlertDialogContent>
  </>
  )
}


export {
  AlertDialog,
  AlertDialogWrapper,
}
