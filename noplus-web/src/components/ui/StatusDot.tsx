import { Tooltip } from "@layout/index";
import React from "react";

interface StatusDotProps extends React.HTMLAttributes<HTMLDivElement> {
    status: "running" | "warning" | "info" | "error" | "cancelled" | "stopped"; // Running is greenish, warning yellow orrangeish, info blue to baby blue ish, error red, cancelled light gray, stopped dark gray to black
    label: boolean; // Show a / the Label as text next to the dot
    tip?: string; // Customise Label if shown or tooltip if not
}

const StatusDot: React.FC<StatusDotProps> = ({ status, label, tip, ...props }) => {
    const statusColor = {
        running: "bg-green-500",
        warning: "bg-yellow-500",
        info: "bg-blue-500",
        error: "bg-red-500",
        cancelled: "bg-gray-300",
        stopped: "bg-gray-800",
    };

    return (
        <div className="flex items-center" {...props}>
            <div
                className={`w-2 h-2 rounded-full mr-1 ${statusColor[status]}`}
            ></div>
            {label && (
                <Tooltip tips={tip || status}>
                    <span>{tip || status}</span>
                </Tooltip>
            )}
        </div>
    );
}

export { StatusDot };