import { Text, View, Image, ScrollView } from 'native-base';
import { ReactNode } from 'react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, ImageBackground } from 'react-native';

export const LayoutWrapper = ({ children }: { children?: ReactNode | ReactNode[] }) => {
  const [t] = useTranslation();

  return (
    <View flex={1} position="relative">
      <ImageBackground source={require('@assets/images/Login_Background.jpg')} style={styles.backgroundImage}>
        <View alignItems="center" paddingTop={50}>
          <Image alt="FC.APP_LOGO" source={require('@assets/images/FC.APP_LOGO.png')} width={333} height={51} />

          <Text paddingTop={4} fontSize="md" fontWeight={700} color="WHITE">
            {t('Login:welcome')}
          </Text>
        </View>
      </ImageBackground>

      <ScrollView
        position="absolute"
        bottom={0}
        backgroundColor="PRIMARY"
        borderTopLeftRadius={32}
        borderTopRightRadius={32}
        borderColor="BORDER"
        borderWidth={1}
        borderBottomWidth={0}
        height="50%"
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
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    maxWidth: '100%',
    height: '73.5%',
    resizeMode: 'cover',
  },
});
