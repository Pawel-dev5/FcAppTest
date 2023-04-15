import { InputInterface } from '@scenes/Login/models';
import customTheme from '@theme';
import { Text, View, Image } from 'native-base';
import React from 'react';
import { Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { StyleSheet, TextInput } from 'react-native';

export const Input = ({ label, errors, control, name, type, autoComplete }: InputInterface) => {
  const [t] = useTranslation();

  const inputNameHandler = () => {
    switch (name) {
      case 'firstName':
        return { errorTitle: t('Login:firstAndLastName'), imgSrc: require('@assets/icons/User.png') };
      case 'email':
        return { errorTitle: t('Login:email'), imgSrc: require('@assets/icons/Mail.png') };
      case 'phone':
        return { errorTitle: t('Login:phone'), imgSrc: require('@assets/icons/Phone.png') };
      case 'password':
        return { errorTitle: t('Login:password'), imgSrc: require('@assets/icons/Lock.png') };
      default:
        return { errorTitle: t('Login:thisField'), imgSrc: null };
    }
  };

  return (
    <View height={120}>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <View width="100%">
            <Text color="GREY" fontSize="sm" width="100%" paddingBottom={2} opacity={0.7}>
              {label}
            </Text>

            <View
              width="100%"
              maxWidth="100%"
              flexDirection="row"
              alignItems="center"
              borderColor={customTheme.colors.border}
              borderWidth="1px"
              borderRadius={customTheme.radius[2]}>
              {inputNameHandler()?.imgSrc && (
                <Image alt="Input icon" source={inputNameHandler()?.imgSrc} width={6} height={6} marginX={3} />
              )}

              <TextInput
                value={value}
                onChangeText={onChange}
                onBlur={onBlur}
                keyboardType={type}
                autoComplete={autoComplete}
                secureTextEntry={name === 'password'}
                textContentType={name === 'email' ? 'emailAddress' : 'none'}
                style={InputStyles.input}
                autoFocus
              />
            </View>
          </View>
        )}
        name={name}
      />

      {errors[name] && (
        <Text color="ALIZARIN" paddingTop={2}>
          {inputNameHandler()?.errorTitle} {t('Login:isRequired')}
        </Text>
      )}
    </View>
  );
};

const InputStyles = StyleSheet.create({
  input: {
    width: '100%',
    color: customTheme.colors.grey,
    fontSize: customTheme.fontSizes.md,
  },
});
