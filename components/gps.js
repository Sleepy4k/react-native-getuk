import React, { useState, useEffect, useRef } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
  SocialIcon,
  Animated,
  ImageBackground,   
} from 'react-native';

export default function gps({navigation}) {
    const [slideAnim] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(
      slideAnim,
      {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }
    ).start();
  }, [slideAnim]);

  const translateY = slideAnim.interpolate({
    inputRange: [0, 3],
    outputRange: [250, 0],
  });

    return(
        <View style={styles.container}>
            <View style={styles.headtext}>
            <Text style={styles.headtext1}>Getuk Goreng</Text>
            <Text style={styles.headtext2}>Sokaraja</Text>
            </View>
            <Image style={styles.image} source={require('../assets/logogetuk.png')}/>
            <Animated.View style={[styles.card1, { transform: [{ translateY }] }]}>
            <Text style={styles.text1}>Lokasi Toko Getuk Sokaraja</Text>
            <Text style={styles.text2}>Temukan toko oleh getuk khas sokaraja di sekitarmu</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.button}>
            <Text style={styles.text3}>Masuk</Text>
            </TouchableOpacity>
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 960,
        backgroundColor: '#65d7cd'
    },
      card1: {
        marginTop: 40,
        backgroundColor: 'white',
        height: 400,
        width: 450,
        borderRadius: 50,
        alignSelf: 'center',
      },
      text1: {
        fontSize: 20,
        color: 'black',
        alignSelf: 'center',
        padding: 30,
        fontWeight: 'bold',
        marginTop: 10
      },
      text2: {
        alignSelf: 'center',
      },
      text3: {
        color: 'white',
        fontSize: 18,
        alignSelf: 'center',
        margin: 10
      },
      button: {
        alignSelf: 'center',
        backgroundColor: '#ff7953',
        width: 360,
        height: 50,
        borderRadius: 25,
        margin: 20,
      },
      image: {
        width: 250,
        height: 250,
        alignSelf: 'center',
        marginTop: 60
      },
      headtext: {
        alignSelf: 'center',
        flexDirection:'row',
        marginTop: 150
      },
      headtext1: {
        fontSize: 30,
        color: 'white',
      },
      headtext2: {
        marginLeft: 10,
        fontSize: 30,
        color: '#ff7953'
      }
})