import { Meta, StoryObj } from "@storybook/react";
import { Popup } from "@layout/.";

const meta: Meta = {
    title: "Components/Layout/Popup",
    component: Popup,
    tags: ['autodocs'],
    argTypes: {
        trigger: {
            name: "Trigger",
            defaultValue: "Open Popup",
            description: "The trigger for the popup",
            control: {
                type: "text",
            },
        },
        triggervariant: {
            name: "Trigger Variant",
            defaultValue: "tertiary",
            description: "The variant of the trigger",
            control: {
                type: "select",
                options: ["primary", "secondary", "tertiary", "soft", "text"],
            },
        },
        prefix: {
            name: "Prefix",
            defaultValue: "Code",
            description: "The prefix for the trigger",
            control: {
                type: "text",
            },
        },
        align: {
            name: "Align",
            defaultValue: "center",
            description: "The alignment of the popup",
            control: {
                type: "select",
                options: ["center", "start", "end"],
            },
        },
        sideOffset: {
            name: "Side Offset",
            defaultValue: 4,
            description: "The side offset of the popup",
            control: {
                type: "number",
            },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Popup>;

export const Default: Story = {
    args: {
        trigger: "Open Popup",
        triggervariant: "tertiary",
        prefix: "Code",
        align: "center",
        sideOffset: 4,
        children: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam",
    },
};