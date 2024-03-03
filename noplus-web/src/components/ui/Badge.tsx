import { cva, type VariantProps } from "cva";
import { cn } from "../twm";
import React from "react";

const BadgeVariants = cva(
    "",
    {
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
                danger: " bg-system-error-light text-l-txt-200 dark:bg-system-error dark:text-system-error-bright",
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
            },
            shadow: {
                sm: " shadow-md shadow-zinc-300 dark:shadow-zinc-600",
                md: " shadow-lg shadow-zinc-400 dark:shadow-zinc-500",
                lg: " shadow-2xl shadow-zinc-700 dark:shadow-zinc-300",
                none: " shadow-none",
            }
        },
        defaultVariants: {
            variant: "secondary",
            size: "sm",
            shadow: "sm",
        }
    }
)

const Badge = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement> & VariantProps<typeof BadgeVariants>>(({ variant="secondary", size="sm", shadow="sm", children="unset", className, ...props}) => {
    return (
        <span className={cn(BadgeVariants({ variant, size, shadow }), className)} {...props}>
            {children}
        </span>
    )
})
Badge.displayName = "Badge"; // Add display name

export { Badge };
