import { ProgressBar } from '@components/ProgressBar';
import { LoginContextData } from '@scenes/Login/hooks/useLogin';
import { Input } from '@scenes/Login/items';
import globalButtonsStyles from '@theme/buttons';
import { Button, Text, View } from 'native-base';
import React, { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export const Steps = () => {
  const [t] = useTranslation();
  const {
    currentStep,
    setCurrentStep,
    stepsLength,
    control,
    handleSubmit,
    errors,
    onSubmit,
    isBackendError,
    isLoading,
    backendError,
  } = useContext(LoginContextData);

  useEffect(() => {
    if (errors?.password) setCurrentStep(4);
    if (errors?.email) setCurrentStep(3);
    if (errors?.phone) setCurrentStep(2);
    if (errors?.firstName) setCurrentStep(1);
  }, [errors, setCurrentStep]);

  return (
    <View alignItems="center" paddingTop={8}>
      <Text color="white" fontWeight="bold" fontSize="lg" marginBottom={10}>
        {t('Login:createAccount')}
      </Text>

      <View>
        {currentStep === 1 && (
          <Input
            label={t('Login:firstAndLastName')}
            errors={errors}
            control={control}
            name="firstName"
            type="default"
            autoComplete="username"
          />
        )}
        {currentStep === 2 && (
          <Input
            label={t('Login:phone')}
            errors={errors}
            control={control}
            name="phone"
            type="numeric"
            autoComplete="tel"
          />
        )}
        {currentStep === 3 && (
          <Input
            label={t('Login:email')}
            errors={errors}
            control={control}
            name="email"
            type="email-address"
            autoComplete="email"
          />
        )}
        {currentStep === 4 && (
          <Input label={t('Login:password')} errors={errors} control={control} name="password" type="default" />
        )}
      </View>

      <View width="100%" maxWidth="100%" flexDirection="row" alignItems="flex-end" justifyContent="space-between">
        <Text color="GREY" fontSize="sm" opacity={0.7}>
          {t('common:step')}:
        </Text>

        <Text fontFamily="MonumentExtended-Regular" fontSize={52} lineHeight={52} color="BORDER" marginBottom={-2}>
          {currentStep}/{stepsLength}
        </Text>
      </View>

      <ProgressBar currentStep={currentStep} stepsLength={stepsLength} />

      <Button
        style={globalButtonsStyles.filledButton}
        onPress={currentStep < stepsLength ? () => setCurrentStep(currentStep + 1) : handleSubmit(onSubmit)}
        disabled={isLoading}>
        <Text style={globalButtonsStyles.filledButtonText}>{isLoading ? 'Loading...' : t('common:next')}</Text>
      </Button>

      {isBackendError && (
        <Text color="ALIZARIN" paddingTop={2}>
          {backendError?.code}: {backendError?.message}.
        </Text>
      )}
    </View>
  );
};
