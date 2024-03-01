import * as React from "react"
import { cva, type VariantProps } from "cva"

import { cn } from "../twm"

const ItemVariants = cva(
  "relative rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground w-auto",
  {
    variants: {
      errored: {
        true: "border-system-error dark:border-system-error-dark text-system-error-dark dark:text-system-error-light  [&>svg]:text-system-error bg-system-error-light/20 dark:bg-system-error-dark/20",
        false: "bg-background text-foreground",
      },
    },
    defaultVariants: {
      errored: false,
    },
  }
)

const Item = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof ItemVariants>
>(({ className, errored, ...props }, ref) => (
  <div
    ref={ref}
    role="Item"
    className={cn(ItemVariants({ errored }), className)}
    {...props}
  />
))
Item.displayName = "Item"

const ItemTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
))
ItemTitle.displayName = "ItemTitle"

const ItemDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
))
ItemDescription.displayName = "ItemDescription"

export { Item, ItemTitle, ItemDescription }
