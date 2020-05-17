import { createContext, Context } from 'react';

import { IAppContext } from './types';

export const AppContext: Context<IAppContext>  = createContext<IAppContext>({
    direction: undefined,
});
