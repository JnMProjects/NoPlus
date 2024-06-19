import { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarGroup } from "@ui/Avatar";

const meta: Meta = {
    title: "Components/UI/Avatar",
    component: Avatar,
    argTypes: {
        size: {
            name: "Size",
            description: "Size of the avatar in pixels",
            defaultValue: 100,
            control: {
                type: "number",
            },
        },
        username: {
            name: "Username",
            description: "Username // Github",
            defaultValue: "octocat",
            control: {
                type: "text",
            },
        },
        placeholder: {
            name: "Placeholder",
            defaultValue: false,
            description: "Show placeholder instead of fetching Avatar",
            control: {
                type: "boolean",
            },
        },
    },
}

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
    args: {
        size: 120,
        username: "octocat",
        placeholder: false,
    },
};

export const Placeholder: Story = {
    args: {
        ...Default.args,
        placeholder: true,
        username: "",
    }
}

export const Group = () => {
    return (
        <AvatarGroup users={["a", "octocat", "derjacklive", "mutebefehl"]} />
    )
}

export const GroupLimited = () => {
    return (
        <AvatarGroup users={["mutebefehl", "octocat", "derjacklive", "o"]} limit={3} />
    )
}