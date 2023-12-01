import styles from './styles';
import { AuthLayout } from '@layouts';
import LogoGetuk from '@images/icon.png';
import { useState, useEffect } from 'react';
import {
  Text,
  View,
  Image,
  Animated,
  TouchableOpacity
} from 'react-native';

export default function Landing({ navigation }) {
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

  return(
    <AuthLayout style={styles.container}>
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
    </AuthLayout>
  )
}
