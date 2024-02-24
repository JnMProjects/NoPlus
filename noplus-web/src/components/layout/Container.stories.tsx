import type { Meta, StoryObj } from "@storybook/react";
import { Container } from "./Container";
import { Button } from "../ui";
import * as Feather from "react-feather";

const meta: Meta<typeof Container> = {
    title: "Layout/Container",
    component: Container,
    tags: ['autodocs'],
    argTypes: {
        children: {
            name: "Children",
            defaultValue: <Button>Example</Button>,
            description: "In this example, text and icons",
            control: {
                type: "children",
            },
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
            <Feather.ChevronUp/>
            <Feather.ArrowUp/>
            <Feather.MoreVertical/>
            <Feather.ArrowDown/>
            <Feather.ChevronDown/>
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

export const DefaultTest = () => {
    return (
        <Container padding='md' gap='md' intent='primary' main flex roundsize='md'>
            <Feather.ChevronUp/>
            <Feather.ArrowUp/>
            <Feather.MoreVertical/>
            <Feather.ArrowDown/>
            <Feather.ChevronDown/>
        </Container>
    )

}


export const Row = () => {
    return (
        <Container row>
            <Feather.ChevronLeft/>
            <Feather.ArrowLeft/>
            <Feather.Code/>
            <Feather.ArrowRight/>
            <Feather.ChevronRight/>
        </Container>
    )
}

export const Flex: Story = {
    args: {
        children: <>
            <Button flex='1'>Flex</Button>
            <Button flex='2'>Flex= 2</Button>
            <Button flex='3'>Flex= 3</Button>
            <Button flex='10px'>10px</Button>
        </>,
        flex: true,
    }
} 