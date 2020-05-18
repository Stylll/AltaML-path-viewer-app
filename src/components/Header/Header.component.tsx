import React, { ReactElement, useContext, ChangeEvent, useState, SetStateAction, Dispatch } from 'react';

import { AppContext } from '../../context';
import './Header.styles.scss';
import { IAppContext } from '../../types';

export function Header (): ReactElement {

    const { loadDirection, directionNames = [] }: IAppContext = useContext(AppContext);

    const [directionName, setDirectionName]:
    [string, Dispatch<SetStateAction<string>>] = useState<string>(directionNames[0]);

    function onChange (event: ChangeEvent<HTMLSelectElement>): void {
        setDirectionName(event.target.value);
    }

    function onClick (): void {
        if (loadDirection) {
            loadDirection(directionName);
        }
    }

    return (
        <div className="headerContainer">
            <div className="headerContainer__titleSection">
                <h1 className="headerContainer__titleSection--title">PathRenderer</h1>
                <h2 className="headerContainer__titleSection--subtitle">showing a generated path from a text direction</h2>
            </div>
            <div className="headerContainer__changeSection">
                <span className="headerContainer__changeSection--selected">{directionName}</span>
                <div className="headerContainer__changeSection--options">
                    <p className="label">select direction:</p>
                    <select name="directionName" id="directions" data-testid="directions" onChange={onChange}>
                        {directionNames.map((value: string): ReactElement => {
                            return (
                                <option key={value} value={value}>{value}</option>
                            );
                        })}
                    </select>
                </div>
                <div className="headerContainer__changeSection--button">
                    <button onClick={onClick} id="loadButton">Load Direction</button>
                </div>
            </div>
        </div>
    );
}
