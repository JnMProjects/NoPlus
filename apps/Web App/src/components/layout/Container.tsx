import { cva , type VariantProps} from "cva";
import React, { FC } from "react";

const ContainerVariants = cva(
    {
        variants: {
            row: {
                true: "flex-row",
            },
            gap: {
                sm: "gap-4",
                md: "gap-8",
                lg: "gap-12",
            },
            center: {
                true: "items-center justify-center",
            },
            padding: {
                sm: "p-4",
                md: "p-8",
                lg: "p-12",
            },
            intent: {
                invisible: "f bg-transparent",
                primary: "f rounded bg-l-prim/40 dark:bg-d-prim/40",
                secondary: "f rounded bg-l-sec/40 dark:bg-d-sec/40",
                success: "f rounded bg-system-success/40",
                warning: "f rounded bg-system-warning/40",
                error: "f rounded bg-system-error/40",
            },
            shadow: {
                true: "shadow-md",
            },
            main: {
                true: "w-full h-full bg-l-bg dark:bg-d-bg overflow-hidden",
                false: "w-auto h-auto",
            },
            flex: {
                true: "flex",
            },
            roundsize: {
                none: "",
                sm: "rounded-sm",
                md: "rounded-md",
                lg: "rounded-lg",
                xl: "rounded-xl",
            
            },
        },
        compoundVariants: [
            {
                row: false,
                flex: false,
                className: "grid grid-cols-1 gap-4",
            },
            {
                row: false,
                flex: true,
                className: "flex-col",
            },
        ],
        defaultVariants: {
            center: false,
            row: false,
            padding: "md",
            gap: "md",
            intent: "invisible",
            main: false,
            
        }
    }
)

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof ContainerVariants> {}

const Container: FC<ContainerProps> = ({ children, ...props }) => {
    return (
        <div {...props}>
            {React.Children.map(children, (child) => {
                if (React.isValidElement(child)) {
                    const flexProp = child.props.flex || 1;
                    return React.cloneElement(child, { flex: flexProp } as any);
                }
                return child;
            })}
        </div>
    );
}

export { Container };