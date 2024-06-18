import { Meta, StoryObj } from "@storybook/react";
import Loader from "@load/Loader";

const meta: Meta<typeof Loader> = {
    title: "Components/UI/Loaders/Loader",
    component: Loader,
    argTypes: {
        type: {
            name: "Type",
            defaultValue: "helix",
            description: "Type Of the Loader",
            control: {
                type: "select",
                options: ['ring', 'ring2', 'tailSpin', 'lineSpinner', 'squircle', 'square', 'reuleaux', 'tailChase', 'dotSpinner', 'spiral', 'bouncy', 'treadmill', 'BouncyArc', 'waveform', 'hatch', 'hourglass', 'zoomies', 'lineWobble', 'infinity', 'trefoil', 'cardio', 'helix', 'grid', 'quantum', 'wobble', 'orbit', 'chaoticOrbit', 'superballs', 'trio', 'momentum', 'dotWave', 'leapfrog', 'newton', 'dotStream', 'dotPulse', 'metronome', 'jelly', 'jellyTriangle', 'mirage', 'ping', 'pulsar', 'ripples', 'miyagi', 'pinwheel'],
            },
        },
        size: {
            name: "Size",
            defaultValue: 50,
            description: "Size of Loader",
            control: "number",
        },
        speed: {
            name: "Speed",
            defaultValue: 1,
            description: "The Playbackspeed of the Animation",
            control: "number",
        },
        stroke: {
            name: "Stroke",
            defaultValue: 5,
            description: "Width of the Stroke",
            control: "number",
        },
        strokeLength: {
            name: "Stroke Length",
            defaultValue: 100,
            description: "Length of the Stroke",
            control: "number",
        },
        bgOpacity: {
            name: "Background Opacity",
            defaultValue: 0,
            description: "Opacity of the Background",
            control: "number",
        },
        color: {
            name: "Color",
            defaultValue: '#CDAE23',
            description: "Color of the Loader",
            control: "color",
        }
    }
}

export default meta
type Story = StoryObj<typeof Loader>

export const Ring: Story = {
    args: {
        type: "ring",
        size: 50,
        speed: 2,
        stroke: 6,
        strokeLength: 0,
        bgOpacity: 0,
        color: '#CDAE23'
    }
} 

export const Ring2: Story = {
    args: {
        type: "ring2",
        size: 50,
        speed: 0.8,
        stroke: 6,
        strokeLength: 0.25,
        bgOpacity: 0.1,
        color: '#CDAE23'
    }
}

export const TailSpin: Story = {
    args: {
        type: "tailSpin",
        size: 50,
        speed: 0.9,
        stroke: 6,
        strokeLength: 0,
        bgOpacity: 0,
        color: '#CDAE23'
    }
}

export const LineSpinner: Story = {
    args: {
        type: "lineSpinner",
        size: 50,
        speed: 1,
        stroke: 3.5,
        strokeLength: 0,
        bgOpacity: 0,
        color: '#CDAE23'
    }
}

export const Squircle: Story = {
    args: {
        type: "squircle",
        size: 50,
        speed: 0.9,
        stroke: 6,
        strokeLength: 0.15,
        bgOpacity: 0.1,
        color: '#CDAE23'
    }
}

export const Square: Story = {
    args: {
        type: "square",
        size: 45,
        speed: 1.2,
        stroke: 6,
        strokeLength: 0.25,
        bgOpacity: 0.1,
        color: '#CDAE23'
    }
}

export const Reuleaux: Story = {
    args: {
        type: "reuleaux",
        size: 50,
        speed: 1.2,
        stroke: 6,
        strokeLength: 0.15,
        bgOpacity: 0.1,
        color: '#CDAE23'
    }
}

export const TailChase: Story = {
    args: {
        type: "tailChase",
        size: 50,
        speed: 1.8,
        stroke: 0,
        strokeLength: 0,
        bgOpacity: 0,
        color: '#CDAE23'
    }
}

export const DotSpinner: Story = {
    args: {
        type: "dotSpinner",
        size: 50,
        speed: 0.9,
        stroke: 0,
        strokeLength: 0,
        bgOpacity: 0,
        color: '#CDAE23'
    }
}

