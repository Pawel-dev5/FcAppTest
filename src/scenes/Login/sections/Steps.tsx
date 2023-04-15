import { LoginContextData } from '@scenes/Login/hooks/useLogin';
import { Input } from '@scenes/Login/items';
import globalButtonsStyles from '@theme/buttons';
import { Button, Text, View } from 'native-base';
import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const Steps = () => {
  const [t] = useTranslation();
  const { currentStep, setCurrentStep, stepsLength, control, handleSubmit, errors, onSubmit } =
    useContext(LoginContextData);

  useEffect(() => {
    if (errors?.password) setCurrentStep(4);
    if (errors?.email) setCurrentStep(3);
    if (errors?.phone) setCurrentStep(2);
    if (errors?.firstName) setCurrentStep(1);
  }, [errors, setCurrentStep]);

  return (
    <View alignItems="center" paddingTop={12}>
      <Text color="white" fontWeight="bold" fontSize="lg" marginBottom={8}>
        {t('Login:createAccount')}
      </Text>

      <View>
        {currentStep === 1 && (
          <Input
            placeholder="Imię i nazwisko"
            errors={errors}
            control={control}
            name="firstName"
            type="default"
            autoComplete="username"
          />
        )}
        {currentStep === 2 && (
          <Input
            placeholder="Telefon"
            errors={errors}
            control={control}
            name="phone"
            type="numeric"
            autoComplete="tel"
          />
        )}
        {currentStep === 3 && (
          <Input
            placeholder="E-mail"
            errors={errors}
            control={control}
            name="email"
            type="email-address"
            autoComplete="email"
          />
        )}
        {currentStep === 4 && (
          <Input placeholder="Hasło" errors={errors} control={control} name="password" type="default" />
        )}
      </View>

      <View>
        <Text>Krok:</Text>
        <Text>
          {currentStep}/{stepsLength}
        </Text>
      </View>

      <Button
        style={globalButtonsStyles.filledButton}
        onPress={currentStep < stepsLength ? () => setCurrentStep(currentStep + 1) : handleSubmit(onSubmit)}>
        <Text style={globalButtonsStyles.filledButtonText}>{t('common:next')}</Text>
      </Button>
    </View>
  );
};
