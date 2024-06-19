import { Meta, StoryObj } from "@storybook/react";
import { Icon } from "@ui/Feather";

const meta: Meta = {
    title: "Components/UI/Feather",
    component: Icon,
    tags: ['autodocs'],
    argTypes: {
        icon: {
            name: "Icon",
            defaultValue: "Activity",
            description: "The icon to display",
            control: {
                type: "select",
                options: Object.keys(Icon),
            },
        },
        size: {
            name: "Size",
            defaultValue: "sm",
            description: "The size of the icon",
            control: {
                type: "select",
                options: ["sm", "md", "lg"],
            },
        },
        type: {
            name: "Type",
            defaultValue: "secondary",
            description: "The type of the icon",
            control: {
                type: "select",
                options: ["primary", "secondary", "accent", "success", "danger", "warning", "info"],
            },
        },
        color: {
            name: "Color",
            defaultValue: "#CDAE23",
            description: "The color of the icon",
            control: {
                type: "color",
            },
        },
        opacity: {
            name: "Opacity",
            defaultValue: false,
            description: "If true, the icon will have a lower opacity",
            control: {
                type: "boolean",
            },
        },
        shadow: {
            name: "Shadow",
            defaultValue: false,
            description: "The shadow of the icon",
            control: {
                type: "select",
                options: ["sm", "md", "lg"],
            },
        },
        badged: {
            name: "Badged",
            defaultValue: false,
            description: "If true, the icon will be displayd like A Badge",
            control: {
                type: "boolean",
            },
        },
    },
}

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
    args: {
        icon: "Code",
        size: "sm",
        color: "#CDAE23",
        opacity: false,
        shadow: "sm",
        badged: false,
    }
};

export const Badged: Story = {
    args: {
        ...Default.args,
        badged: true,
    }
};