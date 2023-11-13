import React, { useState, useEffect, useRef } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Animated,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default function Login({ navigation }) {
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
    outputRange: [550, 0],
  });

  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Login</Text>
      <Animated.View
        style={[styles.card1, { transform: [{ translateY }] }]}
      >
        <Text style={styles.text2}>Login Untuk Masuk Sistem Admin</Text>
        <TextInput style={styles.input1} placeholder="Alamat Email"></TextInput>
        <TextInput style={styles.input2} placeholder="Password"></TextInput>
        <TouchableOpacity onPress={() => navigation.navigate('Dashboard1')} style={styles.button}>
            <Text style={styles.text3}>Masuk</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 960,
    backgroundColor: '#efefef',
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
    fontSize: 30,
    color: 'black',
    alignSelf: 'center',
    padding: 40,
    fontWeight: 'bold',
    marginTop: 50
  },
  text2: {
    fontSize: 20,
    color: 'black',
    alignSelf: 'center',
    padding: 30,
    fontWeight: 'bold',
    marginTop: 10
  },
  text3: {
    color: 'white',
    fontSize: 18,
    alignSelf: 'center',
    margin: 10
  },
  input1: {
    alignSelf: 'center',
    backgroundColor: '#efefef',
    width: 360,
    height: 50,
    borderRadius: 10,
    padding: 15,
    
  },
  input2: {
    alignSelf: 'center',
    backgroundColor: '#efefef',
    width: 360,
    height: 50,
    borderRadius: 10,
    padding: 15,
    margin: 10,
  },
  button: {
    alignSelf: 'center',
    backgroundColor: '#ff7953',
    width: 360,
    height: 50,
    borderRadius: 25,
    margin: 50
  },
});
