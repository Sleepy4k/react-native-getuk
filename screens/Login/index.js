import React from 'react';
import styles from './styles';
import { userModel } from '@models';
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
    password: ''
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
    outputRange: [550, 0],
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
      handleLogin();
    } else {
      setLoading(false);
    }
  }

  const handleLogin = async () => {
    try {
      const user = await userModel.findUser(data.email);

      if (user) {
        if (user.password === data.password) {
          await setLoggedIn(user);

          (user.role === 'admin') ? navigation.navigate('AdminDashboard') : navigation.navigate('UserDashboard');
        } else {
          alert('Password salah');
        }
      } else {
        alert('Akun tidak ditemukan');
      }
    } catch (error) {
      alert('Login error');
      console.log('Login error', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text1}>Login</Text>

      <Animated.View style={[styles.card1, { transform: [{ translateY }] }]}>
        <Text style={styles.text2}>Login Untuk Masuk Sistem Admin</Text>

        <View>
          <TextInput style={styles.input1} editable={!loading} placeholder="Alamat Email" onChangeText={(email) => handleChange("email", email)} />
          {errors.email ? <Text style={styles.error}>{errors.email}</Text> : null}
        </View>

        <View>
          <TextInput style={styles.input2} editable={!loading} placeholder="Password"  onChangeText={(password) => handleChange("password", password)} />
          {errors.password ? <Text style={styles.error}>{errors.password}</Text> : null}
        </View>

        <TouchableOpacity onPress={validate} style={styles.button} disabled={loading}>
          <Text style={styles.text3}>Masuk</Text>
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  )
}