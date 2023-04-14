import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { Login } from '@scenes/Login';
import { FC } from 'react';
import * as React from 'react';

const LoginStack = createStackNavigator();

export const LoginStackScreen: FC = () => {
  return (
    <LoginStack.Navigator initialRouteName="Login">
      <LoginStack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
          headerTitleAlign: 'center',
          ...TransitionPresets.SlideFromRightIOS,
        }}
      />
    </LoginStack.Navigator>
  );
};
