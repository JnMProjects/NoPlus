import * as Feather from "react-feather";
import {
    Item,
    ItemTitle,
    ItemDescription,
} from "./Item"

import { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Item> = {
    title: "Layout/Item",
}

export default meta;
type Story = StoryObj<typeof Item>;

export const Default = () => {
    return (
        <Item>
            <Feather.GitBranch />
            <ItemTitle>Just an Example Text</ItemTitle>
            <ItemDescription>
                This is the description
            </ItemDescription>
        </Item>
    )
}

export const Error = () => {
    return (
        <Item errored>
            <Feather.GitCommit />
            <ItemTitle>You had trouble Pushing your Commit</ItemTitle>
            <ItemDescription>
                *Sad*
            </ItemDescription>
        </Item>
    )
}