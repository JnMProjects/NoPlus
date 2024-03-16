import { Meta, StoryObj } from "@storybook/react";
import { Button } from "@ui/Button";

const meta: Meta = {
    title: "Components/UI/Button",
    component: Button,
    tags: ["autodocs"],
    argTypes: {
        children: {
            name: "Children / Text",
            description: "The text to display inside the button",
            defaultValue: "Button",
            control: "text",
        },
        type: {
            name: "Type",
            description: "The variant of the button",
            control: {
                type: "select",
                options: ["primary", "secondary", "tertiary", "text", "icon"],
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
        outlined: {
            name: "Outlined",
            description: "Whether the button should be outlined",
            control: "boolean",
        },
        textexpand: {
            name: "Text Expand",
            description: "Hover animation for text buttons",
            defaultValue: false,
            control: "boolean",
        },
    }
}

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        children: "Button",
        type: "secondary",
        size: "md",
        rounded: true,
        disabled: false,
        outlined: false,
        textexpand: false,
    }
}

export const Primary: Story = {
    args: {
        ...Default.args,
        type: "primary",
        children: "Primary",
    }
}

export const Secondary: Story = {
    args: {
        ...Default.args,
        type: "secondary",
        children: "Secondary",
    }
}

export const Tertiary: Story = {
    args: {
        ...Default.args,
        type: "tertiary",
        children: "Tertiary",
    }
}

export const Soft: Story = {
    args: {
        ...Default.args,
        type: "soft",
        children: "Soft"
    }
}

export const OutlinedPrimary: Story = {
    args: {
        ...Primary.args,
        outlined: true,
    }
}

export const OutlinedSecondary: Story = {
    args: {
        ...Secondary.args,
        outlined: true,
    }
}

export const OutlinedTertiary: Story = {
    args: {
        ...Tertiary.args,
        outlined: true,
    }
}

export const OutlinedSoft: Story = {
    args: {
        ...Soft.args,
        outlined: true,
    }
}

export const Disabled: Story = {
    args: {
        ...Default.args,
        disabled: true,
        children: "Disabled",
    }
}

export const Loading: Story = {
    args: {
        ...Default.args,
        loading: "hash",
        children: "Loading",
        type: "soft",
    }
}