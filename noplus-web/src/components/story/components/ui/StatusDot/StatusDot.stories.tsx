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
            defaultValue: true,
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
    }
}

export default meta;
type Story = StoryObj<typeof StatusDot>;

export const Running: Story = {
    args: {
        status: "running",
        label: false,
        tip: "Running",
    }
}

export const Warning: Story = {
    args: {
        status: "warning",
        label: false,
        tip: "Warning",
    }
}

export const Info: Story = {
    args: {
        status: "info",
        label: false,
        tip: "Info",
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
    }
}

export const Stopped: Story = {
    args: {
        status: "stopped",
        label: false,
        tip: "Stopped",
    }
}

