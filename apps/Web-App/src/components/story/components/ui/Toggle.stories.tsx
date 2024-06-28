import React from "react";
import { Meta } from "@storybook/react";
import { Toggle } from "@ui/Toggle";

export default {
    title: "Components/UI/Toggle",
    component: Toggle,
    tags: ["autodocs"],
    controls: { hideNoControlsWarning: true },
} as Meta;

export const Default = () => (
    <Toggle variant="default" size="default" >Bold</Toggle>
);

export const Outline = () => (
    <Toggle variant="outline" size="default" >Italic</Toggle>
);

export const Small = () => (
    <Toggle variant="default" size="sm" >Underlined</Toggle>
);

export const Large = () => (
    <Toggle variant="default" size="lg" >Strikethrough</Toggle>
);