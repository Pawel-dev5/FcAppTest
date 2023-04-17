import React, { useEffect, useRef, useState } from 'react';
import { NativeSyntheticEvent, StyleProp, Text, TextStyle, View } from 'react-native';
import { Animated, Easing } from 'react-native';

const NUMBERS = Array(10)
  .fill(10)
  .map((_, i) => i);

const usePrevious = (value: number) => {
  const ref = useRef<number>();
  useEffect(() => {
    ref.current = value;
  });

  if (typeof ref.current === 'undefined') return 0;
  return ref.current;
};

interface AnimatedNumbersInterface {
  animateToNumber: number;
  fontStyle?: StyleProp<TextStyle>;
  animationDuration?: number;
}

const AnimatedNumber = ({ animateToNumber, fontStyle, animationDuration }: AnimatedNumbersInterface) => {
  const prevNumber = usePrevious(animateToNumber);
  const animateToNumberString = String(Math.abs(animateToNumber));
  const prevNumberString = String(Math.abs(prevNumber));

  const animateToNumbersArr = Array.from(animateToNumberString, Number);
  const prevNumberersArr = Array.from(prevNumberString, Number);

  const [numberHeight, setNumberHeight] = useState(0);

  const animations = animateToNumbersArr.map((__, index) => {
    if (typeof prevNumberersArr[index] !== 'number') return new Animated.Value(0);

    const animationHeight = -1 * (numberHeight * prevNumberersArr[index]);
    return new Animated.Value(animationHeight);
  });

  const setButtonLayout = (e: NativeSyntheticEvent<{ layout: { height: number } }>) =>
    setNumberHeight(e.nativeEvent.layout.height);

  useEffect(() => {
    animations.map((animation, index) => {
      if (typeof animateToNumbersArr[index] !== 'number') {
        return;
      }

      Animated.timing(animation, {
        toValue: -1 * (numberHeight * animateToNumbersArr[index]),
        duration: animationDuration ? animationDuration : 500,
        useNativeDriver: true,
        easing: Easing.elastic(1.2),
      }).start();
    });
  }, [animateToNumber, numberHeight]); // eslint-disable-line react-hooks/exhaustive-deps

  const getTranslateY = (index: number) => animations[index];

  return (
    <>
      {numberHeight !== 0 && (
        <View style={{ flexDirection: 'row' }}>
          {animateToNumber < 0 && <Text style={[fontStyle, { height: numberHeight }]}>{'-'}</Text>}
          {animateToNumbersArr.map((n, index) => {
            if (typeof n === 'string') {
              return (
                <Text key={index} style={[fontStyle, { height: numberHeight }]}>
                  {n}
                </Text>
              );
            }

            return (
              <View key={index} style={{ height: numberHeight, overflow: 'hidden' }}>
                <Animated.View
                  style={[
                    {
                      transform: [
                        {
                          translateY: getTranslateY(index),
                        },
                      ],
                    },
                  ]}>
                  {NUMBERS.map((number, i) => (
                    <View style={{ flexDirection: 'row' }} key={i}>
                      <Text style={[fontStyle, { height: numberHeight }]}>{number}</Text>
                    </View>
                  ))}
                </Animated.View>
              </View>
            );
          })}
        </View>
      )}
      <Text style={[fontStyle, { position: 'absolute', top: -999999 }]} onLayout={setButtonLayout}>
        {0}
      </Text>
    </>
  );
};

export default AnimatedNumber;
