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
  ScrollView,
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
    handleRegister();
  }

  const handleRegister = async () => {
    try {
      const user = await userModel.createUser(data);

      if (user) {
        await setLoggedIn(user);
        navigation.replace('Dashboard');
      } else {
        notification('Email already exist', 'Error');
      }
    } catch (error) {
      notification('Register error', 'Error');
      console.log('Register error', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.screenTitle}>Register</Text>

        <Animated.View style={[styles.formCard, { transform: [{ translateY }] }]}>
          <Text style={styles.formTitle}>Daftar Akun Sebagai Pengguna</Text>

          <ScrollView style={{ flex: 1 }}>
            <TextInput style={styles.input} editable={!loading} placeholder="Alamat Email" onChangeText={(email) => handleChange("email", email)} />

            <TextInput style={[styles.input, styles.inputPassword]} editable={!loading} placeholder="Password"  onChangeText={(password) => handleChange("password", password)} secureTextEntry={true} />

            <TouchableOpacity onPress={validate} style={[styles.button, styles.buttonEntry]} disabled={loading}>
              <Text style={styles.buttonText}>Daftar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.replace('Login')} style={styles.button} disabled={loading}>
              <Text style={styles.buttonText}>Masuk</Text>
            </TouchableOpacity>
          </ScrollView>
        </Animated.View>
      </View>
    </SafeAreaView>
  )
}