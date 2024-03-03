import { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta: Meta = {
    title: "UI/Badge",
    component: Badge,
    argTypes: {
        variant: {
            name: "Variant",
            defaultValue: "primary",
            description: "The variant of the badge",
            control: {
                type: "select",
                options: ["primary", "oprimary", "secondary", "osecondary", "accent", "oaccent", "success", "osuccess", "danger", "odanger", "warning", "owarning"],
            },
        },
        size: {
            name: "Size",
            defaultValue: "sm",
            description: "The size of the badge",
            control: {
                type: "select",
                options: ["sm", "md", "lg"],
            },
        },
        children: {
            name: "Children / Text",
            description: "The text of the badge",
            defaultValue: "Badge",
            control: {
                type: "text",
            },
        },
        shadow: {
            name: "Shadow",
            defaultValue: "sm",
            description: "The shadow of the badge",
            control: {
                type: "select",
                options: ["sm", "md", "lg"],
            },
        }
    },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Small: Story = {
    args: {
        variant: "secondary",
        size: "sm",
        shadow: "sm",
        children: "Small / Default",
    },
};

export const Medium: Story = {
    args: {
        ...Small.args,
        size: "md",
        children: "Medium",
    },
};

export const Large: Story = {
    args: {
        ...Small.args,
        size: "lg",
        children: "Large",
    },
};

export const NoShadow: Story = {
    args: {
        ...Small.args,
        shadow: "none",
        children: "No Shadow",
    },
};

export const SmallShadow: Story = {
    args: {
        ...Small.args,
        shadow: "sm",
        children: "Small Shadow",
    },
};

export const MediumShadow: Story = {
    args: {
        ...Small.args,
        shadow: "md",
        children: "Medium Shadow",
    },
};

export const LargeShadow: Story = {
    args: {
        ...Small.args,
        shadow: "lg",
        children: "Large Shadow",
    },
};

export const Primary: Story = {
    args: {
        variant: "primary",
        size: "sm",
        shadow: "sm",
        children: "Primary",
    },
};

export const OPrimary: Story = {
    args: {
        ...Primary.args,
        variant: "oprimary",
    }
}

export const Secondary: Story = {
    args: {
        ...Primary.args,
        variant: "secondary",
        children: "Secondary / Default",
    }
}

export const OSecondary: Story = {
    args: {
        ...Secondary.args,
        variant: "osecondary",
    }
}

export const Accent: Story = {
    args: {
        ...Primary.args,
        variant: "accent",
        children: "Accent",
    }
}

export const OAccent: Story = {
    args: {
        ...Accent.args,
        variant: "oaccent",
    }
}

export const Success: Story = {
    args: {
        ...Primary.args,
        variant: "success",
        children: "Success",
    }
}

export const OSuccess: Story = {
    args: {
        ...Success.args,
        variant: "osuccess",
    }
}

export const Danger: Story = {
    args: {
        ...Primary.args,
        variant: "danger",
        children: "Danger",
    }
}

export const ODanger: Story = {
    args: {
        ...Danger.args,
        variant: "odanger",
    }
}

export const Warning: Story = {
    args: {
        ...Primary.args,
        variant: "warning",
        children: "Warning",
    }
}

export const OWarning: Story = {
    args: {
        ...Warning.args,
        variant: "owarning",
    }
}

export const Info: Story = {
    args: {
        ...Primary.args,
        variant: "info",
        children: "Info",
    }
}

export const OInfo: Story = {
    args: {
        ...Info.args,
        variant: "oinfo",
    }
}