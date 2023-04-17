import { layoutStyles } from '@components/LayoutWrapper/Styles';
import { LayoutWrapperInterface } from '@components/LayoutWrapper/models';
import { Text, View, Image, Icon, Button } from 'native-base';
import { useEffect, useMemo, useRef, useState } from 'react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ImageBackground, Animated, Easing, Keyboard } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export const LayoutWrapper = ({ children, startAnimation, backHandler, currentStep }: LayoutWrapperInterface) => {
  const [t] = useTranslation();

  const [keyboardHeight, setKeyboardHeight] = useState(0);

  const arrowOpacity = useRef(new Animated.Value(0)).current;
  const subTitleOpacity = useRef(new Animated.Value(1)).current;
  const subTitlePosition = useRef(new Animated.Value(0)).current;
  const baseAnimation = { duration: 500, useNativeDriver: true, easing: Easing.ease };
  const scale = useRef(new Animated.Value(1)).current;
  const heightIndex = useRef(new Animated.Value(0)).current;
  const height = useMemo(
    () =>
      heightIndex.interpolate({
        inputRange: [0, 1, 2],
        outputRange: ['53%', '85%', '88%'],
      }),
    [heightIndex],
  );

  useEffect(() => {
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
  }, [startAnimation, keyboardHeight]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (currentStep === 5) {
      Animated.parallel(
        [
          Animated.spring(heightIndex, {
            toValue: 2,
            useNativeDriver: false,
          }),
        ],
        { stopTogether: false },
      ).start();
    } else {
      Animated.parallel(
        [
          Animated.spring(heightIndex, {
            toValue: startAnimation || keyboardHeight ? 1 : 0,
            useNativeDriver: false,
          }),
        ],
        { stopTogether: false },
      ).start();
    }
  }, [currentStep]); // eslint-disable-line react-hooks/exhaustive-deps

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

  return (
    <View flex={1} position="relative">
      <ImageBackground source={require('@assets/images/Login_Background.jpg')} style={layoutStyles.backgroundImage}>
        <View alignItems="center" paddingTop={35}>
          <View alignItems="center" flexDirection="row">
            <Animated.View style={{ opacity: arrowOpacity }}>
              <Button
                onPress={() => {
                  if (backHandler) backHandler();
                }}>
                <Icon as={FontAwesome5} name="arrow-left" color="WHITE" size="18px" />
              </Button>
            </Animated.View>

            <Animated.View style={{ transform: [{ scale }], marginLeft: -38 }}>
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
          ...layoutStyles.children,
          height,
        }}
        contentContainerStyle={layoutStyles.contentContainerStyle}>
        {currentStep === 5 ? (
          <>
            <Image
              alt="Sygnet Logo"
              source={require('@assets/icons/Sygnet_Logo.png')}
              style={layoutStyles.childBackgroundImage}
            />
            <View
              paddingLeft={21}
              paddingRight={21}
              width="100%"
              minWidth="100%"
              minHeight="100%"
              zIndex={1}
              marginBottom={50}>
              {children}
            </View>
          </>
        ) : (
          <View paddingLeft={21} paddingRight={21} overflow="hidden">
            {children}
          </View>
        )}
      </Animated.ScrollView>
    </View>
  );
};
