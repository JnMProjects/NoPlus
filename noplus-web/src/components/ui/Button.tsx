import { cva, VariantProps } from "cva";
import React from "react";
import { cn } from "../twm";
import {Loader} from "@ui/Loader";
import * as Feather from "react-feather";
import { Icon } from "./Feather";

const ButtonVariants = cva({
    base: " duration-150 border",
    variants: {
        variant: {
            primary: "bg-l-prim-800 text-d-txt-100 border-l-prim-600 hover:border-l-acc-600 active:border-l-sec-500  hover:bg-l-prim-700 hover:text-d-txt-200 active:bg-l-prim-800 dark:bg-d-bg dark:text-d-txt-500 dark:hover:bg-d-prim-800 dark:hover:text-d-txt-100 dark:hover:border-indigo-900 dark:active:bg-d-prim-800 dark:active:text-d-sec-600 dark:active:border-d-acc-600",
            secondary: "bg-l-sec text-l-txt border-amber-300 hover:bg-yellow-200 hover:text-l-txt-600 hover:border-orange-300 active:bg-yellow-300 active:text-l-txt-700 active:border-amber-600 dark:bg-yellow-300 dark:text-d-txt-800 dark:border-amber-500 dark:hover:bg-yellow-400 dark:hover:text-d-txt-900 dark:hover:border-amber-600 dark:active:bg-yellow-500 dark:active:text-d-txt-900 dark:active:border-amber-800",
            tertiary: "bg-violet-300 text-l-txt border-fuchsia-500 hover:bg-indigo-300 hover:text-l-txt-900 hover:border-violet-700 active:bg-violet-300 active:border-violet-800 dark:bg-purple-500 dark:text-fuchsia-200 dark:border-violet-600 dark:hover:bg-purple-700 dark:hover:text-teal-300 dark:hover:border-indigo-400 dark:active:bg-purple-800 dark:active:text-teal-400 dark:active:border-indigo-700",
            soft: " bg-cyan-300 text-blue-800 border-teal-400 hover:bg-sky-300 hover:text-indigo-700 hover:border-emerald-500 active:border-lime-400 active:text-indigo-800 dark:bg-teal-600 dark:text-sky-100 dark:hover:bg-emerald-700 dark:hover:text-cyan-100 dark:active:text-emerald-100 dark:active:border-teal-600", // teal and da blue stuff very beautiful
            osoft: "bg-cyan-200/50 text-emerald-950 border-teal-400 hover:text-emerald-900 hover:border-teal-500 active:text-emerald-800 active:border-teal-600 dark:bg-teal-600/50 dark:text-sky-100 dark:border-emerald-500 dark:hover:text-cyan-100 dark:hover:border-teal-600 dark:active:text-emerald-200 dark:active:border-teal-700", // o for outlined
            oprimary: " border-l-prim-400 bg-l-txt-300/40 hover:bg-l-txt-200/50 hover:border-l-prim-700 active:bg-l-txt-300/50 dark:bg-d-prim-600/50 dark:border-slate-700 dark:text-cyan-50/80 dark:hover:bg-d-prim-500/50 dark:hover:border-violet-200", // o for outlined
            osecondary: "bg-l-sec-300/50 border-amber-500 hover:border-amber-600 hover:bg-l-sec-400/50 active:bg-l-sec-500/50 dark:bg-d-sec-500/40 dark:border-yellow-500 dark:hover:bg-d-sec-500/50 dark:hover:border-yellow-600 dark:active:border-yellow-700",
            otertiary: "bg-violet-300/40 text-l-txt border-fuchsia-500 hover:bg-indigo-300/40 hover:text-l-txt-900 hover:border-violet-700 active:bg-violet-300/40 active:border-violet-800 dark:bg-purple-500/50 dark:text-fuchsia-200 dark:border-violet-600 dark:hover:bg-purple-700/50 dark:hover:text-teal-300 dark:hover:border-indigo-400 dark:active:bg-purple-800/40 dark:active:text-teal-400 dark:active:border-indigo-700",
            text: "border-none bg-transparent text-l-txt hover:bg-slate-200/60 active:bg-gray-400/80 dark:text-d-txt dark:hover:bg-slate-900/60 dark:active:bg-gray-800/80", // invis bg just hover and active effect
            otext: "border-none bg-transparent text-l-txt hover:bg-slate-200/60 active:bg-gray-400/80 dark:text-d-txt dark:hover:bg-slate-900/60 dark:active:bg-gray-800/80",
        },
        size: {
            sm: " px-2 py-1 text-sm font-normal ",
            md: " px-4 py-2 text-base font-semibold  border-2",
            lg: " px-6 py-3 text-lg font-bold  border-2",
        },
        textexpand: {
            true: ""
        },
        rounded: {
            true: " rounded-xl",
            false: "rounded-md",
        },
        disabled: {
            true: "cursor-not-allowed pointer-events-none opacity-70 dark:opacity-50",
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
        },
    ],
    defaultVariants: {
        variant: "secondary",
        size: "md",
        rounded: true,
    }
})

const ICObuttonVariants = cva({
    variants: {
        shape: {
            round: " rounded-full",
            square: " rounded-xl",
        },
        size: {
            sm: "p-2",
            md: "p-3",
            lg: "p-4",
        }
    },
    defaultVariants: {
        shape: "round",
        size: "md",
    }
})

