import Loader from "./Loader";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Loader> = {
    title: "UI/Loader",
    component: Loader,
    tags: ['autodocs'],
    argTypes: {
        type: {
            name: "Type",
            defaultValue: "clip",
            description: "The type of loader",
            control: {
                type: "select",
                options: ["bar", "beat", "bounce", "circle",  "clip", "clock", "dot", "fade", "grid", "hash", "moon", "pacman", "ppg", "pulse", "ring", "rotate", "scale", "square", "sync"],
            },
        },
    },
};
export default meta;
type Story = StoryObj<typeof Loader>;

export const Default: Story = {
    args: {
        type: "clip",
    },

};

export const Bar: Story = {
    args: {
        type: "bar",
    },
};

export const Beat: Story = {
    args: {
        type: "beat",
    },
};

export const Bounce: Story = {
    args: {
        type: "bounce",
    },
};

export const Circle: Story = {
    args: {
        type: "circle",
    },
};

export const Clip: Story = {
    args: {
        type: "clip",
    },
};

export const Clock: Story = {
    args: {
        type: "clock",
    },
};

export const Dot: Story = {
    args: {
        type: "dot",
    },
};

export const Fade: Story = {
    args: {
        type: "fade",
    },
};

export const Grid: Story = {
    args: {
        type: "grid",
    },
};

export const Hash: Story = {
    args: {
        type: "hash",
    },
};

export const Moon: Story = {
    args: {
        type: "moon",
    },
};

export const Pacman: Story = {
    args: {
        type: "pacman",
    },
};

export const Propagate: Story = {
    args: {
        type: "ppg",
    },
};

export const Pulse: Story = {
    args: {
        type: "pulse",
    },
};

export const Ring: Story = {
    args: {
        type: "ring",
    },
};

export const Rotate: Story = {
    args: {
        type: "rotate",
    },
};

export const Scale: Story = {
    args: {
        type: "scale",
    },
};

export const Square: Story = {
    args: {
        type: "square",
    },
};

export const Sync: Story = {
    args: {
        type: "sync",
    },
};



