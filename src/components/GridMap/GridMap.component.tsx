import React, { ReactElement, useContext } from 'react';

import './GridMap.styles.scss';
import { AppContext } from '../../context';
import { IAppContext, IDirection } from '../../types';

export function GridMap (): ReactElement {
    const { direction, isLoading, error }: IAppContext = useContext(AppContext);

    function generateCellClass (posXY: string, direction: IDirection): string {

        let cellClass: string = '';

        const multi: string | undefined = direction.multiOccurence.find((value: string): boolean => {
            return value === posXY;
        });

        const start: boolean = direction.startPosition.string === posXY;
        const stop: boolean = direction.endPosition.string === posXY;

        if (multi) {
            cellClass = 'multi';
        }

        if (start) {
            cellClass = `${cellClass} start`;
        } else if (stop) {
            cellClass = `${cellClass} stop ${direction.lastDirection}`;
        }

        if (multi || start || stop) {
            return cellClass;
        }

        const isValidPath: string | undefined = direction.path.string.find((value: string): boolean => {
            return value === posXY;
        });

        if (isValidPath) {
            cellClass = `${cellClass} active`;
        }

        return cellClass;
    }

    function renderCell (posXY: string, direction: IDirection): ReactElement {
        const cellClass: string = generateCellClass(posXY, direction);

        return (
            <td key={posXY} className={cellClass}></td>
        );
    }

    function renderGrid (direction: IDirection): ReactElement {
        return (
            <table>
                <tbody>
                    {direction && direction.bound.posYBound.map((posY: number): ReactElement => {
                        const y: string = `${posY}`;

                        return (
                            <tr key={posY}>
                                {direction.bound.posXBound.map((posX: number): ReactElement => {
                                    const x: string = `${posX}`;
                                    const xy: string = `${x}/${y}`;

                                    return renderCell(xy, direction);
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }

    function RenderLegend (): ReactElement {
        return (
            <div className="legendContainer">
                <p className="legendContainer__legendTitle">Legend</p>
                <div className="legendContainer__legendRow">
                    <div className="legendContainer__legendRow--col">
                        <div className="td active"></div>
                        <span>Travel Path</span>
                    </div>
                    <div className="legendContainer__legendRow--col">
                        <div className="td multi"></div>
                        <span>Cross Path</span>
                    </div>
                    <div className="legendContainer__legendRow--col">
                        <div className="td start"></div>
                        <span>Start Position</span>
                    </div>
                    <div className="legendContainer__legendRow--col">
                        <div className="td stop"></div>
                        <span>End Position</span>
                    </div>
                </div>
            </div>
        );
    }

    function renderError (error: string): ReactElement {
        return (
            <div className="errorContainer">
                <p>{error}</p>
            </div>
        );
    }

    function RenderIsLoading (): ReactElement {
        return (
            <div className="loading" />
        );
    }

    return (
        <div>
            {error && renderError(error)}
            <RenderLegend />
            <br/>
            <div className="gridContainer">
                {isLoading && <RenderIsLoading />}
                {!isLoading && <div>
                    <p className="gridTitle">Path</p>
                    {direction && renderGrid(direction)}
                    {!direction && <p>No Path Available</p>}
                </div>}
            </div>
        </div>
    );
}
