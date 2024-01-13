import styles from './styles';
import PropTypes from "prop-types";
import { reviewModel } from '@models';
import { MainLayout } from '@layouts';
import { notification } from '@helpers';
import { useState, useContext } from 'react';
import { CustomTextInput } from '@components';
import { AuthContext } from '@contexts/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faStar } from '@fortawesome/free-solid-svg-icons';
import {
  Text,
  View,
  Keyboard,
  ScrollView,
  TouchableOpacity
} from 'react-native';

const AddReviewShop = ({ route, navigation }) => {
  const { store } = route.params.param;

  if (!store) {
    notification('store not found', 'Error');
    return navigation.replace('Dashboard');
  }

  const { userData, loading, ethernet, setLoading } = useContext(AuthContext);
  const [state, setState] = useState({
    starRating: 0,
    shopDescription: null
  });

  const handleState = (name, value) => {
    setState((prevValues) => ({ ...prevValues, [name]: value }));
  }

  const validate = async () => {
    Keyboard.dismiss();
    if (loading) return;

    if (!state.shopDescription) return notification('Deskripsi toko tidak boleh kosong', 'Error');
    else if (state.shopDescription.length < 5) return notification('Deskripsi toko minimal 5 karakter', 'Error');
    else if (state.shopDescription.length > 255) return notification('Deskripsi toko maksimal 255 karakter', 'Error');

    if (!state.starRating) return notification('Rating tidak boleh kosong', 'Error');
    else if (state.starRating < 1) return notification('Rating minimal 1', 'Error');
    else if (state.starRating > 5) return notification('Rating maksimal 5', 'Error');

    setLoading(true);
    handleSave();
  }

  const handleSave = async () => {
    try {
      if (!ethernet.isInternetReachable) return notification('Tidak ada koneksi internet', 'Error');

      await reviewModel.createReview({
        store: store.id,
        email: userData.email,
        rating: state.starRating.toString(),
        description: state.shopDescription
      });

      notification('Data berhasil disimpan', 'Success');
      navigation.replace('ReviewShop', { param: { store: store } });
    } catch (error) {
      console.log(`error while save data: ${error}`);
      notification('error while save data', 'Error');
    } finally {
      setLoading(false);
    }
  }

  const handleStarRating = (star) => {
    if (state.starRating === star) handleState('starRating', 0);
    else handleState('starRating', star);
  }

  return (
    <MainLayout containerStyle={styles.container}>
      <View style={styles.nav}>
        <TouchableOpacity onPress={() => navigation.replace('ReviewShop', { param: { store: store } })}>
          <FontAwesomeIcon icon={faArrowLeft} size={20} color='#000' style={styles.backIcon} />
        </TouchableOpacity>

        <Text style={styles.screenTitle}>Add Review</Text>

        <TouchableOpacity onPress={validate} disabled={loading}>
          <Text style={styles.saveButton}>Save</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={{ flex: 1 }}>
        <CustomTextInput
          value={state.shopDescription}
          editable={!loading}
          multiline={true}
          placeholder="Address"
          scrollEnabled={true}
          onChangeText={(text) => handleState('shopDescription', text)}
        />

        <View style={styles.starCard}>
          {[1, 2, 3, 4, 5].map((star) => (
            <TouchableOpacity key={star} onPress={() => handleStarRating(star)} disabled={loading}>
              <FontAwesomeIcon
                key={star}
                icon={faStar}
                size={27}
                color={star <= state.starRating ? '#000' : '#ccc'}
                style={styles.starIcon}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </MainLayout>
  );
}

AddReviewShop.propTypes = {
  navigation: PropTypes.object.isRequired,
};

AddReviewShop.defaultProps = {
  navigation: {
    replace: () => {}
  },
};

export default AddReviewShop;
