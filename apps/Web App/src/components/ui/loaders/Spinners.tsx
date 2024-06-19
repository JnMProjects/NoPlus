import * as loaders from 'react-spinners';
import React from 'react';

interface LoaderProps {
    type: 'circle' | 'bar' | 'beat' | 'bounce' | 'clip' | 'clock' | 'climbingbox' | 'dot' | 'fade' | 'grid' | 'hash' | 'moon' | 'pacman' | 'ppg' | 'puff' | 'pulse' | 'rise' | 'ring' | 'rotate' | 'scale' | 'skew' | 'square' | 'sync';
    size?: number;
    color?: string;
    active?: boolean;
    width?: number;
    height?: number;
    margin?: number;
    radius?: number;
    style?: React.CSSProperties;
}

const Spinners: React.FC<LoaderProps> = ({ type, size = 15, color = '#CDAE23', active = true, height, width, margin, radius, ...props }) => {
    switch (type) {
        case 'bar':
            return <loaders.BarLoader color={color} height={height || 4} width={width || 100} loading={active} {...props}  />;
        case 'beat':
            return <loaders.BeatLoader color={color} size={size || 15} margin={margin || 2} loading={active} {...props} />;
        case 'bounce':
            return <loaders.BounceLoader color={color} size={size || 60} loading={active} {...props} />;
        case 'circle':
            return <loaders.CircleLoader color={color} size={size || 50} loading={active} {...props} />;
        case 'climbingbox':
            return <loaders.ClimbingBoxLoader color={color} size={size || 15} loading={active} {...props} />;
        case 'clip':
            return <loaders.ClipLoader color={color} size={size || 35} loading={active} {...props} />;
        case 'clock':
            return <loaders.ClockLoader color={color} size={size || 50} loading={active} {...props} />;
        case 'dot':
            return <loaders.DotLoader color={color} size={size || 60} loading={active} {...props} />;
        case 'fade':
            return <loaders.FadeLoader color={color} height={height || 15} width={width || 5} radius={radius || 2} margin={margin || 2} loading={active} {...props} />;
        case 'grid':
            return <loaders.GridLoader color={color} size={size || 15} margin={margin || 2} loading={active} {...props} />;
        case 'hash':
            return <loaders.HashLoader color={color} size={size || 50} loading={active} {...props} />;
        case 'moon':
            return <loaders.MoonLoader color={color} size={size || 60} loading={active} {...props} />;
        case 'pacman':
            return <loaders.PacmanLoader color={color} size={size || 25} margin={margin || 2} loading={active} {...props} />;
        case 'ppg':
            return <loaders.PropagateLoader color={color} size={size || 15} loading={active} {...props} />;
        case 'puff':
            return <loaders.PuffLoader color={color} size={size || 60} loading={active} {...props} />;
        case 'pulse':
            return <loaders.PulseLoader color={color} size={size || 15} margin={margin || 2} loading={active} {...props} />;
        case 'ring':
            return <loaders.RingLoader color={color} size={size || 60} loading={active} {...props} />;
        case 'rise':
            return <loaders.RiseLoader color={color} size={size || 15} margin={margin || 2} loading={active} {...props} />;
        case 'rotate':
            return <loaders.RotateLoader color={color} size={size || 15} margin={margin || 2} loading={active} {...props} />;
        case 'scale':
            return <loaders.ScaleLoader color={color} height={height || 35} width={width || 4} radius={radius || 2} margin={margin || 2} loading={active} {...props} />;
        case 'skew':
            return <loaders.SkewLoader color={color} size={size || 20} loading={active} {...props} />;
        case 'square':
            return <loaders.SquareLoader color={color} size={size || 50} loading={active} {...props} />;
        case 'sync':
            return <loaders.SyncLoader color={color} size={size || 15} margin={margin || 2} loading={active} {...props} />;
        default:
            return <loaders.ClipLoader color={color} size={size || 35} loading={active} {...props} />;
    }
};

export { Spinners };