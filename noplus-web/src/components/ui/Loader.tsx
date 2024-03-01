import * as loaders from 'react-spinners';
import React from 'react';

interface LoaderProps {
    type: 'circle' | 'bar' | 'beat' | 'bounce' | 'clip' | 'clock' | 'dot' | 'fade' | 'grid' | 'hash' | 'moon' | 'pacman' | 'ppg' | 'pulse' | 'ring' | 'rotate' | 'scale' | 'square' | 'sync';
}

const Loader: React.FC<LoaderProps> = ({ type }) => {
    switch (type) {
        case 'bar':
            return <loaders.BarLoader color='#CDAE23' />;
        case 'beat':
            return <loaders.BeatLoader color='#CDAE23' />;
        case 'bounce':
            return <loaders.BounceLoader color='#CDAE23' />;
        case 'circle':
            return <loaders.CircleLoader color='#CDAE23' />;
        case 'clip':
            return <loaders.ClipLoader color='#CDAE23' />;
        case 'clock':
            return <loaders.ClockLoader color='#CDAE23' />;
        case 'dot':
            return <loaders.DotLoader color='#CDAE23' />;
        case 'fade':
            return <loaders.FadeLoader color='#CDAE23' />;
        case 'grid':
            return <loaders.GridLoader color='#CDAE23' />;
        case 'hash':
            return <loaders.HashLoader color='#CDAE23' />;
        case 'moon':
            return <loaders.MoonLoader color='#CDAE23' />;
        case 'pacman':
            return <loaders.PacmanLoader color='#CDAE23' />;
        case 'ppg':
            return <loaders.PropagateLoader color='#CDAE23' />;
        case 'pulse':
            return <loaders.PulseLoader color='#CDAE23' />;
        case 'ring':
            return <loaders.RingLoader color='#CDAE23' />;
        case 'rotate':
            return <loaders.RotateLoader color='#CDAE23' />;
        case 'scale':
            return <loaders.ScaleLoader color='#CDAE23' />;
        case 'square':
            return <loaders.SquareLoader color='#CDAE23' />;
        case 'sync':
            return <loaders.SyncLoader color='#CDAE23' />;
        default:
            return <loaders.ClipLoader color='#CDAE23' />;
    }
};

export default Loader;