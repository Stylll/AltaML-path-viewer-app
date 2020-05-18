export interface IXY {
    x: number;
    y: number;
}

export interface IDirection {
    bound: {
        posXBound: number[];
        posYBound: number[];
    };
    startPosition: {
        raw: number[];
        string: string;
    };
    endPosition: {
        raw: number[];
        string: string;
    };
    highestPosition: IXY;
    lowestPosition: IXY;
    lastDirection: string;
    multiOccurence: string[];
    path: {
        raw: number[][];
        string: string[];
    };
}

export interface IAppContext {
    direction: IDirection | undefined;
    loadDirection?: (directionUrl: string) => void;
    directionNames?: string[];
    isLoading?: boolean;
    error?: string;
}

export interface IState {
    direction: IDirection | undefined;
    directionNames: string[];
}
