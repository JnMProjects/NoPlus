"use client"

import * as React from "react"
import * as RawAlertRawDialogPrimitive from "@radix-ui/react-alert-dialog"
import * as RawDialogPrimitive from "@radix-ui/react-dialog"
import { X } from "react-feather"

import { cn } from "../twm"
import { Button } from "@ui/."

// ALERT DIALOG

const ModalDialogWrapper = RawAlertRawDialogPrimitive.Root

const RawAlertRawDialogTrigger = React.forwardRef<
  React.ElementRef<typeof RawAlertRawDialogPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof RawAlertRawDialogPrimitive.Trigger> & {
    triggervariant?: "primary" | "secondary" | "tertiary" | "soft" | "text"
  }
>(({ className, triggervariant, children, ...props }, ref) => (
  <RawAlertRawDialogPrimitive.Trigger
    className={cn(
      "",
      className
    )}
    {...props}
    ref={ref}
    asChild
  >
    <Button type={triggervariant="primary"}>{children}</Button>
  </RawAlertRawDialogPrimitive.Trigger>
))
RawAlertRawDialogTrigger.displayName = RawAlertRawDialogPrimitive.Trigger.displayName

const RawAlertRawDialogPortal = RawAlertRawDialogPrimitive.Portal

const RawAlertRawDialogOverlay = React.forwardRef<
  React.ElementRef<typeof RawAlertRawDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof RawAlertRawDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <RawAlertRawDialogPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
))
RawAlertRawDialogOverlay.displayName = RawAlertRawDialogPrimitive.Overlay.displayName

const RawAlertRawDialogContent = React.forwardRef<
  React.ElementRef<typeof RawAlertRawDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof RawAlertRawDialogPrimitive.Content>
>(({ className, ...props }, ref) => (
  <RawAlertRawDialogPortal>
    <RawAlertRawDialogOverlay className=" bg-l-bg/20 dark:bg-d-bg/20 softblur"/>
    <RawAlertRawDialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-l-prim bg-l-bg/10 glassblur text-l-txt dark:border-d-prim dark:bg-d-bg/10 dark:text-d-txt p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    />
  </RawAlertRawDialogPortal>
))
RawAlertRawDialogContent.displayName = RawAlertRawDialogPrimitive.Content.displayName

const RawAlertRawDialogHeader = ({
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
RawAlertRawDialogHeader.displayName = "RawAlertRawDialogHeader"

const RawAlertRawDialogFooter = ({
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
RawAlertRawDialogFooter.displayName = "RawAlertRawDialogFooter"

const RawAlertRawDialogTitle = React.forwardRef<
  React.ElementRef<typeof RawAlertRawDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof RawAlertRawDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <RawAlertRawDialogPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold", className)}
    {...props}
  />
))
RawAlertRawDialogTitle.displayName = RawAlertRawDialogPrimitive.Title.displayName

const RawAlertRawDialogDescription = React.forwardRef<
  React.ElementRef<typeof RawAlertRawDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof RawAlertRawDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <RawAlertRawDialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
RawAlertRawDialogDescription.displayName =
  RawAlertRawDialogPrimitive.Description.displayName

const RawModalDialogAction = React.forwardRef<
  React.ElementRef<typeof RawAlertRawDialogPrimitive.Action>,
  React.ComponentPropsWithoutRef<typeof RawAlertRawDialogPrimitive.Action> & {
    actionvariant?: "primary" | "secondary" | "tertiary" | "soft" | "text"
  }
>(({ className, children, actionvariant, ...props }, ref) => (
  <RawAlertRawDialogPrimitive.Action
    ref={ref}
    className={cn("", className)}
    {...props} asChild
  >
    <Button type={actionvariant}>{children}</Button>
  </RawAlertRawDialogPrimitive.Action>
))
RawModalDialogAction.displayName = RawAlertRawDialogPrimitive.Action.displayName

const RawAlertRawDialogCancel = React.forwardRef<
  React.ElementRef<typeof RawAlertRawDialogPrimitive.Cancel>,
  React.ComponentPropsWithoutRef<typeof RawAlertRawDialogPrimitive.Cancel> & {
    closevariant?: "primary" | "secondary" | "tertiary" | "soft" | "text"
  }
>(({ className, closevariant, children, ...props }, ref) => (
  <RawAlertRawDialogPrimitive.Cancel
    ref={ref}
    className={cn("mt-2 sm:mt-0",className
    )}
    {...props} asChild
  >
    <Button type={closevariant="soft"} outlined>{children}</Button>
  </RawAlertRawDialogPrimitive.Cancel>
))
RawAlertRawDialogCancel.displayName = RawAlertRawDialogPrimitive.Cancel.displayName

interface AlertRawDialogProps {
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
const ModalDialog: React.FC<AlertRawDialogProps & React.HTMLAttributes<HTMLElement>> = ({ children, trigger, triggervariant, title, titlestyle, description, descriptionstyle, close, closevariant, action, actionvariant, onOpen, onClose, onAction, ...props }) => {
  return (<>
    <RawAlertRawDialogTrigger triggervariant={triggervariant} onClick={onOpen}>
        {trigger="Open"}
    </RawAlertRawDialogTrigger>
    <RawAlertRawDialogContent>
      <RawAlertRawDialogHeader>
        <RawAlertRawDialogTitle className={titlestyle}>
          {title}
        </RawAlertRawDialogTitle>
        <RawAlertRawDialogDescription className={descriptionstyle}>
          {description}
        </RawAlertRawDialogDescription>
        {props.plusheader}
      </RawAlertRawDialogHeader>
      {props.extracontent}
      <RawAlertRawDialogFooter>
        <RawAlertRawDialogCancel closevariant={closevariant} onClick={onClose}>
          {close="Cancel"}
        </RawAlertRawDialogCancel>
        <RawModalDialogAction actionvariant={actionvariant} onClick={onAction}>
          {action="Proceed"}
        </RawModalDialogAction>
      </RawAlertRawDialogFooter>
    </RawAlertRawDialogContent>
  </>
  )
}

// DIALOG

const RawDialog = RawDialogPrimitive.Root

const RawDialogTrigger = React.forwardRef<
  React.ElementRef<typeof RawDialogPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof RawDialogPrimitive.Trigger> & {
    triggervariant?: "primary" | "secondary" | "tertiary" | "soft" | "text"
  }
>(({ className, triggervariant="primary", children, ...props }, ref) => (
  <RawDialogPrimitive.Trigger
    ref={ref}
    className={cn("mt-2 sm:mt-0", className)}
    {...props}
  >
    <Button type={triggervariant}>{children}</Button>
  </RawDialogPrimitive.Trigger>
))
RawDialogTrigger.displayName = RawDialogPrimitive.Trigger.displayName

const RawDialogPortal = RawDialogPrimitive.Portal

const RawDialogClose = React.forwardRef<
  React.ElementRef<typeof RawDialogPrimitive.Close>,
  React.ComponentPropsWithoutRef<typeof RawDialogPrimitive.Close> & {
    closevariant?: "primary" | "secondary" | "tertiary" | "soft" | "text"
  }
>(({ className, closevariant="secondary", children, ...props }, ref) => (
  <RawDialogPrimitive.Close
    ref={ref}
    className={cn("mt-2 sm:mt-0", className)}
    {...props}
  >
    {children && <Button type={closevariant}>{children}</Button>}
  </RawDialogPrimitive.Close>
))
RawDialogClose.displayName = RawDialogPrimitive.Close.displayName

const RawDialogOverlay = React.forwardRef<
  React.ElementRef<typeof RawDialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof RawDialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <RawDialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 tinyblur bg-l-bg/20 dark:bg-d-bg/20  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
))
RawDialogOverlay.displayName = RawDialogPrimitive.Overlay.displayName

const RawDialogContent = React.forwardRef<
  React.ElementRef<typeof RawDialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof RawDialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <RawDialogPortal>
    <RawDialogOverlay />
    <RawDialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-l-sec dark:border-d-sec bg-l-bg/10 dark:bg-d-bg/10 glassblur text-l-txt dark:text-d-txt dar p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      )}
      {...props}
    >
      {children}
      <RawDialogPrimitive.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
        <X className="h-4 w-4 text-l-txt dark:text-d-txt" />
        <span className="sr-only">Close</span>
      </RawDialogPrimitive.Close>
    </RawDialogPrimitive.Content>
  </RawDialogPortal>
))
RawDialogContent.displayName = RawDialogPrimitive.Content.displayName

const RawDialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
RawDialogHeader.displayName = "RawDialogHeader"

const RawDialogFooter = ({
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
RawDialogFooter.displayName = "RawDialogFooter"

const RawDialogTitle = React.forwardRef<
  React.ElementRef<typeof RawDialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof RawDialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <RawDialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
RawDialogTitle.displayName = RawDialogPrimitive.Title.displayName

const RawDialogDescription = React.forwardRef<
  React.ElementRef<typeof RawDialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof RawDialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <RawDialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
RawDialogDescription.displayName = RawDialogPrimitive.Description.displayName

const DialogWrapper: React.FC<React.HTMLAttributes<HTMLElement> & {
  triggeraschild?: React.ReactNode
  trigger?: string
  before?: React.ReactNode
  triggervariant?: "primary" | "secondary" | "tertiary" | "soft" | "text"
}> = ({ children, triggeraschild, trigger, triggervariant, ...props }) => {
  if (triggeraschild) {
    return (
      <RawDialog>
        {props.before}
        <RawDialogTrigger asChild>{triggeraschild}</RawDialogTrigger>
        {children}
      </RawDialog>
    )
  } else {
    return (
      <RawDialog>
        {props.before}
        <RawDialogTrigger triggervariant={triggervariant} >{trigger}</RawDialogTrigger>
        {children}
      </RawDialog>
    )
  }
}

interface DialogProps {
  title?: string
  description?: string
  close?: string
  closeaschild?: React.ReactNode
  closevariant?: "primary" | "secondary" | "tertiary" | "soft" | "text"
  footer?: React.ReactNode
}

const Dialog: React.FC<DialogProps & React.HTMLAttributes<HTMLElement>> = ({ children, title, description, close, closeaschild, footer, closevariant, ...props }) => {
  if (closeaschild) {
    return (
      <RawDialogContent>
        <RawDialogHeader>
          <RawDialogTitle>{title}</RawDialogTitle>
          <RawDialogDescription>{description}</RawDialogDescription>
        </RawDialogHeader>
        {children}
        <RawDialogFooter>
          {footer}
          <RawDialogClose asChild>{closeaschild}</RawDialogClose>
        </RawDialogFooter>
      </RawDialogContent>
    )
  } else {
    return (
      <RawDialogContent>
        <RawDialogHeader>
          <RawDialogTitle>{title}</RawDialogTitle>
          <RawDialogDescription>{description}</RawDialogDescription>
        </RawDialogHeader>
        {children}
        <RawDialogFooter>
          {footer}
          <RawDialogClose closevariant={closevariant}>{close}</RawDialogClose>
        </RawDialogFooter>
      </RawDialogContent>
    )
  }
}

export {
  ModalDialog,
  ModalDialogWrapper,
  Dialog,
  DialogWrapper,
}
