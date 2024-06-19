import { Meta, StoryObj } from "@storybook/react";
import { Badge } from "@ui/Badge";
import { Feather } from "react-feather";

const meta: Meta = {
    title: "Components/UI/Badge",
    component: Badge,
    tags: ["autodocs"],
    argTypes: {
        type: {
            name: "Type",
            description: "Set the type of the badge",
            defaultValue: "secondary",
            control: {
                type: "select",
                options: ["primary", "secondary", "accent", "success", "danger", "warning", "info"],
            },
        },
        opacity: {
            name: "Opacity",
            description: "Set the badge to be opaque",
            defaultValue: false,
            control: {
                type: "boolean",
            },
        },
        size: {
            name: "Size",
            description: "Set the size of the badge",
            defaultValue: "sm",
            control: {
                type: "select",
                options: ["sm", "md", "lg"],
            },
        },
        shadow: {
            name: "Shadow",
            description: "Set the shadow of the badge",
            defaultValue: "sm",
            control: {
                type: "select",
                options: ["sm", "md", "lg", "none"],
            },
        },
        prefix: {
            name: "Prefix",
            description: "Set the prefix icon of the badge",
            control: {
                type: "select",
                options: Object.keys(Feather),
            },
        },
        suffix: {
            name: "Suffix",
            description: "Set the suffix icon of the badge",
            control: {
                type: "select",
                options: Object.keys(Feather),
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
    args: {
        type: "secondary",
        children: "Default Badge",
        size: "md",
        opacity: false,
        shadow: "md",
    },
};

export const Medium: Story = {
    args: {
        ...Default.args,
        size: "md",
        children: "Medium Sized Badge With Medium Shadow",
        shadow: "md",
    },
};

export const Large: Story = {
    args: {
        ...Default.args,
        size: "lg",
        children: "Large Sized Badge With Large Shadow",
        shadow: "lg",
    },
};

export const InfoPrefix: Story = {
    args: {
        ...Default.args,
        prefix: "Info",
        children: "Info Badge With Info Prefix",
    },
};

export const DangerSuffix: Story = {
    args: {
        ...Default.args,
        type: "danger",
        suffix: "XCircle",
        children: "Danger Badge With Danger Suffix",
    },

};

export const Primary: Story = {
    args: {
        ...Default.args,
        type: "primary",
        children: "Primary Badge",
    },
};

export const Secondary: Story = {
    args: {
        ...Default.args,
        type: "secondary",
        children: "Secondary Badge",
    },
};

export const Accent: Story = {
    args: {
        ...Default.args,
        type: "accent",
        children: "Accent Badge",
    },
};

export const Success: Story = {
    args: {
        ...Default.args,
        type: "success",
        children: "Success Badge",
    },
};

export const Danger: Story = {
    args: {
        ...Default.args,
        type: "danger",
        children: "Danger Badge",
    },
};

export const Warning: Story = {
    args: {
        ...Default.args,
        type: "warning",
        children: "Warning Badge",
    },
};

export const Info: Story = {
    args: {
        ...Default.args,
        type: "info",
        children: "Info Badge",
    },
};
