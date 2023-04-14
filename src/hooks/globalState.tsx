import { ContextProviderProps } from '@config/models';
import React, { createContext, useState } from 'react';

export const useGlobalState = () => {
  const [isAuth, setIsAuth] = useState(false);
  return { isAuth, setIsAuth };
};

export const GlobalStateContextData = createContext({} as ReturnType<typeof useGlobalState>);

export const ContextProvider = ({ children }: ContextProviderProps) => (
  <GlobalStateContextData.Provider value={useGlobalState()}>{children}</GlobalStateContextData.Provider>
);
