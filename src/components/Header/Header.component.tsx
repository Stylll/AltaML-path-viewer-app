import React, { ReactElement } from 'react';

import './Header.styles.scss';

export function Header (): ReactElement {

    return (
        <div className="headerContainer">
            <div className="headerContainer__titleSection">
                <h1 className="headerContainer__titleSection--title">PathFinder</h1>
                <h2 className="headerContainer__titleSection--subtitle">showing a generated path from a text direction</h2>
            </div>
            <div className="headerContainer__changeSection">
                <div className="headerContainer__changeSection--options">
                    <p className="label">select direction:</p>
                    <select id="directions">
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
                <div className="headerContainer__changeSection--button">
                    <button id="loadButton">Load Direction</button>
                </div>
            </div>
        </div>
    );
}
