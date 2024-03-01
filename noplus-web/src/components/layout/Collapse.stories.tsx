import { Meta, StoryObj } from "@storybook/react";
import { CollapseGroup, Collapse } from "./Collapse";

const meta: Meta<typeof Collapse> = {
    title: "Layout/Collapse",
    component: Collapse,
    argTypes: {
        title: {
            name: "Title",
            defaultValue: "Title",
            description: "The title of the collapse",
            control: {
                type: "text",
            },
        },
        trigger: {
            name: "Trigger",
            defaultValue: "Trigger",
            description: "The trigger of the collapse",
            control: {
                type: "text",
            },
        },
        children: {
            name: "Children",
            defaultValue: "Children",
            description: "The children of the collapse",
            control: {
                type: "children",
            },
        },
    },
};

export default meta;

export const Default = () => {
    return (
        <CollapseGroup>
            <Collapse title="Title" trigger="Trigger">
                Children
            </Collapse>
        </CollapseGroup>
    );
}