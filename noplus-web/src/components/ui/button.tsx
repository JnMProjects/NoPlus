import { cva, VariantProps } from "cva";
import React from "react";
import { ButtonHTMLAttributes } from "react";
import { cn } from "../twm";
import { Slot } from "@radix-ui/react-slot";

const Buttonvariants = cva(
    "inline-flex items-center justify-center ",
    {
        variants: {
            primary: {
                true: " bg-l-prim dark:bg-d-prim text-l-sec dark:text-d-sec",
            },

            outline: {
                true: " outline-2",
            },
            padding: {
                sm: "p-2",
                md: "p-4",
                lg: "p-8",
            
            },
        },
        compoundVariants: [
            
        ],
        defaultVariants: {
            
        },
    }
)


export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof Buttonvariants> {
    flex?: boolean | string | number;
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, asChild = false, ...props }, ref) => { // alle cva props anfügen!
      const Comp = asChild ? Slot : "button" 
      return (
        <Comp
          className={cn(Buttonvariants({ className }))} // Hier auch alle cva props anfügen!
          ref={ref}
          {...props}
        />
      )
    }
)
Button.displayName = "Button"


export { Button, Buttonvariants };