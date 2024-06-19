import { Meta, StoryObj } from "@storybook/react";
import { Button } from "@ui/Button";
import * as Feather from "react-feather";
import * as FIcon from "@ui/Feather";

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
        type: {
            name: "Type",
            description: "The variant of the button",
            control: {
                type: "select",
                options: ["primary", "secondary", "tertiary", "text", "icon"],
            },
        },
        size: {
            name: "Size",
            description: "The size of the button",
            control: {
                type: "select",
                options: ["sm", "md", "lg"],
            },
        },
        rounded: {
            name: "Rounded",
            description: "Whether the button should be rounded",
            control: "boolean",
        },
        disabled: {
            name: "Disabled",
            description: "Whether the button should be disabled",
            control: "boolean",
        },
        outlined: {
            name: "Outlined",
            description: "Whether the button should be outlined",
            control: "boolean",
        },
        textexpand: {
            name: "Text Expand",
            description: "Hover animation for text buttons",
            defaultValue: false,
            control: "boolean",
        },
        shape: {
            name: "Shape",
            description: "The shape of the button",
            control: {
                type: "select",
                options: ["round", "square"],
            },
        },
        Prefix: {
            name: "Prefix",
            description: "The prefix icon of the button",
            control: {
                type: "select",
                options: Object.keys(Feather),
            },
        },
        Suffix: {
            name: "Suffix",
            description: "The suffix icon of the button",
            control: {
                type: "select",
                options: Object.keys(Feather),
            },
        },
        Icon: {
            name: "Icon",
            description: "The icon of the button",
            control: {
                type: "select",
                options: Object.keys(Feather),
            },
        },
        Loading: {
            name: "Loading",
            description: "The loading state of the button",
            control: {
                type: "select",
                options: Object.keys(FIcon.Icon),
            },
        },
    }
}

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
    args: {
        children: "Button",
        type: "secondary",
        size: "md",
        rounded: true,
        disabled: false,
        outlined: false,
        textexpand: false,
    }
}

export const Primary: Story = {
    args: {
        ...Default.args,
        type: "primary",
        children: "Primary",
    }
}

export const Secondary: Story = {
    args: {
        ...Default.args,
        type: "secondary",
        children: "Secondary",
    }
}

export const Tertiary: Story = {
    args: {
        ...Default.args,
        type: "tertiary",
        children: "Tertiary",
    }
}

export const Soft: Story = {
    args: {
        ...Default.args,
        type: "soft",
        children: "Soft"
    }
}

export const Text: Story = {
    args: {
        ...Default.args,
        type: "text",
        children: "Text",
    }
}

export const OutlinedPrimary: Story = {
    args: {
        ...Primary.args,
        outlined: true,
    }
}

export const OutlinedSecondary: Story = {
    args: {
        ...Secondary.args,
        outlined: true,
    }
}

export const OutlinedTertiary: Story = {
    args: {
        ...Tertiary.args,
        outlined: true,
    }
}

export const OutlinedSoft: Story = {
    args: {
        ...Soft.args,
        outlined: true,
    }
}

export const Disabled: Story = {
    args: {
        ...Default.args,
        disabled: true,
        children: "Disabled",
    }
}

export const Loading: Story = {
    args: {
        ...Default.args,
        loading: "hash",
        children: "Loading",
    }
}

export const JustLoading: Story = {
    args: {
        ...Default.args,
        loading: "hash",
        children: "",
        shape: "round",
    }
}

export const Icon: Story = {
    args: {
        ...Default.args,
        icon: "GitHub",
        children: "",
    }
}