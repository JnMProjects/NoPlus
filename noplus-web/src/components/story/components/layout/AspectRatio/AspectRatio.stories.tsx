import { Meta, StoryObj } from "@storybook/react";
import { AspectRatio } from "@layout/index";
import Image from "next/image";
import React from "react";

const meta: Meta = {
    title: "Components/Layout/AspectRatio",
    component: AspectRatio,
    argTypes: {
        children: {
            name: "Children",
            description: "The content to display inside the aspect ratio",
            control: React.ReactNode,
        },
        ratio: {
            name: "Ratio",
            description: "The aspect ratio of the container",
        },
        asChild: {
            name: "As Child",
            description: "Whether the aspect ratio should be applied to the child element",
            control: "boolean",
        },
    },

}


export default meta;
export const Default = () => {
    return (
        <AspectRatio ratio={16 / 9} style={{overflow: "hidden"}}>
            <Image
                src={"https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg"}
                alt="Cat"
                width={5814}
                height={3456}
            />
        </AspectRatio>
    );
}