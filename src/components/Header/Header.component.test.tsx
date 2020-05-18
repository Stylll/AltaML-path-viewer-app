import { render, fireEvent } from '@testing-library/react';
import React from 'react';

import { AppContext } from '../../context';
import { defaultState, direction } from '../../state';

import { Header } from './Header.component';

describe('Header Component', (): void => {

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
                <Header />
            </AppContext.Provider>
        );

        expect(baseElement).toMatchSnapshot();
    });

    it('should render properly when direction is undefined', (): void => {
        const { baseElement } = render(
            <AppContext.Provider value={
                {
                    direction: undefined,
                    loadDirection: jest.fn(),
                    directionNames: defaultState.directionNames,
                    isLoading: false,
                    error: '',
                }
            }
            >
                <Header />
            </AppContext.Provider>
        );

        expect(baseElement).toMatchSnapshot();
    });

    it('should call loadDirection when button is clicked', (): void => {
        const loadDirection: jest.Mock = jest.fn();

        const { getByText } = render(
            <AppContext.Provider value={
                {
                    direction: direction,
                    loadDirection: loadDirection,
                    directionNames: defaultState.directionNames,
                    isLoading: false,
                    error: '',
                }
            }
            >
                <Header />
            </AppContext.Provider>
        );

        fireEvent.click(getByText('Load Direction'));
        expect(loadDirection).toHaveBeenCalled();
    });

    it('should update value on direction change', (): void => {
        const { getByTestId, queryAllByText } = render(
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
                <Header />
            </AppContext.Provider>
        );

        const element = getByTestId('directions');

        fireEvent.change(element, {
            target: {
                value: defaultState.directionNames[2],
            },
        });
        fireEvent.blur(element);
        expect(queryAllByText(defaultState.directionNames[2]).length).toBe(2);
    });
});
