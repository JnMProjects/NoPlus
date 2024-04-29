import * as ldr from 'ldrs'

interface loaderProps {
    type: 'ring' | 'ring2' | 'tailSpin' | 'lineSpinner' | 'squircle' | 'square' | 'reuleaux' | 'tailChase' | 'dotSpinner' | 'spiral' | 'bouncy' | 'treadmill' | 'bouncyArk' | 'waveform' | 'hatch' | 'hourglass' | 'zoomies' | 'lineWobble' | 'infinity' | 'trefoil' | 'cardio' | 'helix' | 'grid' | 'quantum' | 'wobble' | 'orbit' | 'chaoticOrbit' | 'superballs' | 'trio' | 'momentum' | 'dotWave' | 'leapfrog' | 'newton' | 'dotStream' | 'dotPulse' | 'metronome' | 'jelly' | 'jellyTriangle' | 'mirage' | 'ping' | 'pulsar' | 'ripples' | 'miyagi' | 'pinwheel'
    size?: number // Jeder Hatt eigenen Default
    speed?: number // same nach unten
    stroke?: number
    strokeLength?: number
    bgOpacity?: number
    color?: string // das kann ich defaulten
}

const ldrs: React.FC<loaderProps> = ({type = "helix", size, speed, stroke, strokeLength, bgOpacity, color = '#CDAE23'}) => {
    switch (type) {
        case 'ring':
            ldr.ring.register()
            return <l-ring size={size = 50} speed={speed = 2} stroke={stroke = 6} bg-opacity={bgOpacity} color={color} />
        case 'ring2':
            ldr.ring2.register()
            return <l-ring-2 size={size = 50} speed={speed = 0.8} stroke={stroke = 6} stroke-length={strokeLength = 0.25} bg-opacity={bgOpacity = 0.1} color={color} />
        case 'tailSpin':
            ldr.tailspin.register()
            return <l-tailspin size={size = 50} speed={speed = 0.9} stroke={stroke = 6} color={color} />
        case 'lineSpinner':
            ldr.lineSpinner.register()
            return <l-line-spinner size={size = 50} speed={speed = 1} stroke={stroke = 3.5} color={color} />
        case 'squircle':
            ldr.squircle.register()
            return <l-squircle size={size = 50} speed={speed = 0.9} stroke={stroke = 6} stroke-length={strokeLength = 0.15} bg-opacity={bgOpacity = 0.1} color={color} />
        case 'square':
            ldr.square.register()
            return <l-square size={size = 45} speed={speed = 1.2} stroke={stroke = 6} stroke-length={strokeLength = 0.25} bg-opacity={bgOpacity = 0.1} color={color} />
        case 'reuleaux':
            ldr.reuleaux.register()
            return <l-reuleaux size={size = 50} speed={speed = 1.2} stroke={stroke = 6} stroke-length={strokeLength = 0.15} bg-opacity={bgOpacity = 0.1} color={color} />
        case 'tailChase':
            ldr.tailChase.register()
            return <l-tail-chase size={size = 50} speed={speed = 1.8} color={color} />
        case 'dotSpinner':
            ldr.dotSpinner.register()
            return <l-dot-spinner size={size = 50} speed={speed = 0.9} color={color} />
        case 'spiral':
            ldr.spiral.register()
            return <l-spiral size={size = 50} speed={speed = 0.9} color={color} />
        case 'bouncy':
            ldr.bouncy.register()
            return <l-bouncy size={size = 55} speed={speed = 1.8} color={color} />
        case 'treadmill':
            ldr.treadmill.register()
            return <l-treadmill size={size = 85} speed={speed = 1.3} color={color} />
        case 'bouncyArk':
            ldr.bouncyArc.register()
            return <l-bouncy-arc size={size = 85} speed={speed = 1.6} color={color} />
        case 'waveform':
            ldr.waveform.register()
            return <l-waveform size={size = 45} speed={speed = 1} stroke={stroke = 4} color={color} />
        case 'hatch':
            ldr.hatch.register()
            return <l-hatch size={size = 35} speed={speed = 3.5} stroke={stroke = 4.5} color={color} />
        case 'hourglass':
            ldr.hourglass.register()
            return <l-hourglass size={size = 50} speed={speed = 1.8} bg-opacity={bgOpacity = 0.1} color={color} />
        case 'zoomies':
            ldr.zoomies.register()
            return <l-zoomies size={size = 100} speed={speed = 1.4} stroke={stroke = 6} bg-opacity={bgOpacity = 0.1} color={color} />
        case 'lineWobble':
            ldr.lineWobble.register()
            return <l-line-wobble size={size = 100} speed={speed = 1.8} stroke={stroke = 6} bg-opacity={bgOpacity = 0.1} color={color} />
        case 'infinity':
            ldr.infinity.register()
            return <l-infinity size={size = 65} speed={speed = 1.3} stroke={stroke = 5} stroke-length={strokeLength = 0.15} bg-opacity={bgOpacity = 0.1} color={color} />
        case 'trefoil':
            ldr.trefoil.register()
            return <l-trefoil size={size = 50} speed={speed = 1.4} stroke={stroke = 5} stroke-length={strokeLength = 0.15} bg-opacity={bgOpacity = 0.1} color={color} />
        case 'cardio':
            ldr.cardio.register()
            return <l-cardio size={size = 60} speed={speed = 2} stroke={stroke = 5} color={color} />
        case 'helix':
            ldr.helix.register()
            return <l-helix size={size = 60} speed={speed = 2.5} color={color} />
        case 'grid':
            ldr.grid.register()
            return <l-grid size={size = 75} speed={speed = 1.5} color={color} />
        case 'quantum':
            ldr.quantum.register()
            return <l-quantum size={size = 60} speed={speed = 1.8} color={color} />
        case 'wobble':
            ldr.wobble.register()
            return <l-wobble size={size = 60} speed={speed = 0.9} color={color} />
        case 'orbit':
            ldr.orbit.register()
            return <l-orbit size={size = 45} speed={speed = 1.5} color={color} />
        case 'chaoticOrbit':
            ldr.chaoticOrbit.register()
            return <l-chaotic-orbit size={size = 45} speed={speed = 1.5} color={color} />
        case 'superballs':
            ldr.superballs.register()
            return <l-superballs size={size = 50} speed={speed = 1.4} color={color} />
        case 'trio':
            ldr.trio.register()
            return <l-trio size={size = 50} speed={speed = 1.3} color={color} />
        case 'momentum':
            ldr.momentum.register()
            return <l-momentum size={size = 50} speed={speed = 1.1} color={color} />
        case 'dotWave':
            ldr.dotWave.register()
            return <l-dot-wave size={size = 65} speed={speed = 1} color={color} />
        case 'leapfrog':
            ldr.leapfrog.register()
            return <l-leapfrog size={size = 50} speed={speed = 2.5} color={color} />
        case 'newton': // 's cradle
            ldr.newtonsCradle.register()
            return <l-newtons-cradle size={size = 100} speed={speed = 1.4} color={color} />
        case 'dotStream':
            ldr.dotStream.register()
            return <l-dot-stream size={size = 75} speed={speed = 2.5} color={color} />
        case 'dotPulse':
            ldr.dotPulse.register()
            return <l-dot-pulse size={size = 50} speed={speed = 1.3} color={color} />
        case 'metronome':
            ldr.metronome.register()
            return <l-metronome size={size = 50} speed={speed = 1.6} color={color} />
        case 'jelly':
            ldr.jelly.register()
            return <l-jelly size={size = 50} speed={speed = 0.9} color={color} />
        case 'jellyTriangle':
            ldr.jellyTriangle.register()
            return <l-jelly-triangle size={size = 40} speed={speed = 1.8} color={color} />
        case 'mirage':
            ldr.mirage.register()
            return <l-mirage size={size = 75} speed={speed = 2.5} color={color} />
        case 'ping':
            ldr.ping.register()
            return <l-ping size={size = 60} speed={speed = 2} color={color} />
        case 'pulsar':
            ldr.pulsar.register()
            return <l-pulsar size={size = 50} speed={speed = 1.8} color={color} />
        case 'ripples':
            ldr.ripples.register()
            return <l-ripples size={size = 60} speed={speed = 2} color={color} />
        case 'miyagi':
            ldr.miyagi.register()
            return <l-miyagi size={size = 50} speed={speed = 0.9} stroke={stroke = 5} color={color} />
        case 'pinwheel':
            ldr.pinwheel.register()
            return <l-pinwheel size={size = 50} speed={speed = 0.9} stroke={stroke = 5} color={color} />
    }
}

export { ldrs }
