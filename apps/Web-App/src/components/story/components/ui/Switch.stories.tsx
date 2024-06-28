import {Meta} from "@storybook/react"
import {Switch} from "@ui/Switch"

const meta: Meta = {
    title: "Components/UI/Switch",
    tags: ["autodocs"]
}

export default meta;

export const Default = () => {
    return (
        <>
            <Switch />
        </>
    )
}