import { Meta, StoryObj } from "@storybook/react";
import { Collapse, CollapseItem, CollapseTrigger, CollapseContent } from "./Collapse";

const meta: Meta<typeof Collapse> = {
    title: "Layout/Collapse",
    component: Collapse,
    argTypes: {
        type: {
            name: "Type",
            defaultValue: "single",
            description: "The type of collapse",
            control: {
                type: "select",
                options: ["single", "multiple"],
            },
        },
        collapsible: {
            name: "Collapsible",
            defaultValue: true,
            description: "Whether the collapse is collapsible",
            control: {
                type: "boolean",
            },
        },
        children: {
            name: "Children",
            defaultValue: <></>,
            description: "The children of the collapse",
            control: {
                type: "children",
            },
        },
    
    },
}

export default meta;
type Story = StoryObj<typeof Collapse>;

export const Default: Story = {
    args: {
        type: "single",
        collapsible: true,
        children: <>
            <CollapseItem value="item-1">
                <CollapseTrigger>Trigger</CollapseTrigger>
                <CollapseContent>Content</CollapseContent>
            </CollapseItem>
        </>
    },
};