import * as React from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "cva";
import { cn } from "@components/twm";
import * as Feather from "react-feather"

const buttonVariants = cva(
    {
        base: "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        variants: {
            variant: {
                default: "bg-l-bg dark:bg-d-bg text-l-txt dark:text-d-txt hover:bg-l-bg/80 dark:hover:bg-d-bg/80",
                destructive:
                  "bg-system-error-dark dark:bg-system-error-light text-d-txt dark:text-l-txt hover:bg-system-error-dark/80 dark:hover:bg-system-error-light/80",
                outline:
                  "border border-l-sec bg-l-bg-300/50 hover:bg-l-bg-400/60 text-l-txt hover:text-l-txt-700 dark:border-d-sec dark:bg-d-bg-700/50 dark:hover:bg-d-bg-600/60 dark:text-d-txt dark:hover:text-d-acc-400",
                secondary:
                  "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "hover:bg-l-acc-300/50 dark:hover:bg-d-acc-800/50 text-l-txt dark:text-d-txt hover:text-l-txt-700",
                link: "text-l-txt dark:text-d-txt hover:text-l-txt-700 dark:hover:text-d-txt-400 duration-200 underline-offset-4 hover:underline",
                expandIcon:
                  "group relative bg-l-bg dark:bg-d-bg text-l-txt dark:text-d-txt hover:bg-l-bg/80 dark:hover:bg-d-bg/80",
                ringHover:
                  "bg-l-bg dark:bg-d-bg text-l-txt dark:text-d-txt hover:bg-l-bg/80 dark:hover:bg-d-bg/80 transition-all duration-300  hover:ring-2 hover:ring-l-sec/90 dark:hover:ring-d-acc-800/90 hover:ring-offset-2",
                shine:
                  "bg-l-bg dark:bg-d-bg text-l-txt dark:text-d-txt animate-shine bg-gradient-to-r from-d-prim dark:from-l-prim via-d-prim/75 dark:via-l-prim/75 to-d-prim dark:to-l-prim bg-[length:400%_100%] ",
                gooeyRight:
                  "bg-l-bg dark:bg-d-bg text-l-txt dark:text-d-txt relative z-0 overflow-hidden transition-all duration-500 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-gradient-to-r from-zinc-400 dark:from-zinc-800 before:transition-transform before:duration-1000  hover:before:translate-x-[0%] hover:before:translate-y-[0%] ",
                gooeyLeft:
                  "bg-l-bg dark:bg-d-bg text-l-txt dark:text-d-txt relative z-0 overflow-hidden transition-all duration-500 after:absolute after:inset-0 after:-z-10 after:translate-x-[-150%] after:translate-y-[150%] after:scale-[2.5] after:rounded-[100%] after:bg-gradient-to-l from-zinc-400 dark:from-zinc-800 after:transition-transform after:duration-1000  hover:after:translate-x-[0%] hover:after:translate-y-[0%] ",
                linkHover1:
                  "bg-transparent relative after:absolute after:text-l-txt dark:after:text-d-txt after:bottom-2 after:h-[1px] after:w-2/3 after:origin-bottom-left after:scale-x-100 hover:after:origin-bottom-right hover:after:scale-x-0 after:transition-transform after:ease-in-out after:duration-300",
                linkHover2:
                  "relative after:absolute after:bg-primary after:bottom-2 after:h-[1px] after:w-2/3 after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300",
            },
            size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-11 rounded-md px-8",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

interface IconProps {
  Icon: keyof typeof Feather
  iconPlacement: "left" | "right";
}

interface IconRefProps {
  Icon?: never;
  iconPlacement?: undefined;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export type ButtonIconProps = IconProps | IconRefProps;

const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & ButtonIconProps
>(
  (
    {
      className,
      variant="default",
      size,
      asChild = false,
      Icon,
      iconPlacement,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    const IconComponent = Icon ? Feather[Icon] : null;
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {Icon && iconPlacement === "left" && IconComponent && (
          <div className="w-0 translate-x-[0%] pr-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-100 group-hover:pr-2 group-hover:opacity-100">
            <IconComponent className="pr-2"/>
          </div>
        )}
        <Slottable>{props.children}</Slottable>
        {Icon && iconPlacement === "right" && IconComponent && (
          <div className="w-0 translate-x-[0%] pl-0 opacity-0 transition-all duration-200 group-hover:w-5 group-hover:translate-x-100 group-hover:pl-2 group-hover:opacity-100">
            <IconComponent className="pl-2"/>
          </div>
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

const ShimmerborderButton = ({ children }: { children: React.ReactNode }) => {
    return (
      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[2px] shadow-lg focus:outline-none focus:ring-1 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-zinc-50">
        <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite_reverse] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#fff_0%,#000_7%)] bg-[conic-gradient(from_90deg_at_50%_50%,#000_0%,#fff_5%)]" />
        <span className="inline-flex h-full w-44 cursor-pointer items-center justify-center rounded-full bg-primary-900 px-3 py-1 font-semibold text-zinc-800 dark:text-zinc-200 backdrop-blur-xl bg-white/30 dark:bg-zinc-900/50">
          {children}
        </span> 
      </button>
    )
}

export { Button, ShimmerborderButton, buttonVariants };
        