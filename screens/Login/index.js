import styles from './styles';
import { userModel } from '@models';
import { AuthLayout } from '@layouts';
import { notification } from '@helpers';
import { AuthContext } from '@contexts/AuthContext';
import { useState, useEffect, useContext } from 'react';
import {
  Text,
  Animated,
  Keyboard,
  TextInput,
  ScrollView,
  TouchableOpacity
} from 'react-native';

export default function Login({ navigation }) {
  const [loading, setLoading] = useState(false);
  const { setLoggedIn } = useContext(AuthContext);
  const [slideAnim] = useState(new Animated.Value(0));
  const [data, setData] = useState({
    email: '',
    password: ''
  });

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

  const handleChange = (name, value) => {
    setData((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const validate = async () => {
    Keyboard.dismiss();
    if (loading) return;

    if (!data.email) {
      return notification('Email tidak boleh kosong', 'Error');
    } else if (data.email.length < 5) {
      return notification('Email minimal 5 karakter', 'Error');
    } else if (data.email.length > 150) {
      return notification('Email maksimal 150 karakter', 'Error');
    } else if (!data.email.includes('@') || !data.email.includes('.')) {
      return notification('Email tidak valid', 'Error');
    }

    if (!data.password) {
      return notification('Password tidak boleh kosong', 'Error');
    } else if (data.password.length < 5) {
      return notification('Password minimal 5 karakter', 'Error');
    } else if (data.password.length > 150) {
      return notification('Password maksimal 150 karakter', 'Error');
    }

    setLoading(true);
    handleLogin();
  }

  const handleLogin = async () => {
    try {
      const user = await userModel.findUser(data.email);

      if (user) {
        if (user.password === data.password) {
          await setLoggedIn(user);

          navigation.navigate('Dashboard');
        } else {
          notification('Password salah', 'Error');
        }
      } else {
        notification('Akun tidak ditemukan', 'Error');
      }
    } catch (error) {
      notification('Login error', 'Error');
      console.log('Login error', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthLayout style={styles.container}>
      <Text style={styles.screenTitle}>Login</Text>

      <Animated.View style={[styles.formCard, { transform: [{ translateY }] }]}>
        <Text style={styles.formTitle}>Login Untuk Masuk Sistem</Text>

        <ScrollView style={{ flex: 1 }}>
          <TextInput style={styles.input} editable={!loading} placeholder="Alamat Email" onChangeText={(email) => handleChange("email", email)} />

          <TextInput style={[styles.input, styles.inputPassword]} editable={!loading} placeholder="Password"  onChangeText={(password) => handleChange("password", password)} secureTextEntry={true} />

          <TouchableOpacity onPress={validate} style={[styles.button, styles.buttonEntry]} disabled={loading}>
            <Text style={styles.buttonText}>Masuk</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.replace('Register')} style={styles.button} disabled={loading}>
            <Text style={styles.buttonText}>Daftar</Text>
          </TouchableOpacity>
        </ScrollView>
      </Animated.View>
    </AuthLayout>
  )
}