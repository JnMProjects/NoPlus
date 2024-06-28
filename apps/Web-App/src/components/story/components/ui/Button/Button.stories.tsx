import { Meta, StoryObj } from "@storybook/react";
import { Button, ShimmerborderButton } from "@ui/Button";
import * as Feather from "react-feather"

const meta: Meta = {
    title: "Components/UI/Button",
    component: Button,
    argTypes: {
        children: {
            name: "Children / Text",
            description: "The text to display inside the button",
            defaultValue: "Button",
            control: "text",
        },
        variant: {
            name: "Variant",
            description: "The variant of the button",
            control: {
                type: "select",
                options: ["default", "destructive", "outline", "ghost", "link", "expandIcon", "ringHover", "shine", "gooeyLeft", "gooeyRight", "linkHover1", "linkHover2"],
            },
        },
        size: {
            name: "Size",
            description: "The size of the button",
            control: {
                type: "select",
                options: ["sm", "lg", "icon"],
            },
        },
        icon: {
            name: "Icon",
            description: "The Icon To Display",
            control: {
                type: "select",
                options: Object.keys(Feather),
            }
        },
        iconPlacement: {
            name: "Icon Placement",
            description: "The Placement of the icon",
            control: {
                type: "select",
                options: ["left", "right"]
            }
        }
    }
}

export default meta;
type Story = StoryObj<typeof Button>;

export const Default = () => {
    return <Button>Button</Button>
}

export const Destructive = () => {
    return <Button variant="destructive">Button</Button>
}

export const Outline = () => {
    return <Button variant="outline">Button</Button>
}

export const Ghost = () => {
    return <Button variant="ghost">Button</Button>
}

export const Link = () => {
    return <Button variant="link">Button</Button>
}

export const ExpandIconLeft = () => {
    return <Button variant="expandIcon" iconPlacement="left" Icon="ArrowLeft" >Button</Button>
}

export const ExpandIconRight = () => {
    return <Button variant="expandIcon" iconPlacement="right" Icon="ArrowRight" >Button</Button>
}

export const RingHover = () => {
    return <Button variant="ringHover">Button</Button>
}

export const Shine = () => {
    return <Button variant="shine">Button</Button>
}

export const GooeyLeft = () => {
    return <Button variant="gooeyLeft">Button</Button>
}

export const GooeyRight = () => {
    return <Button variant="gooeyRight">Button</Button>
}

export const LinkHoverEffect1 = () => {
    return <Button variant="linkHover1">Not Working</Button>
}

export const LinkHoverEffect2 = () => {
    return <Button variant="linkHover2">Not Working</Button>
}

export const ShimmerBorderButton = () => {
    return <ShimmerborderButton>Button</ShimmerborderButton>
}