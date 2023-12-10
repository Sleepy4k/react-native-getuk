import PropTypes from "prop-types";
import { Loader } from '@components';
import { AuthContext } from '@contexts/AuthContext';
import { View, Animated, SafeAreaView } from 'react-native';
import { memo, useState, useEffect, useContext } from 'react';

const AuthLayout = ({ containerStyle, animatedStyle, header, children }) => {
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

AuthLayout.propTypes = {
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  animatedStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  header: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

AuthLayout.defaultProps = {
  containerStyle: {},
  animatedStyle: {},
};

export default memo(AuthLayout);