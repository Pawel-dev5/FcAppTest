import customTheme from '@theme';
import { StyleSheet } from 'react-native';

const sharedText = {
  color: customTheme.colors.white,
  fontSize: 11,
};
const sharedContainer = {
  borderRadius: 12,
  marginTop: 9,
  width: '100%',
  minWidth: '100%',
  height: 48,
};

const globalButtonsStyles = StyleSheet.create({
  simpleButton: {
    ...sharedContainer,
    borderWidth: 1,
    borderColor: customTheme.colors.border,
    display: 'flex',
    flexDirection: 'row',
    minWidth: '100%',
  },
  simpleButtonText: {
    ...sharedText,
    color: '#EDEDED',
    opacity: 0.7,
    fontSize: 14,
  },
  filledButton: {
    ...sharedContainer,
    backgroundColor: customTheme.colors.secondary,
  },
  filledButtonText: {
    ...sharedText,
    fontSize: 17,
  },
  outlineButton: {
    ...sharedContainer,
  },
  outlineButtonText: {
    ...sharedText,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default globalButtonsStyles;
