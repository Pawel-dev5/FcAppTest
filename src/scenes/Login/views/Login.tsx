import { GlobalStateContextData } from '@hooks/globalState';
import { Button, Text, View, Image } from 'native-base';
import React, { useContext } from 'react';
import { StyleSheet, ImageBackground } from 'react-native';

export const Login = () => {
  const { setIsAuth } = useContext(GlobalStateContextData);

  return (
    <View flex={1}>
      <ImageBackground source={require('@assets/images/Login_Background.jpg')} style={styles.backgroundImage}>
        <View alignItems="center" paddingTop={50}>
          <Image source={require('@assets/images/FC.APP_LOGO.png')} width={333} height={51} />
          <Text paddingTop={4} fontSize="md" fontWeight={400} color="WHITE">
            Witaj w Football Challenge
          </Text>
        </View>
        <Button onPress={() => setIsAuth(true)}>
          <Text>Zaloguj</Text>
        </Button>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    maxWidth: '100%',
    height: '74%',
    resizeMode: 'cover',
  },
});
