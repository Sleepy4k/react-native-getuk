import React from 'react';
import styles from './styles';
import * as expoLocation from 'expo-location';
import LogoGetuk from '@assets/logogetuk.png';
import { AuthContext } from '@contexts/AuthContext';
import {
  Text,
  View,
  Image,
  Animated,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';

export default function GPS({ navigation }) {
  const [slideAnim] = React.useState(new Animated.Value(0));
  const { location, setLocation } = React.useContext(AuthContext);

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

  const handleLocation = async () => {
    try {
      if (location) return;

      let { status } = await expoLocation.requestForegroundPermissionsAsync();

      if (status !== 'granted') return;

      let userLocation = await expoLocation.getCurrentPositionAsync({});
      setLocation(userLocation);
    } catch (error) {
      console.log(`error while get location: ${error}`);
    }
  }

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

        {location ? (
          <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.button}>
            <Text style={styles.text3}>Masuk</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={handleLocation} style={styles.button}>
            <Text style={styles.text3}>Loading Location</Text>
          </TouchableOpacity>
        )}
      </Animated.View>
    </SafeAreaView>
  )
}
