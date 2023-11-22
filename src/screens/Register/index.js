import React from 'react';
import styles from './styles';
import { userModel } from '@models';
import { notification } from '@helpers';
import { AuthContext } from '@contexts/AuthContext';
import {
  Text,
  View,
  Animated,
  Keyboard,
  TextInput,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';

export default function Login({ navigation }) {
  const [loading, setLoading] = React.useState(false);
  const { setLoggedIn } = React.useContext(AuthContext);
  const [slideAnim] = React.useState(new Animated.Value(0));
  const [data, setData] = React.useState({
    email: '',
    password: '',
    role: 'user'
  });

  const [errors, setErrors] = React.useState({
    email: '',
    password: ''
  });

  React.useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [slideAnim]);

  const translateY = slideAnim.interpolate({
    inputRange: [0, 3],
    outputRange: [450, -100],
  });

  const handleError = (value, name) => {
    setErrors((prevValues) => ({ ...prevValues, [name]: value }));
  }

  const handleChange = (name, value) => {
    setData((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const validate = async () => {
    Keyboard.dismiss();
    if (loading) return;

    setLoading(true);
    let valid = true;

    if (!data.email) {
      valid = false;
      handleError('Email tidak boleh kosong', 'email');
    } else if (data.email.length < 5) {
      valid = false;
      handleError('Email minimal 5 karakter', 'email');
    } else if (data.email.length > 150) {
      valid = false;
      handleError('Email maksimal 150 karakter', 'email');
    } else if (!data.email.includes('@') || !data.email.includes('.')) {
      valid = false;
      handleError('Email tidak valid', 'email');
    } else {
      handleError('', 'email');
    }

    if (!data.password) {
      valid = false;
      handleError('Password tidak boleh kosong', 'password');
    } else if (data.password.length < 5) {
      valid = false;
      handleError('Password minimal 5 karakter', 'password');
    } else if (data.password.length > 150) {
      valid = false;
      handleError('Password maksimal 150 karakter', 'password');
    } else {
      handleError('', 'password');
    }

    if (valid) {
      handleRegister();
    } else {
      setLoading(false);
    }
  }

  const handleRegister = async () => {
    try {
      const user = await userModel.createUser(data);
      await setLoggedIn(user);
      navigation.replace('Dashboard');
    } catch (error) {
      notification('Register error', 'Error');
      console.log('Register error', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text1}>Register</Text>

      <Animated.View style={[styles.card1, { transform: [{ translateY }] }]}>
        <Text style={styles.text2}>Daftar Akun Sebagai Pengguna</Text>

        <View>
          <TextInput style={styles.input1} editable={!loading} placeholder="Alamat Email" onChangeText={(email) => handleChange("email", email)} />
          {errors.email ? <Text style={styles.error}>{errors.email}</Text> : null}
        </View>

        <View>
          <TextInput style={styles.input2} editable={!loading} placeholder="Password"  onChangeText={(password) => handleChange("password", password)} />
          {errors.password ? <Text style={styles.error}>{errors.password}</Text> : null}
        </View>

        <TouchableOpacity onPress={validate} style={styles.button1} disabled={loading}>
          <Text style={styles.text3}>Daftar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.replace('Login')} style={styles.button2} disabled={loading}>
          <Text style={styles.text3}>Masuk</Text>
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  )
}