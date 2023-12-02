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
    password: '',
    role: 'user'
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
      notification(`Register error ${error.message}`, 'Error');
      console.log('Register error', error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <AuthLayout
      containerStyle={styles.container}
      animatedStyle={styles.formCard}
      header={<Text style={styles.screenTitle}>Register</Text>}
    >
      <>
        <Text style={styles.formTitle}>Daftar Akun Sebagai Pengguna</Text>

        <ScrollView style={{ flex: 1 }}>
          <CustomTextInput style={styles.input} editable={!loading} placeholder="Alamat Email" onChangeText={(email) => handleChange("email", email)} value={data.email} />
          <CustomTextInput style={[styles.input, styles.inputPassword]} editable={!loading} placeholder="Password"  onChangeText={(password) => handleChange("password", password)} value={data.password} secureTextEntry={true} />

          <TouchableOpacity onPress={validate} style={[styles.button, styles.buttonEntry]} disabled={loading}>
            <Text style={styles.buttonText}>Daftar</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.replace('Login')} style={styles.button} disabled={loading}>
            <Text style={styles.buttonText}>Masuk</Text>
          </TouchableOpacity>
        </ScrollView>
      </>
    </AuthLayout>
  )
}