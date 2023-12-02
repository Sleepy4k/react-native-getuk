import styles from './styles';
import { userModel } from '@models';
import { AuthLayout } from '@layouts';
import { notification } from '@helpers';
import { useState, useContext } from 'react';
import { CustomTextInput } from '@components';
import { AuthContext } from '@contexts/AuthContext';
import {
  Text,
  Keyboard,
  ScrollView,
  TouchableOpacity
} from 'react-native';

export default function Login({ navigation }) {
  const { loading, setLoading, setLoggedIn } = useContext(AuthContext);
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (name, value) => {
    setData((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const validate = async () => {
    Keyboard.dismiss();
    if (loading) return;

    if (!data.email) return notification('Email tidak boleh kosong', 'Error');
    else if (data.email.length < 5) return notification('Email minimal 5 karakter', 'Error');
    else if (data.email.length > 150) return notification('Email maksimal 150 karakter', 'Error');
    else if (!data.email.includes('@') || !data.email.includes('.')) return notification('Email tidak valid', 'Error');

    if (!data.password) return notification('Password tidak boleh kosong', 'Error');
    else if (data.password.length < 5) return notification('Password minimal 5 karakter', 'Error');
    else if (data.password.length > 150) return notification('Password maksimal 150 karakter', 'Error');

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
      notification('Something went wrong when try to register', 'Error');
      console.log('Login error', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthLayout
      containerStyle={styles.container}
      animatedStyle={styles.formCard}
      header={<Text style={styles.screenTitle}>Login</Text>}
    >
      <>
        <Text style={styles.formTitle}>Login Untuk Masuk Sistem</Text>

        <ScrollView style={{ flex: 1 }}>
          <CustomTextInput style={styles.input} editable={!loading} placeholder="Alamat Email" onChangeText={(email) => handleChange("email", email)} value={data.email} />
          <CustomTextInput style={[styles.input, styles.inputPassword]} editable={!loading} placeholder="Password"  onChangeText={(password) => handleChange("password", password)} value={data.password} secureTextEntry={true} />

          <TouchableOpacity onPress={validate} style={[styles.button, styles.buttonEntry]} disabled={loading}>
            <Text style={styles.buttonText}>Masuk</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.replace('Register')} style={styles.button} disabled={loading}>
            <Text style={styles.buttonText}>Daftar</Text>
          </TouchableOpacity>
        </ScrollView>
      </>
    </AuthLayout>
  )
}