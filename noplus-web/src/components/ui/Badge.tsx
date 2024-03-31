import { cva, type VariantProps } from "cva";
import { cn } from "../twm";
import React from "react";
import * as Feather from "react-feather";

const BadgeVariants = cva(
    {
        base: " items-center justify-around h-auto w-auto",
        variants: {
            variant: {
                primary: " bg-l-prim text-d-txt dark:bg-d-bg dark:text-d-txt",
                oprimary: " bg-l-prim-600/40 text-l-txt/80 dark:bg-d-bg-600/40 dark:text-d-txt-300/80", // a because of oppacity
                secondary: " bg-l-sec text-l-txt dark:bg-d-sec-600 dark:text-d-txt-600",
                osecondary: " bg-l-sec-600/40 text-l-txt-600/80 dark:bg-d-bg-400/40 dark:text-d-sec-400/80 ",
                accent: " bg-l-acc-500 text-l-txt dark:bg-d-acc dark:text-d-txt-600",
                oaccent: " bg-l-acc/40 text-l-txt/80 dark:bg-d-bg-400/40 dark:text-d-acc-400/80",
                success: " bg-system-success text-system-success-bright dark:bg-system-success-dark",
                osuccess: " bg-system-success-bright/40 text-system-success-dark/80 dark:bg-d-bg-400/40 dark:text-system-success-light/80",
                danger: " bg-system-error-light text-l-txt-100 dark:bg-system-error dark:text-system-error-bright",
                odanger: " bg-system-error/40 text-l-txt/80 dark:bg-system-error-light/20 dark:text-system-error-dark/80",
                warning: " bg-system-warning text-d-acc-800 dark:bg-system-warning-dark dark:text-d-acc-400",
                owarning: " bg-system-warning/40 text-l-acc-900/80 dark:bg-system-warning-dark/40 dark:text-d-acc-400/80",
                info: " bg-sky-400 text-indigo-600 dark:bg-sky-600 dark:text-cyan-400",
                oinfo: " bg-sky-500/40 text-blue-700/80 dark:bg-sky-600/40 dark:text-cyan-400/80",
            },
            size: {
                sm: " rounded-xl py-1 px-2 font-normal",
                md: " py-2 px-3 font-semibold rounded-xl",
                lg: " py-2 px-5 font-black rounded-xl ",
                nsm: " rounded-full p-1",
                nmd: " rounded-full p-2",
                nlg: " rounded-full p-3",
            },
            shadouu: { // double u / w
                sm: " shadow-md shadow-zinc-100 dark:shadow-zinc-950/70",
                md: " shadow-lg shadow-zinc-400 dark:shadow-zinc-500",
                lg: " shadow-2xl shadow-zinc-600 dark:shadow-zinc-400",
                osm: " shadow-md shadow-zinc-100/70 dark:shadow-zinc-600/70",
                omd: " shadow-lg shadow-zinc-100/70 dark:shadow-zinc-500/70",
                olg: " shadow-2xl shadow-zinc-100/70 dark:shadow-zinc-500/70",
                none: " shadow-none",
            }
        },
        defaultVariants: {
            variant: "secondary",
            size: "sm",
            shadouu: "sm",
        }
    }
)

const Badge = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement> & VariantProps<typeof BadgeVariants> & {
    opacity?: boolean;
    prefix?: keyof typeof Feather;
    suffix?: keyof typeof Feather;
    type?: "primary" | "secondary" | "accent" | "success" | "danger" | "warning" | "info";
    shadow?: "sm" | "md" | "lg"; // Updated type
}>(({ type="secondary", size="sm", shadow="sm", children="unset", opacity=false, className, prefix, suffix, ...props}, ref) => {
    const variant: "primary" | "oprimary" | "secondary" | "osecondary" | "accent" | "oaccent" | "success" | "osuccess" | "danger" | "odanger" | "warning" | "owarning" | "info" | "oinfo" | null | undefined = opacity ? `o${type}` : type;
    const shadouu: "sm" | "md" | "lg" | "osm" | "omd" | "olg" = opacity ? `o${shadow}` : shadow; // Updated type
    const Prefix = prefix ? Feather[prefix] : null;
    const Suffix = suffix ? Feather[suffix] : null;
    const iconSize = size === "sm" ? 10 : size === "md" ? 15 : size === "lg" ? 20 : 10; // Default to 16 if size is not "sm", "md", or "lg"

    return (
        <span className={cn(BadgeVariants({ variant, size, shadouu }), className)} {...props} style={{ display: 'inline-flex', alignItems: 'center', width: 'auto' }} ref={ref}>
            {Prefix && <Prefix size={iconSize} style={{
                marginRight: size === 'sm' ? '2px' : size === 'md' ? '0.25rem' : size == 'lg' ? '0.5rem' : '2px'
            }} />}
            {children}
            {Suffix && <Suffix size={iconSize} style={{
                marginLeft: size === 'sm' ? '2px' : size === 'md' ? '0.25rem' : size == 'lg' ? '0.5rem' : '2px'
            }} />}
        </span>
    )
})
Badge.displayName = "Badge";

const BadgedIcon = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement> & VariantProps<typeof BadgeVariants> & {
    type?: "primary" | "secondary" | "accent" | "success" | "danger" | "warning" | "info";
    shadow?: "sm" | "md" | "lg";
    opacity?: boolean;
    icon: keyof typeof Feather;
    color?: string;
    IconSize?: number;
}>(({ type="secondary", size, shadow="sm", opacity=false, icon, className, color, ...props}, ref) => {
    const variant: "primary" | "oprimary" | "secondary" | "osecondary" | "accent" | "oaccent" | "success" | "osuccess" | "danger" | "odanger" | "warning" | "owarning" | "info" | "oinfo" | null | undefined = opacity ? `o${type}` : type;
    const shadouu: "sm" | "md" | "lg" | "osm" | "omd" | "olg" = opacity ? `o${shadow}` : shadow; // Updated type
    const Icon = Feather[icon] ? Feather[icon] : Feather['Code'];
    const IconSize = size === "sm" ? 30 : size === "md" ? 45 : size === "lg" ? 60 : 30;
    return (
        <span className={cn(BadgeVariants({ variant, size, shadouu }), className)} style={{ display: 'inline-flex', alignItems: 'center', width: 'auto' }} ref={ref}>
            {Icon && <Icon size={IconSize} color={color} />}
        </span>
    )
})
BadgedIcon.displayName = "BadgeIcon";


export { Badge, BadgedIcon };
