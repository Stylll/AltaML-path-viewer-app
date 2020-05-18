import React, { ReactElement, useState, SetStateAction, Dispatch, useEffect } from 'react';

// eslint-disable-next-line import/no-cycle
import { Footer } from './components/Footer/Footer.component';
import { GridMap } from './components/GridMap/GridMap.component';
import { Header } from './components/Header/Header.component';
import { AppContext } from './context';
import { defaultState } from './state';
import './App.css';
import { IDirection } from './types';
import { fetchData } from './utils';

const SERVER_API: string | undefined = process.env.REACT_APP_SERVER_API;

export function App (): ReactElement {

    const [direction, setDirection]:
    [IDirection | undefined, Dispatch<SetStateAction<IDirection | undefined>>]
    = useState<IDirection | undefined>(defaultState.direction);

    const [isLoading, setIsLoading]:
    [boolean, Dispatch<SetStateAction<boolean>>] = useState<boolean>(false);

    const [error, setError]:
    [string, Dispatch<SetStateAction<string>>] = useState<string>('');

    const errorMessage: string = 'An error occurred. Please try again.';

    function loadDirection (directionName: string): void {
        setIsLoading(true);
        setError('');

        const url: string = `${SERVER_API}?filename=${directionName}`;

        fetchData(url)
            .then((data): void => {
                setIsLoading(false);
                setDirection(data.data);
            })
            .catch((): void => {
                setIsLoading(false);
                setError(errorMessage);
            });
    }

    useEffect((): void => {
        loadDirection(defaultState.directionNames[0]);
    }, []);

    return (
        <AppContext.Provider value={
            {
                direction: direction,
                loadDirection: loadDirection,
                directionNames: defaultState.directionNames,
                isLoading: isLoading,
                error: error,
            }
        }
        >
            <div className="App">
                <Header />
                <GridMap />
                <Footer />
            </div>
        </AppContext.Provider>
    );
}
