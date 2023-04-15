import { GlobalStateContextData } from '@hooks/globalState';
import { LoginContextData } from '@scenes/Login/hooks/useLogin';
import customTheme from '@theme';
import globalButtonsStyles from '@theme/buttons';
import { Button, Text, View, Image } from 'native-base';
import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';

export const WelcomeScreen = () => {
  const [t] = useTranslation();
  const { setIsAuth } = useContext(GlobalStateContextData);
  const { currentStep, setCurrentStep, setStartAnimation, startAnimation } = useContext(LoginContextData);

  return (
    <>
      <Button style={globalButtonsStyles.outlineButton} onPress={() => setStartAnimation(!startAnimation)}>
        <Text style={globalButtonsStyles.outlineButtonText}>{t('Login:haveAccount')}</Text>
      </Button>

      <Button style={globalButtonsStyles.filledButton} onPress={() => setIsAuth(true)}>
        <Text style={globalButtonsStyles.filledButtonText}>{t('Login:login')}</Text>
      </Button>

      <Button style={globalButtonsStyles.outlineButton}>
        <Text style={globalButtonsStyles.outlineButtonText}>{t('Login:orRegister')}</Text>
      </Button>

      <Button style={globalButtonsStyles.simpleButton}>
        <View position="relative" minWidth="100%" justifyContent="center" alignItems="center">
          <Image
            alt="Icon Google"
            source={require('@assets/icons/Icon_Google.jpg')}
            width={6}
            height={6}
            borderRadius={customTheme.radius[2]}
            position="absolute"
            left={0}
          />
          <Text style={globalButtonsStyles.simpleButtonText}>{t('Login:useGoogle')}</Text>
        </View>
      </Button>

      <Button style={globalButtonsStyles.simpleButton}>
        <View position="relative" minWidth="100%" justifyContent="center" alignItems="center">
          <Image
            alt="Icon Facebook"
            source={require('@assets/icons/Icon_Facebook.jpg')}
            width={6}
            height={6}
            borderRadius={customTheme.radius[2]}
            position="absolute"
            left={0}
          />
          <Text style={globalButtonsStyles.simpleButtonText}>{t('Login:useFacebook')}</Text>
        </View>
      </Button>

      <Button style={globalButtonsStyles.simpleButton}>
        <View position="relative" minWidth="100%" justifyContent="center" alignItems="center">
          <Image
            alt="Icon Apple"
            source={require('@assets/icons/Icon_Apple.png')}
            width={6}
            height={6}
            borderRadius={customTheme.radius[2]}
            position="absolute"
            left={0}
          />
          <Text style={globalButtonsStyles.simpleButtonText}>{t('Login:useApple')}</Text>
        </View>
      </Button>

      <Button
        style={globalButtonsStyles.simpleButton}
        onPress={() => {
          setCurrentStep(currentStep + 1);
          setStartAnimation(true);
        }}>
        <View position="relative" minWidth="100%" justifyContent="center" alignItems="center">
          <Image
            alt="Icon Mail"
            source={require('@assets/icons/Icon_Mail.jpg')}
            width={6}
            height={6}
            borderRadius={customTheme.radius[2]}
            position="absolute"
            left={0}
          />
          <Text style={globalButtonsStyles.simpleButtonText}>{t('Login:registerByEmail')}</Text>
        </View>
      </Button>
    </>
  );
};
