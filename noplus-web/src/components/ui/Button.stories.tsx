import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

import { Feather } from 'react-feather';

const meta: Meta = {
    title: "UI/Button",
    component: Button,
    argTypes: {
        variant: {
            control: {
                type: "select",
                options: ["primary", "secondary", "tertiary", "oprimary", "osecondary", "otertiary"]
            }
        },
        size: {
            control: {
                type: "select",
                options: ["sm", "md", "lg"]
            }
        },
        rounded: {
            control: {
                type: "boolean"
            }
        },
        disabled: {
            control: {
                type: "boolean"
            }
        }
    }
}


export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        children: "Button",
        rounded: true,
        variant: "primary",
    }
}