import { render, fireEvent, wait } from '@testing-library/react';
import React from 'react';

import { App } from './App';
import { direction } from './state';
import { fetchData } from './utils';

jest.mock('./utils');

const fetchDataMock = fetchData as jest.MockedFunction<typeof fetchData>;

describe('App Component', (): void => {

    afterEach((): void => {
        fetchDataMock.mockReset();
    });

    it('should render properly', async (): Promise<void> => {
        fetchDataMock.mockResolvedValue({
            data: direction,
        });

        const { baseElement } = render(<App />);

        await wait((): void => {
            expect(baseElement).toMatchSnapshot();
        });

        return;
    });

    it('should call fetchDataMock and display proper layout when it renders', async (): Promise<void> => {
        fetchDataMock.mockResolvedValue({
            data: direction,
        });

        const { container, getByText } = render(<App />);

        expect(container.querySelector('.loading')).toBeInTheDocument();
        await wait((): void => {
            expect(getByText('Path')).toBeInTheDocument();
        });
        expect(fetchDataMock).toHaveBeenCalled();
        return;
    });

    it('should display error message if error occurred when fetching', async (): Promise<void> => {
        fetchDataMock.mockRejectedValue({
            data: {
                message: 'An error occurred',
            },
        });

        const { container, getByText } = render(<App />);

        expect(container.querySelector('.loading')).toBeInTheDocument();
        fireEvent.click(getByText('Load Direction'));
        await wait((): void => {
            expect(getByText('An error occurred. Please try again.')).toBeInTheDocument();
        });
        expect(fetchDataMock).toHaveBeenCalledTimes(2);

        return;
    });
});
