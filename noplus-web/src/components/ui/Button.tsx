import { cva, VariantProps } from "cva";
import React from "react";
import { cn } from "../twm";
import * as Loader from "./";
import * as Feather from "react-feather";

const ButtonVariants = cva({
    base: " duration-200 border",
    variants: {
        variant: {
            primary: "bg-l-prim-800 text-d-txt-100 border-l-prim-600 hover:border-l-acc-600 active:border-l-sec-500  hover:bg-l-prim-700 hover:text-d-txt-200 active:bg-l-prim-800 dark:bg-d-bg dark:text-d-txt-500 dark:hover:bg-d-prim-800 dark:hover:text-d-txt-100 dark:hover:border-indigo-900 dark:active:bg-d-prim-800 dark:active:text-d-sec-600 dark:active:border-d-acc-600",
            secondary: "bg-l-sec text-l-txt border-amber-300 hover:bg-yellow-200 hover:text-l-txt-600 hover:border-orange-300 active:bg-yellow-300 active:text-l-txt-700 active:border-amber-600 dark:bg-yellow-300 dark:text-d-txt-800 dark:border-amber-500 dark:hover:bg-yellow-400 dark:hover:text-d-txt-900 dark:hover:border-amber-600 dark:active:bg-yellow-500 dark:active:text-d-txt-900 dark:active:border-amber-800",
            tertiary: "bg-violet-300 text-l-txt border-fuchsia-500 hover:bg-indigo-300 hover:text-l-txt-900 hover:border-violet-700 active:bg-violet-300 active:border-violet-800 dark:bg-purple-500 dark:text-fuchsia-200 dark:border-violet-600 dark:hover:bg-purple-700 dark:hover:text-teal-300 dark:hover:border-indigo-400 dark:active:bg-purple-800 dark:active:text-teal-400 dark:active:border-indigo-700",
            soft: "", // teal and da blue stuff very beautiful
            osoft: "",
            oprimary: "", // o for outlined
            osecondary: "",
            otertiary: "",
            text: "", // invis bg just hover and active effect
            otext: "",
        },
        size: {
            sm: " px-2 py-1 text-sm font-normal ",
            md: " px-4 py-2 text-base font-semibold  border-2",
            lg: "",
        },
        textexpand: {
            true: ""
        },
        rounded: {
            true: " rounded-xl",
            false: "rounded-md",
        },
        disabled: {
            true: "",
        }
    },
    compoundVariants: [
        {
            size: "sm",
            textexpand: true,
            className: "tracking-tighter hover:-tracking-tight"
        },
        {
            size: "md",
            textexpand: true,
            className: "tracking-tight hover:tracking-normal"
        },
        {
            size: "lg",
            textexpand: true,
            className: "tracking-normal hover:tracking-wide"
        }
    ],
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
            icon: "",
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
outlined?: boolean;

// addatives of normal button
prefix?: keyof typeof Feather;
suffix?: keyof typeof Feather;
type?: "primary" | "secondary" | "tertiary" | "soft" | "text";
textexpand?: boolean;
}>(({ loading, disabled, icon, children, textexpand=false, size, rounded=true, className, prefix, suffix, outlined, type, ...props }) => {
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
        const variant: "primary" | "secondary" | "tertiary" | "soft" | "text" | "oprimary" | "osecondary" | "osoft" | "otext" | undefined = outlined ? `o${type}` : type; // IT WORKS !!!!!!!! IF IT AINT BROKE DONT FIX IT
        return (
            <button className={cn(ButtonVariants({variant, size, rounded, textexpand, disabled:false}), className)} style={{ display: 'inline-flex', alignItems: 'center', width: 'auto' }}>
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



