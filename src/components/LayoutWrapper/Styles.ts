import customTheme from '@theme';
import { StyleSheet } from 'react-native';

export const layoutStyles = StyleSheet.create({
  backgroundImage: {
    maxWidth: '100%',
    height: '73.5%',
    resizeMode: 'cover',
  },
  childBackgroundImage: {
    width: '100%',
    height: '87%',
    resizeMode: 'cover',
    position: 'absolute',
    bottom: 0,
  },
  children: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: customTheme.colors.primary,
    borderColor: customTheme.colors.border,
    borderWidth: 1,
    borderBottomWidth: 1,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    overflow: 'hidden',
  },
  contentContainerStyle: {
    minWidth: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    overflow: 'hidden',
    position: 'relative',
  },
});