export const Spiral: Story = {
    args: {
        type: "spiral",
        size: 50,
        speed: 0.9,
        stroke: 0,
        strokeLength: 0,
        bgOpacity: 0,
        color: '#CDAE23'
    }
}

export const Bouncy: Story = {
    args: {
        type: "bouncy",
        size: 55,
        speed: 1.8,
        stroke: 0,
        strokeLength: 0,
        bgOpacity: 0,
        color: '#CDAE23'
    }
}

export const Treadmill: Story = {
    args: {
        type: "treadmill",
        size: 85,
        speed: 1.3,
        stroke: 0,
        strokeLength: 0,
        bgOpacity: 0,
        color: '#CDAE23'
    }
}

export const BouncyArc: Story = {
    args: {
        type: "bouncyArc",
        size: 50,
        speed: 0.9,
        stroke: 0,
        strokeLength: 0,
        bgOpacity: 0,
        color: '#CDAE23'
    }
}

export const Waveform: Story = {
    args: {
        type: "waveform",
        size: 45,
        speed: 1,
        stroke: 4,
        strokeLength: 0,
        bgOpacity: 0,
        color: '#CDAE23'
    }
}

export const Hatch: Story = {
    args: {
        type: "hatch",
        size: 35,
        speed: 3.5,
        stroke: 4.5,
        strokeLength: 0,
        bgOpacity: 0,
        color: '#CDAE23'
    }
}

export const Hourglass: Story = {
    args: {
        type: "hourglass",
        size: 50,
        speed: 1.8,
        stroke: 0,
        strokeLength: 0,
        bgOpacity: 0.1,
        color: '#CDAE23'
    }
}

export const Zoomies: Story = {
    args: {
        type: "zoomies",
        size: 100,
        speed: 1.4,
        stroke: 6,
        strokeLength: 0,
        bgOpacity: 0.1,
        color: '#CDAE23'
    }
}

export const LineWobble: Story = {
    args: {
        type: "lineWobble",
        size: 100,
        speed: 1.8,
        stroke: 6,
        strokeLength: 0,
        bgOpacity: 0.1,
        color: '#CDAE23'
    }
}

export const Infinity: Story = {
    args: {
        type: "infinity",
        size: 65,
        speed: 1.3,
        stroke: 5,
        strokeLength: 0.15,
        bgOpacity: 0.1,
        color: '#CDAE23'
    }
}

export const Trefoil: Story = {
    args: {
        type: "trefoil",
        size: 50,
        speed: 1.4,
        stroke: 5,
        strokeLength: 0.15,
        bgOpacity: 0.1,
        color: '#CDAE23'
    }
}

export const Cardio: Story = {
    args: {
        type: "cardio",
        size: 60,
        speed: 2,
        stroke: 5,
        strokeLength: 0,
        bgOpacity: 0,
        color: '#CDAE23'
    }
}

export const Helix: Story = {
    args: {
        type: "helix",
        size: 60,
        speed: 2.5,
        stroke: 0,
        strokeLength: 0,
        bgOpacity: 0,
        color: '#CDAE23'
    }
}

export const Grid: Story = {
    args: {
        type: "grid",
        size: 75,
        speed: 1.5,
        stroke: 0,
        strokeLength: 0,
        bgOpacity: 0,
        color: '#CDAE23'
    }
}

export const Quantum: Story = {
    args: {
        type: "quantum",
        size: 55,
        speed: 1.8,
        stroke: 0,
        strokeLength: 0,
        bgOpacity: 0,
        color: '#CDAE23'
    }
}

export const Wobble: Story = {
    args: {
        type: "dotSpinner",
        size: 50,
        speed: 0.9,
        stroke: 0,
        strokeLength: 0,
        bgOpacity: 0,
        color: '#CDAE23'
    }
}

export const Orbit: Story = {
    args: {
        type: "orbit",
        size: 45,
        speed: 1.5,
        stroke: 0,
        strokeLength: 0,
        bgOpacity: 0,
        color: '#CDAE23'
    }
}

