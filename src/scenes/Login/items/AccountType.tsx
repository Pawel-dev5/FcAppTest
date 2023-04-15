import { AccountTypeItem } from '@scenes/Login/elements';
import { accountTypesContent } from '@scenes/Login/items/accountTypesContent';
import { View, Text } from 'native-base';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const AccountType = () => {
  const [t, i18n] = useTranslation();

  return (
    <View alignItems="center" height="100%">
      <Text color="white" fontWeight="bold" fontSize="lg" marginBottom={6} textAlign="center">
        {t('Login:chooseAccountType')}
      </Text>

      <Text color="white" fontSize="xs" marginBottom={8} width="270px" opacity={0.7}>
        {t('Login:chooseAccountTypeDescription')}
      </Text>

      {accountTypesContent[i18n?.language]?.map(item => (
        <AccountTypeItem key={item?.id} {...item} />
      ))}

      <View alignItems="flex-start" width="216px" marginTop={2}>
        <Text color="white" fontSize="xs" opacity={0.7}>
          {t('Login:privacyPolicy')}
        </Text>
        <Text fontSize="xs" opacity={0.7} color="SECONDARY">
          {t('Login:privacyPolicyTitle')}
        </Text>
      </View>
    </View>
  );
};
