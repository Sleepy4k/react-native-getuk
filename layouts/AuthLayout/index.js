import { Loader } from '@components';
import { AuthContext } from '@contexts/AuthContext';
import { useState, useEffect, useContext } from 'react';
import { View, Animated, SafeAreaView } from 'react-native';

export default function AuthLayout({ containerStyle, animatedStyle, header, children }) {
  const { loading } = useContext(AuthContext);
  const [slideAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [slideAnim]);

  const translateY = slideAnim.interpolate({
    inputRange: [0, 3],
    outputRange: [85, 0],
  });

  return (
    <SafeAreaView>
      <View style={containerStyle}>
        {loading && <Loader />}
        {header}

        <Animated.View style={[animatedStyle, { transform: [{ translateY }] }]}>
          {children}
        </Animated.View>
      </View>
    </SafeAreaView>
  )
}
