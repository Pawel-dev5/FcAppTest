import customTheme from '@theme';
import React, { useEffect, useState } from 'react';
import { Animated, View } from 'react-native';

export const ProgressBar = ({ currentStep, stepsLength }: { currentStep: number; stepsLength: number }) => {
  const [width, setWidth] = useState(0);
  const animatedWidth = new Animated.Value((width * (currentStep - 1)) / stepsLength);

  useEffect(() => {
    Animated.spring(animatedWidth, {
      toValue: (width * currentStep) / stepsLength,
      useNativeDriver: false,
    }).start();
  }, [currentStep, width]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <View
      style={{
        width: '100%',
        maxWidth: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 20,
        paddingBottom: 10,
      }}
      onLayout={event => {
        setWidth(event.nativeEvent.layout.width);
      }}>
      <View style={{ height: 7, position: 'relative', width: '100%', maxWidth: '100%' }}>
        <View style={{ width: '100%', height: 7, backgroundColor: customTheme.colors.purple }} />

        <Animated.View
          style={{
            width: animatedWidth,
            height: 7,
            position: 'absolute',
            backgroundColor: customTheme.colors.secondary,
          }}
        />
      </View>
    </View>
  );
};
