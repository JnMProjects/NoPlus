import type { Meta, StoryObj } from "@storybook/react";
import { Container } from "@layout/Container";
import * as Feather from "react-feather";

const meta: Meta<typeof Container> = {
    title: "Components/Layout/Container",
    component: Container,
    tags: ['autodocs'],
    argTypes: {
        children: {
            name: "Children",
            defaultValue: <>
                <h1>1</h1>
            </>,
            description: "In this example, text and icons",
        },
        intent: {
            name: "Intent",
            defaultValue: "invisible",
            description: "The intent of the container",
            control: {
                type: "select",
                options: ["invisible", "primary", "secondary", "success", "warning", "error"],
            },
        },
        shadow: {
            name: "Shadow",
            defaultValue: false,
            description: "If true, the container will have a shadow",
            control: {
                type: "boolean",
            },
        },
        row: {
            name: "Row",
            defaultValue: false,
            description: "If true, the children will be displayed in a row",
            control: {
                type: "boolean",
            },
        },
        main: {
            name: "Main",
            defaultValue: false,
            description: "If true, the container will take up the whole screen",
            control: {
                type: "boolean",
            },
        
        },
        gap: {
            name: "Gap",
            defaultValue: "md",
            description: "The gap between the children",
            control: {
                type: "select",
                options: ["xs", "sm", "md", "lg", "xl"],
            },
        },
        padding: {
            name: "Padding",
            defaultValue: "md",
            description: "The padding of the container",
            control: {
                type: "select",
                options: ["sm", "md", "lg"],
            },
        },
        center: {
            name: "Center",
            defaultValue: false,
            description: "If true, the children will be centered",
            control: {
                type: "boolean",
            },
        },
        flex: {
            name: "Flex",
            description: "Displays Children in a flex container. Controlable by children with the flex prop",
            defaultValue: false,
            control: {
                type: "boolean",
            },
        },
        roundsize: {
            name: "Round Size",
            defaultValue: "none",
            description: "The round size of the container",
            control: {
                type: "select",
                options: ["none","sm", "md", "lg", "xl"],
            },
        
        },
    },
}

export default meta;
type Story = StoryObj<typeof Container>;


export const Default: Story = {
    args: {
        children: <>
            <Container>
                <Feather.ChevronUp/>
            </Container>
            <Container>
                <Feather.ArrowUp/>
            </Container>
            <Container>
                <Feather.MoreVertical/>
            </Container>
            <Container>
                <Feather.ArrowDown/>
            </Container>
            <Container>
                <Feather.ChevronDown/>
            </Container>
        </>,
        row: false,
        center: false,
        padding: "md",
        gap: "md",
        shadow: false,
        intent: "invisible",
        main: false,
        flex: false,
        roundsize: "none",
    },
};

export const Row: Story = {
    args: {
        ...Default.args,
        row: true,
        children: <>
            <Feather.ChevronLeft/>
            <Feather.ArrowLeft/>
            <Feather.Code/>
            <Feather.ArrowRight/>
            <Feather.ChevronRight/>
        </>,
    }
};

export const Flex: Story = {
    args: {
        ...Default.args,
        children: <></>,
        flex: true,
    }
} 

export const Main: Story = {
    args: {
        ...Default.args,
        main: true,
    }
}