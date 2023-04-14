import Splashscreen from '@components/Splashscreen';
import { ContextProvider, GlobalStateContextData } from '@hooks/globalState';
import '@i18n';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackScreen } from '@routes';
import { isMountedRef, navigationRef } from '@routes/navigationUtils';
import { LoginStackScreen } from '@routes/stacks/LoginStack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import customTheme from '@theme';
import { NativeBaseProvider, StatusBar } from 'native-base';
import React, { FC, Suspense, useEffect, useContext } from 'react';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';
import SplashScreen from 'react-native-splash-screen';

enableScreens();

// Create a react-query client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 5 * 60 * 1000,
    },
  },
});

const AppWrapper: FC = () => {
  const { isAuth } = useContext(GlobalStateContextData);

  useEffect(() => {
    isMountedRef.current = true;

    return () => (isMountedRef.current = false);
  }, []);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Suspense fallback={<Splashscreen />}>
      <SafeAreaProvider>
        <NavigationContainer ref={navigationRef}>
          <NativeBaseProvider theme={customTheme}>
            <QueryClientProvider client={queryClient}>
              <StatusBar translucent backgroundColor="transparent" />

              {isAuth ? <RootStackScreen /> : <LoginStackScreen />}
            </QueryClientProvider>
          </NativeBaseProvider>
        </NavigationContainer>
      </SafeAreaProvider>
    </Suspense>
  );
};

const App = () => (
  <ContextProvider>
    <AppWrapper />
  </ContextProvider>
);

export default App;
