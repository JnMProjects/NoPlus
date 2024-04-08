import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "@ui/index";
import React from "react";

const meta: Meta = {
    title: "Components/UI/Checkbox",
    component: Checkbox,
    argTypes: {
        checked: {
            name: "Checked",
            description: "Whether the checkbox is checked",
            control: "boolean",
        },
        disabled: {
            name: "Disabled",
            description: "Whether the checkbox is disabled",
            control: "boolean",
        },
    },
};

export default meta;

export const Default = () => {
    return (
        <>
            <Checkbox>Default Checkbox with Text</Checkbox>
        </>
    );
}

export const Unchecked = () => {
    const [checked, setChecked] = React.useState(false);
    return (
        <Checkbox checked={checked} onCheckedChange={() => setChecked(!checked)}>
            {checked ? "Checked Checkbox with Text" : "Unchecked Checkbox with Text"}
        </Checkbox>
    );
}

import { Button } from "@ui/index";

export const Intermediate = () => {
    const [checked, setChecked] = React.useState<"true" | "false" | "intermediate">("intermediate");
    let hardCheck = checked === "false" ? false : true;
    return (
        <>
            <Checkbox
                checked={hardCheck}
                intermediate={checked === "intermediate"}
                onCheckedChange={() => {
                    if (checked === "true") {
                        setChecked("false");
                    } else if (checked === "false") {
                        setChecked("true");
                    } else if (checked === "intermediate") {
                        setChecked("false");
                    }
                }}
            >Intermediate</Checkbox>
            <Button onClick={() => setChecked("intermediate")} type="text">Reset Intermediate</Button>
        </>
    );
}

export const Checked = () => {
    const [checked, setChecked] = React.useState(true);
    return (
        <Checkbox checked={checked} onCheckedChange={() => setChecked(!checked)}>
            {checked ? "Checked Checkbox with Text" : "Unchecked Checkbox with Text"}
        </Checkbox>
    );
}

export const Disabled = () => {
    const [checked, setChecked] = React.useState<"true" | "intermediate" | "false">("true");
    let hardCheck = checked === "true";
    return (
        <>
            <Checkbox checked={checked === "true"} intermediate={hardCheck} disabled onCheckedChange={() => {
                if (checked === "true") {
                    setChecked("false");
                } else if (checked === "false") {
                    setChecked("true");
                } else if (checked === "intermediate") {
                    setChecked("false");
                }
                }}
            >
                {checked === "true" && "Checked Checkbox with Text"}
                {checked === "intermediate" && "Intermediate Checkbox with Text"}
                {checked === "false" && "Unchecked Checkbox with Text"}
            </Checkbox>
            <Button onClick={() => setChecked("true")} type="text">Set to True</Button>
            <Button onClick={() => setChecked("intermediate")} type="text">Set to Intermediate</Button>
            <Button onClick={() => setChecked("false")} type="text">Set to False</Button>
        </>
    );
}

export const PlayAround = () => {
    const [checked, setChecked] = React.useState<"true" | "intermediate" | "false">("true");
    let hardCheck = checked === "true";
    return (
        <>
            <Checkbox checked={checked === "true"} intermediate={hardCheck} onCheckedChange={() => {
                if (checked === "true") {
                    setChecked("false");
                } else if (checked === "false") {
                    setChecked("true");
                } else if (checked === "intermediate") {
                    setChecked("false");
                }
                }}
            >
                {checked === "true" && "Checked Checkbox with Text"}
                {checked === "intermediate" && "Intermediate Checkbox with Text"}
                {checked === "false" && "Unchecked Checkbox with Text"}
            </Checkbox>
            <Button onClick={() => setChecked("true")} type="text">Set to True</Button>
            <Button onClick={() => setChecked("intermediate")} type="text">Set to Intermediate</Button>
            <Button onClick={() => setChecked("false")} type="text">Set to False</Button>
        </>
    );
}