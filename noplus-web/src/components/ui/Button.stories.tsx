import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta = {
    title: "UI/Button",
    component: Button,
    argTypes: {
        children: {
            name: "Children / Text",
            description: "The text to display inside the button",
            defaultValue: "Button",
            control: "text",
        },
        variant: {
            name: "Variant",
            description: "The variant of the button",
            control: {
                type: "select",
                options: ["primary", "secondary", "tertiary"],
            },
        },
        size: {
            name: "Size",
            description: "The size of the button",
            control: {
                type: "select",
                options: ["sm", "md", "lg"],
            },
        },
        rounded: {
            name: "Rounded",
            description: "Whether the button should be rounded",
            control: "boolean",
        },
        disabled: {
            name: "Disabled",
            description: "Whether the button should be disabled",
            control: "boolean",
        },
    }
}

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        children: "Button",
        variant: "primary",
        size: "md",
        rounded: true,
        disabled: false,
    }
}

export const Primary: Story = {
    args: {
        ...Default.args,
        variant: "primary",
    }
}

export const Secondary: Story = {
    args: {
        ...Default.args,
        variant: "secondary",
    }
}