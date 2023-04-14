import { ContextProviderProps } from '@config/models';
import React, { createContext, useState } from 'react';

export const useLogin = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [startAnimation, setStartAnimation] = useState(false);
  return { currentStep, setCurrentStep, startAnimation, setStartAnimation };
};

export const LoginContextData = createContext({} as ReturnType<typeof useLogin>);

export const ContextProvider = ({ children }: ContextProviderProps) => (
  <LoginContextData.Provider value={useLogin()}>{children}</LoginContextData.Provider>
);
