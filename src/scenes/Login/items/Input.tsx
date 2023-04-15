import { Text } from 'native-base';
import React from 'react';
import { Controller, FieldErrors, Control } from 'react-hook-form';
import { KeyboardTypeOptions, TextInput } from 'react-native';

interface InputInterface {
  placeholder: string;
  errors: FieldErrors;
  control: Control<any>;
  name: string;
  type: KeyboardTypeOptions;
  autoComplete?: any;
}

export const Input = ({ placeholder, errors, control, name, type, autoComplete }: InputInterface) => (
  <>
    <Controller
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChange}
          onBlur={onBlur}
          keyboardType={type}
          autoComplete={autoComplete}
          secureTextEntry={name === 'password'}
          textContentType={name === 'email' ? 'emailAddress' : 'none'}
        />
      )}
      name={name}
    />

    {errors[name] && <Text>This is required.</Text>}
  </>
);
