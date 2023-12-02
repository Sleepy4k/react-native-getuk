import styles from './styles';
import { useContext } from 'react';
import { AuthLayout } from '@layouts';
import LogoGetuk from '@images/icon.png';
import { AuthContext } from '@contexts/AuthContext';
import {
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

export default function Landing({ navigation }) {
  const { loading } = useContext(AuthContext);

  const header = (
    <View>
      <View style={styles.appTitle}>
        <Text style={styles.firstTitle}>Getuk Goreng</Text>
        <Text style={styles.secondTitle}>Sokaraja</Text>
      </View>

      <Image style={styles.image} source={LogoGetuk}/>
    </View>
  );

  return(
    <AuthLayout
      containerStyle={styles.container}
      animatedStyle={styles.landingCard}
      header={header}
    >
      <>
        <Text style={styles.landingTitle}>Lokasi Toko Getuk Sokaraja</Text>
        <Text style={styles.landingDescription}>Temukan toko oleh getuk khas sokaraja di sekitarmu</Text>

        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.button} disabled={loading}>
          <Text style={styles.buttonText}>Masuk</Text>
        </TouchableOpacity>
      </>
    </AuthLayout>
  )
}
