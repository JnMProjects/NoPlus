import React from "react";
import * as Feather from "react-feather";
import { BadgedIcon } from "./Badge";

const Icon = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement> & {
    icon: keyof typeof Feather;
    size?: "sm" | "md" | "lg";
    color?: string;
    opacity?: boolean;
    shadow?: "sm" | "md" | "lg";
    badged?: boolean;
    className?: string;
    type?: "primary" | "secondary" | "accent" | "success" | "danger" | "warning" | "info";
}>(({ size = "sm", color="#CDAE23", badged=false, icon, opacity=false, shadow, type="secondary", ...props}, ref) => {
    const siteinpx = size === "sm" ? 30 : size === "md" ? 45 : size === "lg" ? 60 : 30;
    
    if (!badged) {
        const FIcon = Feather[icon] ? Feather[icon] : Feather['Code'];
        return (
            <FIcon size={siteinpx} color={color} />
        )
    } else {
        return (
            <BadgedIcon icon={icon} size={size} opacity={opacity} shadow={shadow} type={type} {...props} />
        )
    }

})
Icon.displayName = "Icon";

export { Icon };