const calcColor = (variant: "primary" | "secondary" | "tertiary" | "soft" | "text" | "osoft" | "oprimary" | "osecondary"  | "otertiary" | "otext" | undefined, Color:string | undefined) => {
    if (Color) {
        return Color;
    } else {
        if (variant === "primary" || variant === "oprimary") {
            return "#CDAE23"
        } else if (variant === "secondary" || variant === "osecondary") {
            return "#059669"
        } else if (variant === "tertiary" || variant === "otertiary") {
            return "#84cc16"
        } else if (variant === "soft" || variant === "osoft") {
            return "#d97706"
        } else if (variant === "text" || variant === "otext") {
            return ""
        }
    }
}

const Button = React.forwardRef<HTMLButtonElement, React.HTMLAttributes<HTMLButtonElement> & VariantProps<typeof ButtonVariants> & VariantProps<typeof ICObuttonVariants> & {
// Different return Controllers
icon?: keyof typeof Feather;
disabled?: boolean;
loading?: 'circle' | 'bar' | 'beat' | 'bounce' | 'clip' | 'clock' | 'climbingbox' | 'dot' | 'fade' | 'grid' | 'hash' | 'moon' | 'pacman' | 'ppg' | 'puff' | 'pulse' | 'rise' | 'ring' | 'rotate' | 'scale' | 'skew' | 'square' | 'sync';
Color?: string | undefined;
outlined?: boolean;
shape?: "round" | "square";

// addatives of normal button
prefix?: keyof typeof Feather;
suffix?: keyof typeof Feather;
type?: "primary" | "secondary" | "tertiary" | "soft" | "text";
textexpand?: boolean;
}>(({ loading, disabled, icon, children, textexpand=false, size="md", rounded=true, className, prefix, suffix, outlined, type, shape, Color, ...props }) => {
    if (icon && !loading) {
        const Suffix = suffix ? Feather[suffix] : null;
        const variant: "primary" | "secondary" | "tertiary" | "soft" | "text" | "osoft" | "oprimary" | "osecondary"  | "otertiary" | "otext" | undefined = outlined ? `o${type}` : type as any; // IT WORKS !!!!!!!! IF IT AINT BROKE DONT FIX IT
        if (children) {
            return (
                <button className={cn(ButtonVariants({variant, size, rounded, textexpand, disabled}), className)} style={{ display: 'inline-flex', alignItems: 'center', width: 'auto' }} disabled={disabled} {...props}>
                    <div style={{
                        marginRight: size === 'sm' ? '2px' : size === 'md' ? '0.25rem' : size == 'lg' ? '0.5rem' : '2px',
                        marginLeft: '2px'
                    }}><Icon icon={icon} color={calcColor(variant,Color)} size={size}/></div>
                    {children}
                    {Suffix && <Suffix size={size === 'sm' ? 10 : size === 'md' ? 15 : size === 'lg' ? 20 : 10} style={{
                        marginLeft: size === 'sm' ? '2px' : size === 'md' ? '0.25rem' : size == 'lg' ? '0.5rem' : '2px'
                    }} />}
                </button>
            )
        } else {
            // without 4-2 padding uniform...
            return (
                <button className={cn(cn(ButtonVariants({variant,size,disabled}), ICObuttonVariants({shape})))} style={{ display: 'inline-flex', alignItems: 'center', width: 'auto' }} {...props}>
                    <Icon icon={icon} color={calcColor(variant,Color)}/>
                </button>
            )
        }
    } else if (!icon && loading) {
        const Suffix = suffix ? Feather[suffix] : null;
        const variant: "primary" | "secondary" | "tertiary" | "soft" | "text" | "osoft" | "oprimary" | "osecondary"  | "otertiary" | "otext" | undefined = outlined ? `o${type}` : type as any; // IT WORKS !!!!!!!! IF IT AINT BROKE DONT FIX IT
        if (children) {
            return (
                <button className={cn(ButtonVariants({variant, size, rounded, textexpand, disabled}), className)} style={{ display: 'inline-flex', alignItems: 'center', width: 'auto' }} disabled={disabled} {...props}>
                    <div style={{
                        marginRight: size === 'sm' ? '2px' : size === 'md' ? '0.25rem' : size == 'lg' ? '0.5rem' : '2px',
                        marginLeft: '2px'
                    }}><Loader type={loading} size={size === 'sm' ? 10 : size === 'md' ? 15 : size === 'lg' ? 20 : 10} color={calcColor(variant, Color)}/></div>
                    {children}
                    {Suffix && <Suffix size={size === 'sm' ? 10 : size === 'md' ? 15 : size === 'lg' ? 20 : 10} style={{
                        marginLeft: size === 'sm' ? '2px' : size === 'md' ? '0.25rem' : size == 'lg' ? '0.5rem' : '2px'
                    }} />}
                </button>
            )
        } else {
            // without 4-2 padding uniform...
            return (
                <button className={cn(cn(ButtonVariants({variant,size,disabled}), ICObuttonVariants({shape})))} style={{ display: 'inline-flex', alignItems: 'center', width: 'auto' }} {...props}>
                    <div><Loader type={loading} size={size === 'sm' ? 10 : size === 'md' ? 15 : size === 'lg' ? 20 : 10} color={calcColor(variant, Color)}/></div>
                </button>
            )
        }
    } else if (!icon && !loading) {
        const Prefix = prefix ? Feather[prefix] : null;
        const Suffix = suffix ? Feather[suffix] : null;
        const variant: "primary" | "secondary" | "tertiary" | "soft" | "text" | "osoft" | "oprimary" | "osecondary"  | "otertiary" | "otext" | undefined = outlined ? `o${type}` : type as any; // IT WORKS !!!!!!!! IF IT AINT BROKE DONT FIX IT
        return (
            <button className={cn(ButtonVariants({variant, size, rounded, textexpand, disabled}), className)} style={{ display: 'inline-flex', alignItems: 'center', width: 'auto' }} disabled={disabled} {...props}>
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



