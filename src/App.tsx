import React, { ReactElement } from 'react';

// eslint-disable-next-line import/no-cycle
import { GridMap } from './components/GridMap/GridMap.component';
import { Header } from './components/Header/Header.component';
import { AppContext } from './context';
import { IAppContext, IDirection } from './types';

import './App.css';

const direction: IDirection = {
    bound: {
        posXBound: [-2,-1,0,1,2,3],
        posYBound: [1,0,-1],
    },
    endPosition: {
        raw: [3,1],
        string: '31',
    },
    highestPosition: { x: 3,
        y: 1 },
    lastDirection: 'up',
    lowestPosition: { x: -2,
        y: -1 },
    multiOccurence: ['-2-1'],
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
        string: ['00','01','-11','-21','-20','-2-1','-1-1','0-1','1-1','10','20','30','31'],
    },
    startPosition: {
        raw: [0,0],
        string: '00',
    },
};

export function App (): ReactElement {
    const state: IAppContext = {
        direction: direction,
    };

    return (
        <AppContext.Provider value={state}>
            <div className="App">
                <Header />
                <GridMap />
            </div>
        </AppContext.Provider>
    );
}
