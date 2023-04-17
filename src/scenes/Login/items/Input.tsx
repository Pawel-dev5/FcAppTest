import { InputInterface } from '@scenes/Login/models';
import customTheme from '@theme';
import { Text, View, Image } from 'native-base';
import React from 'react';
import { Controller } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { StyleSheet, TextInput } from 'react-native';

export const Input = ({ label, errors, control, name, type, autoComplete }: InputInterface) => {
  const [t] = useTranslation();

  const inputIconHandler = () => {
    switch (name) {
      case 'firstName':
        return require('@assets/icons/User.png');
      case 'email':
        return require('@assets/icons/Mail.png');
      case 'phone':
        return require('@assets/icons/Phone.png');
      case 'password':
        return require('@assets/icons/Lock.png');
      default:
        return null;
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
              {inputIconHandler() && (
                <Image alt="Input icon" source={inputIconHandler()} width={6} height={6} marginX={3} />
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
          {t(`Login:${errors[name]?.message}`)}
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