export const ChaoticOrbit: Story = {
    args: {
        type: "chaoticOrbit",
        size: 45,
        speed: 1.5,
        stroke: 0,
        strokeLength: 0,
        bgOpacity: 0,
        color: '#CDAE23'
    }
}

export const Superballs: Story = {
    args: {
        type: "superballs",
        size: 50,
        speed: 1.4,
        stroke: 0,
        strokeLength: 0,
        bgOpacity: 0,
        color: '#CDAE23'
    }
}

export const Trio: Story = {
    args: {
        type: "trio",
        size: 50,
        speed: 1.3,
        stroke: 0,
        strokeLength: 0,
        bgOpacity: 0,
        color: '#CDAE23'
    }
}

export const Momentum: Story = {
    args: {
        type: "momentum",
        size: 50,
        speed: 1.1,
        stroke: 0,
        strokeLength: 0,
        bgOpacity: 0,
        color: '#CDAE23'
    }
}

export const DotWave: Story = {
    args: {
        type: "dotWave",
        size: 65,
        speed: 1,
        stroke: 0,
        strokeLength: 0,
        bgOpacity: 0,
        color: '#CDAE23'
    }
}

export const Leapfrog: Story = {
    args: {
        type: "leapfrog",
        size: 50,
        speed: 2.5,
        stroke: 0,
        strokeLength: 0,
        bgOpacity: 0,
        color: '#CDAE23'
    }
}

export const NewtonsCradle: Story = {
    args: {
        type: "newton",
        size: 100,
        speed: 1.4,
        stroke: 0,
        strokeLength: 0,
        bgOpacity: 0,
        color: '#CDAE23'
    }
}

export const DotStream: Story = {
    args: {
        type: "dotStream",
        size: 75,
        speed: 2.5,
        stroke: 0,
        strokeLength: 0,
        bgOpacity: 0,
        color: '#CDAE23'
    }
}

export const DotPulse: Story = {
    args: {
        type: "dotPulse",
        size: 50,
        speed: 1.3,
        stroke: 0,
        strokeLength: 0,
        bgOpacity: 0,
        color: '#CDAE23'
    }
}

export const Metronome: Story = {
    args: {
        type: "metronome",
        size: 50,
        speed: 1.6,
        stroke: 0,
        strokeLength: 0,
        bgOpacity: 0,
        color: '#CDAE23'
    }
}

export const Jelly: Story = {
    args: {
        type: "jelly",
        size: 50,
        speed: 0.9,
        stroke: 0,
        strokeLength: 0,
        bgOpacity: 0,
        color: '#CDAE23'
    }
}

export const JellyTriangle: Story = {
    args: {
        type: "jellyTriangle",
        size: 40,
        speed: 1.8,
        stroke: 0,
        strokeLength: 0,
        bgOpacity: 0,
        color: '#CDAE23'
    }
}

export const Mirage: Story = {
    args: {
        type: "mirage",
        size: 75,
        speed: 2.5,
        stroke: 0,
        strokeLength: 0,
        bgOpacity: 0,
        color: '#CDAE23'
    }
}

export const Ping: Story = {
    args: {
        type: "ping",
        size: 60,
        speed: 2,
        stroke: 0,
        strokeLength: 0,
        bgOpacity: 0,
        color: '#CDAE23'
    }
}

export const Pulsar: Story = {
    args: {
        type: "pulsar",
        size: 50,
        speed: 1.8,
        stroke: 0,
        strokeLength: 0,
        bgOpacity: 0,
        color: '#CDAE23'
    }
}

export const Ripples: Story = {
    args: {
        type: "ripples",
        size: 60,
        speed: 2,
        stroke: 0,
        strokeLength: 0,
        bgOpacity: 0,
        color: '#CDAE23'
    }
}

export const Miyagi: Story = {
    args: {
        type: "miyagi",
        size: 50,
        speed: 0.9,
        stroke: 5,
        strokeLength: 0,
        bgOpacity: 0,
        color: '#CDAE23'
    }
}

export const Pinwheel: Story = {
    args: {
        type: "pinwheel",
        size: 50,
        speed: 0.9,
        stroke: 5,
        strokeLength: 0,
        bgOpacity: 0,
        color: '#CDAE23'
    }
}