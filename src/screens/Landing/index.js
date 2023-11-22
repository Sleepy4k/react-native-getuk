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
    outputRange: [250, 0],
  });

  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.headtext}>
        <Text style={styles.headtext1}>Getuk Goreng</Text>
        <Text style={styles.headtext2}>Sokaraja</Text>
      </View>

      <Image style={styles.image} source={LogoGetuk}/>

      <Animated.View style={[styles.card1, { transform: [{ translateY }] }]}>
        <Text style={styles.text1}>Lokasi Toko Getuk Sokaraja</Text>
        <Text style={styles.text2}>Temukan toko oleh getuk khas sokaraja di sekitarmu</Text>

        <TouchableOpacity onPress={() => navigation.replace('Login')} style={styles.button}>
          <Text style={styles.text3}>Masuk</Text>
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  )
}
