import styles from './styles';
import PropTypes from "prop-types";
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

const Landing = ({ navigation }) => {
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
      header={header}
      containerStyle={styles.container}
      animatedStyle={styles.landingCard}
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

Landing.propTypes = {
  navigation: PropTypes.object.isRequired,
};

Landing.defaultProps = {
  navigation: {
    navigate: () => {}
  },
};

export default Landing;
