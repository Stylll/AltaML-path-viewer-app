import { render } from '@testing-library/react';
import React from 'react';

import { Footer } from './Footer.component';

describe('Footer Component', (): void => {

    it('should render properly', (): void => {
        const { baseElement } = render(<Footer />);

        expect(baseElement).toMatchSnapshot();
    });
});
