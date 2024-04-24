/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { Tooltip } from "@layout/index";
import React from "react";
import { cva } from "cva";
import { cn } from "../twm";

// Props for StatusDot
interface StatusDotProps extends React.HTMLAttributes<HTMLDivElement> {
    status: "running" | "warning" | "info" | "error" | "cancelled" | "stopped"; // Running is greenish, warning yellow orrangeish, info blue to baby blue ish, error red, cancelled light gray, stopped dark gray to black
    label: boolean; // Show a / the Label as text next to the dot
    tip?: string; // Customise Label if shown or tooltip if not
    size?: "sm" | "md" | "lg"; // Size of the dot
}

// Controlls Collors and Sizes of StatusDot
const StatusDots = cva(
    {
        base: "rounded-full border",
        variants: {
            size: {
                sm: "w-2 h-2",
                md: "w-4 h-4",
                lg: "w-5 h-5",
            },
            status: {
                running: "bg-system-highlight-dark-cyan dark:bg-system-highlight-light-cyan border-system-highlight-dark-cyan dark:border-system-highlight-light-cyan",
                warning: "bg-system-warning dark:bg-system-warning-dark border-system-warning dark:border-system-warning-dark",
                info: "bg-system-success-dark dark:bg-system-success-light border-system-success-dark dark:border-system-success-light",
                error: "bg-system-error dark:bg-system-error-light border-system-error dark:border-system-error-light",
                cancelled: "bg-slate-600 dark:bg-slate-500 border-slate-600 dark:border-slate-500",
                stopped: "bg-zinc-800 dark:bg-zinc-700 border-zinc-800 dark:border-zinc-700"
            }
        }
    }
);

// The Tooltip or Label if not set by "tip" prop
const StatusDescriptions = {
    running: "Running",
    warning: "Warning",
    info: "Info",
    error: "Error",
    cancelled: "Cancelled",
    stopped: "Stopped"
}

const StatusDot: React.FC<StatusDotProps> = ({ status, label, tip, size, className, ...props }) => {
    const description = tip || StatusDescriptions[status];

    if (label) {
        return (
            <div className="flex items-center">
                <img  className={cn(StatusDots({size, status}), className)} />
                <p className="p-2 text-l-txt dark:text-d-txt">
                    {description}
                </p>
            </div>
        )
    } else {
        return (
            <Tooltip tips={description}>
                <img className={cn(StatusDots({size, status}), className)} />
            </Tooltip>
        )
    }
}

export { StatusDot };