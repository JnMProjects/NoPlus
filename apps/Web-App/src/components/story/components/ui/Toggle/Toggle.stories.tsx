import React from "react";
import { Meta } from "@storybook/react";
import { Toggle, ToggleGroup, ToggleGroupItem } from "@ui/Toggle";

export default {
    title: "Components/UI/Toggle",
    component: Toggle,
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

export const MultiSelectGroup = () => (
        <ToggleGroup type="multiple">
            <ToggleGroupItem value="One">One</ToggleGroupItem>
            <ToggleGroupItem value="Two">Two</ToggleGroupItem>
            <ToggleGroupItem value="Three">Three</ToggleGroupItem>
        </ToggleGroup>
)

export const SingleSelectGroup = () => (
        <ToggleGroup type="single">
            <ToggleGroupItem value="One">One</ToggleGroupItem>
            <ToggleGroupItem value="Two">Two</ToggleGroupItem>
            <ToggleGroupItem value="Three">Three</ToggleGroupItem>
        </ToggleGroup>
)