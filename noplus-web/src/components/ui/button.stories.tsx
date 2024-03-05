import { execSync } from "child_process";
import { Button } from "./Button";
import { Meta, StoryObj } from "@storybook/react";
import "../../app/globals.css"; 

const meta: Meta<typeof Button> = {
    title: "UI/Button",
    tags: ['autodocs'],
    argTypes: {
        children: {
            name: "Children",
            defaultValue: "Default",
            description: "The content of the button",
            control: {
                type: "text",
            },
        },
        intent: {
            name: "Intent",
            defaultValue: "primary",
            description: "The variant of the button",
            control: {
                type: "select",
                options: ["primary", "secondary", "error", "success", "warning"],
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: "Primary",
        intent: "primary",
    },
};