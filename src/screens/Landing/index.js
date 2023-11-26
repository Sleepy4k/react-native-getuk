import React from 'react';
import styles from './styles';
import LogoGetuk from '@images/icon.png';
import {
  Text,
  View,
  Image,
  Animated,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';

export default function Landing({ navigation }) {
  const [slideAnim] = React.useState(new Animated.Value(0));

  React.useEffect(() => {
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

  return(
    <SafeAreaView>
      <View style={styles.container}>
        <View>
          <View style={styles.appTitle}>
            <Text style={styles.firstTitle}>Getuk Goreng</Text>
            <Text style={styles.secondTitle}>Sokaraja</Text>
          </View>

          <Image style={styles.image} source={LogoGetuk}/>
        </View>

        <Animated.View style={[styles.landingCard, { transform: [{ translateY }] }]}>
          <Text style={styles.landingTitle}>Lokasi Toko Getuk Sokaraja</Text>
          <Text style={styles.landingDescription}>Temukan toko oleh getuk khas sokaraja di sekitarmu</Text>

          <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.button}>
            <Text style={styles.buttonText}>Masuk</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </SafeAreaView>
  )
}
