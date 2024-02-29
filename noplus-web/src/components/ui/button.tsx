import { cva, VariantProps } from "cva";
import { ButtonHTMLAttributes, FC } from "react";

const Buttonvariants = cva(
    "flex items-center justify-center font-medium px-4 py-2 rounded",
    {
        variants: {
            intent: {
                primary: " bg-l-prim dark:bg-d-prim text-l-txt dark:text-d-txt",
                secondary: "",
                error: "",
                success: "",
                warning: "",
            },

            outline: {
                true: " outline-2",
            },
            padding: {
                sm: "p-2",
                md: "p-4",
                lg: "p-8",
            
            },
        },
        compoundVariants: [
            {
                outline: true,
                intent: "primary",
                className: " ",
            },
            {
                outline: true,
                intent: "secondary",
                className: " bg-l-sec/40 dark:bg-d-sec/40 ",
            },
        ],
        defaultVariants: {
            intent: "primary",
            padding: "md",
        },
    }
)

interface btnextraprops {
    flex?: boolean | string | number;
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof Buttonvariants>, btnextraprops {}

const Button: FC<ButtonProps> = ({ ...props }) => {
    return (
        <button {...props}>{props.children}</button>
    );
}

export { Button };