import { LayoutWrapper } from '@components/LayoutWrapper';
import { ContextProvider, LoginContextData } from '@scenes/Login/hooks/useLogin';
import { WelcomeScreen } from '@scenes/Login/sections';
import { View } from 'native-base';
import React, { useContext } from 'react';

const LoginWrapper = () => {
  const { currentStep, startAnimation } = useContext(LoginContextData);

  const handleComponentsBySteps = () => {
    switch (currentStep) {
      case 0:
        return <WelcomeScreen />;
      default:
        return null;
    }
  };

  return (
    <LayoutWrapper startAnimation={startAnimation}>
      <View>{handleComponentsBySteps()}</View>
    </LayoutWrapper>
  );
};

export const Login = () => (
  <ContextProvider>
    <LoginWrapper />
  </ContextProvider>
);
