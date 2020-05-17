import React, { ReactElement } from 'react';

import { Header } from './components/Header/Header.component';

import './App.css';

export function App (): ReactElement {
    return (
        <div className="App">
            <Header />
        </div>
    );
}
