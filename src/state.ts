import { IDirection, IState } from './types';

export const direction: IDirection = {
    bound: {
        posXBound: [-2,-1,0,1,2,3],
        posYBound: [1,0,-1],
    },
    endPosition: {
        raw: [3,1],
        string: '3/1',
    },
    highestPosition: { x: 3,
        y: 1 },
    lastDirection: 'up',
    lowestPosition: { x: -2,
        y: -1 },
    multiOccurence: ['-2/-1'],
    path: {
        raw: [
            [0,0],
            [0,1],
            [-1,1],
            [-2,1],
            [-2,0],
            [-2,-1],
            [-1,-1],
            [0,-1],
            [1,-1],
            [1,0],
            [2,0],
            [3,0],
            [3,1],
        ],
        string: ['0/0','0/1','-1/1','-2/1','-2/0','-2/-1','-1/-1','0/-1','1/-1','1/0','2/0','3/0','3/1'],
    },
    startPosition: {
        raw: [0,0],
        string: '0/0',
    },
};

const directionNames: string[] = [
    'directions-1',
    'directions-2',
    'directions-3',
    'directions-4',
    'directions-5',
    'directions-6',
];

export const defaultState: IState = {
    direction: undefined,
    directionNames: directionNames,
};
