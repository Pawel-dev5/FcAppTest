import customTheme from '@theme';
import { Text, View, Image, Icon, Button } from 'native-base';
import { ReactNode, useEffect, useMemo, useRef, useState } from 'react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, ImageBackground, Animated, Easing, Keyboard } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

interface LayoutWrapperInterface {
  children?: ReactNode | ReactNode[];
  startAnimation?: boolean;
  backHandler?: () => void;
}

export const LayoutWrapper = ({ children, startAnimation, backHandler }: LayoutWrapperInterface) => {
  const [t] = useTranslation();

  const [keyboardHeight, setKeyboardHeight] = useState(0);

  useEffect(() => {
    Keyboard.addListener('keyboardDidShow', event => {
      const { height: keyboardheight } = event.endCoordinates;
      setKeyboardHeight(keyboardheight);
    });

    Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardHeight(0);
    });

    return () => {
      Keyboard.removeAllListeners('keyboardDidShow');
      Keyboard.removeAllListeners('keyboardDidHide');
    };
  }, []);

  const arrowOpacity = useRef(new Animated.Value(0)).current;
  const subTitleOpacity = useRef(new Animated.Value(1)).current;
  const subTitlePosition = useRef(new Animated.Value(0)).current;
  const baseAnimation = { duration: 500, useNativeDriver: true, easing: Easing.ease };
  const scale = useRef(new Animated.Value(1)).current;
  const heightIndex = useRef(new Animated.Value(0)).current;

  const height = useMemo(
    () =>
      heightIndex.interpolate({
        inputRange: [0, 1],
        outputRange: ['53%', '82%'],
      }),
    [heightIndex],
  );

  useEffect(() => {
    // Keyboard.dismiss();
    Animated.parallel(
      [
        Animated.timing(scale, {
          toValue: startAnimation || keyboardHeight ? 0.65 : 1,
          ...baseAnimation,
        }),
        Animated.timing(subTitlePosition, {
          toValue: startAnimation || keyboardHeight ? -20 : 0,
          ...baseAnimation,
        }),
        Animated.timing(subTitleOpacity, {
          toValue: startAnimation || keyboardHeight ? 0 : 1,
          ...baseAnimation,
        }),
        Animated.timing(arrowOpacity, {
          toValue: startAnimation || keyboardHeight ? 1 : 0,
          ...baseAnimation,
        }),
        Animated.spring(heightIndex, {
          toValue: startAnimation || keyboardHeight ? 1 : 0,
          useNativeDriver: false,
        }),
      ],
      { stopTogether: false },
    ).start();
  }, [startAnimation, keyboardHeight]);

  return (
    <View flex={1} position="relative">
      <ImageBackground source={require('@assets/images/Login_Background.jpg')} style={styles.backgroundImage}>
        <View alignItems="center" paddingTop={50}>
          <View alignItems="center" flexDirection="row">
            <Animated.View style={{ opacity: arrowOpacity }}>
              <Button
                onPress={() => {
                  if (backHandler) backHandler();
                }}>
                <Icon as={FontAwesome5} name="arrow-left" color="WHITE" size="18px" />
              </Button>
            </Animated.View>

            <Animated.View style={{ transform: [{ scale }], marginLeft: !startAnimation ? -38 : -18 }}>
              <Image
                alt="FC.APP_LOGO"
                source={require('@assets/images/FC.APP_LOGO.png')}
                resizeMode="contain"
                width="333px"
                height="51px"
              />
            </Animated.View>
          </View>

          <Animated.View style={{ opacity: subTitleOpacity, transform: [{ translateY: subTitlePosition }] }}>
            <Text paddingTop={4} fontSize="md" fontWeight={700} color="WHITE">
              {t('Login:welcome')}
            </Text>
          </Animated.View>
        </View>
      </ImageBackground>

      <Animated.ScrollView
        keyboardShouldPersistTaps="handled"
        style={{
          ...styles.children,
          // height: startAnimation ? '82%' : '50%',
          height,
        }}
        contentContainerStyle={{
          minWidth: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 21,
          paddingTop: 0,
        }}>
        {children}
      </Animated.ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    maxWidth: '100%',
    height: '73.5%',
    resizeMode: 'cover',
  },
  children: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: customTheme.colors.primary,
    borderColor: customTheme.colors.border,
    borderWidth: 1,
    borderBottomWidth: 1,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
  },
});