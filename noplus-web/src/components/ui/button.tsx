import { cva, VariantProps } from "cva";
import React from "react";
import { cn } from "../twm";
import * as Loader from "./";
import * as Feather from "react-feather";

const ButtonVariants = cva({
    base: " duration-200 border",
    variants: {
        variant: {
            primary: "bg-l-prim text-d-txt border-l-prim-700 hover:border-l-acc-600 active:border-l-sec-500  hover:bg-l-prim-700 hover:text-d-txt-200 active:bg-l-prim-800 dark:bg-d-bg dark:text-d-txt-500 dark:hover:bg-d-prim-800 dark:hover:text-d-txt-100 dark:hover:border-indigo-900 dark:active:bg-d-prim-800 dark:active:text-d-sec-600 dark:active:border-d-acc-600",
            secondary: "bg-l-sec text-l-txt dark:bg-d-sec-600 dark:text-d-txt-600",
            tertiary: " bg-l-acc text-l-txt dark:bg-d-acc-600 dark:text-d-txt-600",
            oprimary: "", // o for outlined
            osecondary: "",
            otertiary: "",
        },
        size: {
            sm: " px-2 py-1 text-sm font-normal tracking-tight hover:-tracking-tighter ",
            md: " px-4 py-2 text-base font-semibold tracking-tight hover:tracking-wide border-2",
            lg: "",
        },
        rounded: {
            true: " rounded-xl",
            false: "rounded-md",
        },
        disabled: {
            true: "",
        }
    },
    defaultVariants: {
        variant: "secondary",
        size: "md",
        rounded: true,
    }
})

const ICObuttonVariants = cva({
    base: "",
    variants: {
        variant: {
            primary: "",
            secondary: "",
            tertiary: "",
            oprimary: "", // o for outlined
            osecondary: "",
            otertiary: "",
        },
        size: {
            sm: "",
            md: "",
            lg: "",
        },
        shape: {
            round: "",
            square: "",
        },
        disabled: {
            true: "",
        }
    },
    defaultVariants: {
        variant: "secondary",
        size: "md",
        shape: "square",
    }
})

const Button = React.forwardRef<HTMLButtonElement, React.HTMLAttributes<HTMLButtonElement> & VariantProps<typeof ButtonVariants> & VariantProps<typeof ICObuttonVariants> & {
// Different return Controllers
icon?: keyof typeof Feather;
// Loading aber der ist tiefer
disabled?: boolean;
loading?: keyof typeof Loader;

// addatives of normal button
prefix?: keyof typeof Feather;
suffix?: keyof typeof Feather;
}>(({ loading, disabled, icon, children, variant, size, rounded=true, className, prefix, suffix, ...props }) => {
    if (icon && loading && disabled) {
        return (
            <button {...props} disabled>
                placeholder
            </button>
        )
    } else if (icon && loading && !disabled) {
        return (
            <button {...props}>
                placeholder
            </button>
        )
    } else if (icon && !loading && disabled) {
        return (
            <button {...props} disabled>
                placeholder
            </button>
        )
    } else if (icon && !loading && !disabled) {
        return (
            <button {...props}>
                placeholder
            </button>
        )
    } else if (!icon && loading && disabled) {
        return (
            <button {...props} disabled>
                {children}
            </button>
        )
    } else if (!icon && loading && !disabled) {
        return (
            <button {...props}>
                {children}
            </button>
        )
    } else if (!icon && !loading && disabled) {
        return (
            <button {...props} disabled>
                {children}
            </button>
        )
    } else if (!icon && !loading && !disabled) {
        const Prefix = prefix ? Feather[prefix] : null;
        const Suffix = suffix ? Feather[suffix] : null;
        return (
            <button className={cn(ButtonVariants({variant, size, rounded, disabled:false}), className)} style={{ display: 'inline-flex', alignItems: 'center', width: 'auto' }}>
                {Prefix && <Prefix size={size === 'sm' ? 10 : size === 'md' ? 15 : size === 'lg' ? 20 : 10} style={{
                    marginRight: size === 'sm' ? '2px' : size === 'md' ? '0.25rem' : size == 'lg' ? '0.5rem' : '2px'
                }} />}
                {children}
                {Suffix && <Suffix size={size === 'sm' ? 10 : size === 'md' ? 15 : size === 'lg' ? 20 : 10} style={{
                    marginLeft: size === 'sm' ? '2px' : size === 'md' ? '0.25rem' : size == 'lg' ? '0.5rem' : '2px'
                }} />}
            </button>
        )
    }
})
Button.displayName = "Button";

export { Button };