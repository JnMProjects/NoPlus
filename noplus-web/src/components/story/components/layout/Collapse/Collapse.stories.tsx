import { Meta, StoryObj } from "@storybook/react";
import { Collapse, CollapseGroup } from "@layout/Collapse";

const meta: Meta<typeof Collapse> = {
    title: "Components/Layout/Collapse",
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

export const SingleCollapse = () => {
    return (
        <CollapseGroup>
            <Collapse title="Title" trigger="Trigger">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </Collapse>
        </CollapseGroup>
    );
}

export const MultipleCollapses = () => {
    return (
        <CollapseGroup>
            <Collapse title="Title 1" trigger="Trigger 1">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </Collapse>
            <Collapse title="Title 2" trigger="Trigger 2">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </Collapse>
            <Collapse title="Title 3" trigger="Im Default Expanded" defaultExpanded >
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </Collapse>
        </CollapseGroup>
    );
}