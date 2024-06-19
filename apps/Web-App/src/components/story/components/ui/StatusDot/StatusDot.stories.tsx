import { StatusDot } from "@ui/index";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof StatusDot> = {
    title: "Components/UI/StatusDot",
    component: StatusDot,
    argTypes: {
        status: {
            name: "Status",
            defaultValue: "running",
            description: "The status of the dot",
            control: {
                type: "select",
                options: ["running", "warning", "info", "error", "cancelled", "stopped"],
            },
        },
        label: {
            name: "Label",
            defaultValue: false,
            description: "Whether to show the label",
            control: {
                type: "boolean",
            },
        },
        tip: {
            name: "Tip",
            description: "The ToolTip to Show or the Label if shown",
            control: {
                type: "text",
            },
        },
        size: {
            name: "Size",
            description: "The size of the dot",
            defaultValue: "md",
            control: {
                type: "select",
                options: ["sm", "md", "lg"],
            },
        }
    }
}

export default meta;
type Story = StoryObj<typeof StatusDot>;

export const Running: Story = {
    args: {
        status: "running",
        label: false,
        tip: "Running",
        size: "md",
    }
}

export const Warning: Story = {
    args: {
        status: "warning",
        label: false,
        tip: "Warning",
        size: "md"
    }
}

export const Info: Story = {
    args: {
        status: "info",
        label: false,
        tip: "Info",
        size: "md"
    }
}

export const Error: Story = {
    args: {
        status: "error",
        label: false,
        tip: "Error",
    }
}

export const Cancelled: Story = {
    args: {
        status: "cancelled",
        label: false,
        tip: "Cancelled",
        size: "md"
    }
}

export const Stopped: Story = {
    args: {
        status: "stopped",
        label: false,
        tip: "Stopped",
        size: "md"
    }
}

export const WithLabel: Story = {
    args: {
        status: "running",
        label: true,
        tip: "Running",
        size: "md"
    }
}

export const WithCustomTip: Story = {
    args: {
        status: "running",
        label: false,
        tip: "Custom Tip",
        size: "md"
    }
}