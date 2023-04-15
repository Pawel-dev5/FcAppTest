import { AccountTypeInterface } from '@scenes/Login/models';
import customTheme from '@theme';
import { Text, View } from 'native-base';
import React from 'react';
import { Image, StyleSheet } from 'react-native';

export const AccountTypeItem = ({ title, description, url }: AccountTypeInterface) => (
  <View
    borderWidth={1}
    borderColor="#6053B6"
    borderRadius={customTheme.radius[1]}
    flexDirection="row"
    alignItems="center"
    maxWidth="100%"
    height="96px"
    marginBottom={5}>
    <View
      backgroundColor="#897BEA"
      borderLeftRadius={customTheme.radius[1]}
      height="96px"
      width="29%"
      position="relative">
      {url && <Image source={url} style={styles.accountTypeImage} />}
    </View>

    <View
      backgroundColor="BORDER"
      borderRightRadius={customTheme.radius[1]}
      width="70%"
      paddingTop={2.5}
      paddingX={4}
      marginLeft={-0.5}
      height="96px">
      <Text color="GREY" fontSize="sm" fontWeight="bold">
        {title}
      </Text>
      <Text color="GREY" fontSize="xs" fontWeight="light" opacity={0.7}>
        {description}
      </Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  accountTypeImage: {
    width: '100%',
    height: '115%',
    resizeMode: 'contain',
    position: 'absolute',
    bottom: 0,
    left: -1.5,
  },
});
