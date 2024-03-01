import Loader from "./Loader";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Loader> = {
    title: "UI/Loader",
    component: Loader,
    argTypes: {
        type: {
            name: "Type",
            defaultValue: "clip",
            description: "The type of loader",
            control: {
                type: "select",
                options: ["bar", "beat", "bounce", "circle", "climbingbox", "clip", "clock", "dot", "fade", "grid", "hash", "moon", "pacman", "ppg", "puff", "pulse", "ring", "rise", "rotate", "scale", "skew", "square", "sync"],
            },
        },
        size: {
            name: "Size",
            defaultValue: 35,
            description: "The size of the loader",
            control: {
                type: "number",
            },
        
        },
        color: {
            name: "Color",
            defaultValue: "#CDAE23",
            description: "The color of the loader",
            control: {
                type: "color",
            },
        },
        active: {
            name: "Active",
            defaultValue: true,
            description: "Whether the loader is active",
            control: {
                type: "boolean",
            },
        },
        width: {
            name: "Width",
            description: "The width of the loader // Only for some types",
            control: {
                type: "number",
            },
        },
        height: {
            name: "Height",
            description: "The height of the loader // Only for some types",
            control: {
                type: "number",
            },
        },
        margin: {
            name: "Margin",
            description: "The margin of the loader // Only for some types",
            control: {
                type: "number",
            },
        
        },
        radius: {
            name: "Radius",
            description: "The radius of the loader // Only for some types",
            control: {
                type: "number",
            },
        },
    },
};
export default meta;
type Story = StoryObj<typeof Loader>;

export const Default: Story = {
    args: {
        type: "clip",
        size: 35,
        color: "#CDAE23",
        active: true,
    },

};

export const Bar: Story = {
    args: {
        type: "bar",
        color: "#CDAE23",
        active: true,
        height: 4,
        width: 100,
    },
};

export const Beat: Story = {
    args: {
        type: "beat",
        color: "#CDAE23",
        active: true,
        size: 15,
        margin: 2,
    },
};

export const Bounce: Story = {
    args: {
        type: "bounce",
        color: "#CDAE23",
        active: true,
        size: 60,
    },
};

export const Circle: Story = {
    args: {
        type: "circle",
        color: "#CDAE23",
        active: true,
        size: 50,
    },
};

export const ClimbingBox: Story = {
    args: {
        type: "climbingbox",
        color: "#CDAE23",
        active: true,
        size: 15,
    },

};

export const Clip: Story = {
    args: {
        ...Default.args,
    },
};

export const Clock: Story = {
    args: {
        type: "clock",
        color: "#CDAE23",
        active: true,
        size: 50,
    },
};

export const Dot: Story = {
    args: {
        type: "dot",
        color: "#CDAE23",
        active: true,
        size: 60,
    },
};

export const Fade: Story = {
    args: {
        type: "fade",
        color: "#CDAE23",
        active: true,
        height: 15,
        width: 5,
        radius: 2,
        margin: 2,
    },
};

export const Grid: Story = {
    args: {
        type: "grid",
        color: "#CDAE23",
        active: true,
        size: 15,
        margin: 2,
    },
};

export const Hash: Story = {
    args: {
        type: "hash",
        color: "#CDAE23",
        active: true,
        size: 50,
    },
};

export const Moon: Story = {
    args: {
        type: "moon",
        color: "#CDAE23",
        active: true,
        size: 60,
    },
};

export const Pacman: Story = {
    args: {
        type: "pacman",
        color: "#CDAE23",
        active: true,
        size: 25,
        margin: 2,
    },
};

export const Propagate: Story = {
    args: {
        type: "ppg",
        color: "#CDAE23",
        active: true,
        size: 15,
    },
};

export const Puff: Story = {
    args: {
        type: "puff",
        color: "#CDAE23",
        active: true,
        size: 60,
    },

};

export const Pulse: Story = {
    args: {
        type: "pulse",
        color: "#CDAE23",
        active: true,
        size: 15,
        margin: 2,
    },
};

export const Ring: Story = {
    args: {
        type: "ring",
        color: "#CDAE23",
        active: true,
        size: 60,
    },
};

export const Rise: Story = {
    args: {
        type: "rise",
        color: "#CDAE23",
        active: true,
        size: 15,
        margin: 2,
    },
};

export const Rotate: Story = {
    args: {
        type: "rotate",
        color: "#CDAE23",
        active: true,
        size: 15,
        margin: 2,
    },
};

export const Scale: Story = {
    args: {
        type: "scale",
        color: "#CDAE23",
        active: true,
        height: 35,
        width: 4,
        radius: 2,
        margin: 2,
    },
};

export const Skew: Story = {
    args: {
        type: "skew",
        color: "#CDAE23",
        active: true,
        size: 20,
    },
};

export const Square: Story = {
    args: {
        type: "square",
        color: "#CDAE23",
        active: true,
        size: 50,
    },
};

export const Sync: Story = {
    args: {
        type: "sync",
        color: "#CDAE23",
        active: true,
        size: 15,
        margin: 2,
    },
};



