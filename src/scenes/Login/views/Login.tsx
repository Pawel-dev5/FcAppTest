import { LayoutWrapper } from '@components/LayoutWrapper';
import { ContextProvider, LoginContextData } from '@scenes/Login/hooks/useLogin';
import { WelcomeScreen, Steps } from '@scenes/Login/sections';
import { View } from 'native-base';
import React, { useContext } from 'react';

const LoginWrapper = () => {
  const { currentStep, startAnimation, backHandler } = useContext(LoginContextData);

  return (
    <LayoutWrapper startAnimation={startAnimation} backHandler={backHandler}>
      <View>{currentStep === 0 ? <WelcomeScreen /> : <Steps />}</View>
    </LayoutWrapper>
  );
};

export const Login = () => (
  <ContextProvider>
    <LoginWrapper />
  </ContextProvider>
);
