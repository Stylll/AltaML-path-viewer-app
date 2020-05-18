import { render } from '@testing-library/react';
import React from 'react';

import { AppContext } from '../../context';
import { defaultState, direction } from '../../state';

import { GridMap } from './GridMap.component';

describe('GridMap Component', (): void => {

    it('should render properly', (): void => {
        const { baseElement } = render(
            <AppContext.Provider value={
                {
                    direction: direction,
                    loadDirection: jest.fn(),
                    directionNames: defaultState.directionNames,
                    isLoading: false,
                    error: '',
                }
            }
            >
                <GridMap />
            </AppContext.Provider>
        );

        expect(baseElement).toMatchSnapshot();
    });

    it('should display error message when there\'s an error ', (): void => {
        const { getByText } = render(
            <AppContext.Provider value={
                {
                    direction: direction,
                    loadDirection: jest.fn(),
                    directionNames: defaultState.directionNames,
                    isLoading: false,
                    error: 'Error exists',
                }
            }
            >
                <GridMap />
            </AppContext.Provider>
        );

        expect(getByText('Error exists')).toBeInTheDocument();
    });

    it('should only display loader when loading ', (): void => {
        const { container, queryByText } = render(
            <AppContext.Provider value={
                {
                    direction: direction,
                    loadDirection: jest.fn(),
                    directionNames: defaultState.directionNames,
                    isLoading: true,
                    error: '',
                }
            }
            >
                <GridMap />
            </AppContext.Provider>
        );

        expect(queryByText('Path')).not.toBeInTheDocument();
        expect(queryByText('No Path Available')).not.toBeInTheDocument();
        expect(container.querySelector('table')).not.toBeInTheDocument();
    });
});
