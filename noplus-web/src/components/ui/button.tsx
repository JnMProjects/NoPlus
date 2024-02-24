import { cva, VariantProps } from "cva";
import { ButtonHTMLAttributes, FC } from "react";

const Buttonvariants = cva(
    "flex items-center justify-center font-medium px-4 py-2 rounded",
    {
        variants: {
            variant: {
                primary: "",
                secondary: "",
                error: "",
                
            },
            error: {
                true: "",
            },

            outline: {
                true: "",
            },
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