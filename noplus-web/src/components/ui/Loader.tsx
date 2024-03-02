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
}

const Loader: React.FC<LoaderProps> = ({ type, size = 15, color = '#CDAE23', active = true, height, width, margin, radius }) => {
    switch (type) {
        case 'bar':
            return <loaders.BarLoader color={color} height={height || 4} width={width || 100} loading={active}  />;
        case 'beat':
            return <loaders.BeatLoader color={color} size={size || 15} margin={margin || 2} loading={active} />;
        case 'bounce':
            return <loaders.BounceLoader color={color} size={size || 60} loading={active} />;
        case 'circle':
            return <loaders.CircleLoader color={color} size={size || 50} loading={active} />;
        case 'climbingbox':
            return <loaders.ClimbingBoxLoader color={color} size={size || 15} loading={active} />;
        case 'clip':
            return <loaders.ClipLoader color={color} size={size || 35} loading={active} />;
        case 'clock':
            return <loaders.ClockLoader color={color} size={size || 50} loading={active} />;
        case 'dot':
            return <loaders.DotLoader color={color} size={size || 60} loading={active} />;
        case 'fade':
            return <loaders.FadeLoader color={color} height={height || 15} width={width || 5} radius={radius || 2} margin={margin || 2} loading={active} />;
        case 'grid':
            return <loaders.GridLoader color={color} size={size || 15} margin={margin || 2} loading={active} />;
        case 'hash':
            return <loaders.HashLoader color={color} size={size || 50} loading={active} />;
        case 'moon':
            return <loaders.MoonLoader color={color} size={size || 60} loading={active} />;
        case 'pacman':
            return <loaders.PacmanLoader color={color} size={size || 25} margin={margin || 2} loading={active} />;
        case 'ppg':
            return <loaders.PropagateLoader color={color} size={size || 15} loading={active} />;
        case 'puff':
            return <loaders.PuffLoader color={color} size={size || 60} loading={active} />;
        case 'pulse':
            return <loaders.PulseLoader color={color} size={size || 15} margin={margin || 2} loading={active} />;
        case 'ring':
            return <loaders.RingLoader color={color} size={size || 60} loading={active} />;
        case 'rise':
            return <loaders.RiseLoader color={color} size={size || 15} margin={margin || 2} loading={active} />;
        case 'rotate':
            return <loaders.RotateLoader color={color} size={size || 15} margin={margin || 2} loading={active} />;
        case 'scale':
            return <loaders.ScaleLoader color={color} height={height || 35} width={width || 4} radius={radius || 2} margin={margin || 2} loading={active} />;
        case 'skew':
            return <loaders.SkewLoader color={color} size={size || 20} loading={active} />;
        case 'square':
            return <loaders.SquareLoader color={color} size={size || 50} loading={active} />;
        case 'sync':
            return <loaders.SyncLoader color={color} size={size || 15} margin={margin || 2} loading={active} />;
        default:
            return <loaders.ClipLoader color={color} size={size || 35} loading={active} />;
    }
};

export { Loader };