import * as Feather from "react-feather";
import {
    Item,
} from "@layout/."

import { Meta, StoryObj } from "@storybook/react"

const meta: Meta<typeof Item> = {
    title: "Components/Layout/Item",
}

export default meta;
type Story = StoryObj<typeof Item>;

export const Default = () => {
    return (
        <Item title="This is Just a Example" pre={
            <Feather.GitBranch />
        }>
            This is the description
        </Item>
    )
}

export const Error = () => {
    return (
        <Item errored title="You had trouble Pushing your Commit" pre={<Feather.GitCommit />}>
            *Sad*
        </Item>
    )
}