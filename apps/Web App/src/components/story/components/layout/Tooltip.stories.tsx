import { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "@layout/index";

const meta: Meta = {
    title: "Components/Layout/Tooltip",
    component: Tooltip,
    tags: ["autodocs"],
    argTypes: {
        children: {
            name: "Children",
            description: "The Any Underlying Component",
            control: "text",
            defaultValue: "Hover Me",
        },
        tips: {
            name: "Tips",
            description: "The tips of the tooltip",
            control: "text",
            defaultValue: "Tip: This is a tooltip!",
        },
        side: {
            name: "Side",
            description: "On which side the tooltip should appear in relation to the Children",
            control: "select",
            options: ["top", "right", "bottom", "left"],
            defaultValue: "top",
        },
        align: {
            name: "Align",
            description: "How the tooltip should align with the Children",
            control: "select",
            options: ["start", "center", "end"],
            defaultValue: "center",
        }
    },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
    args: {
        children: "Hover Me",
        tips: "Tip: This is a tooltip!",
        side: "top",
        align: "center",
    },
};