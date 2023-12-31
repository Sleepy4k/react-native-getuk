import styles from './styles';
import PropTypes from "prop-types";
import { storeModel } from '@models';
import { MainLayout } from '@layouts';
import { useState, useContext } from 'react';
import { CustomTextInput } from '@components';
import { AuthContext } from '@contexts/AuthContext';
import { cloudFile, getBlobFromUri, notification } from '@helpers';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faStar } from '@fortawesome/free-solid-svg-icons';
import { MediaTypeOptions, launchImageLibraryAsync } from 'expo-image-picker';
import {
  Text,
  View,
  Image,
  Keyboard,
  ScrollView,
  TouchableOpacity
} from 'react-native';

const AddShop = ({ navigation }) => {
  const { loading, ethernet, setLoading } = useContext(AuthContext);
  const [state, setState] = useState({
    address: null,
    location: null,
    starRating: 0,
    chosenImage: null,
    locationName: null,
  });

  const handleState = (name, value) => {
    setState((prevValues) => ({ ...prevValues, [name]: value }));
  }

  const handleChooseImage = async () => {
    try {
      const result = await launchImageLibraryAsync({
        mediaTypes: MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) handleState('chosenImage', result.assets[0]);
    } catch (error) {
      notification('error while choose image', 'Error');
      console.log(`error while choose image: ${error}`);
    }
  }

  const validate = async () => {
    Keyboard.dismiss();
    if (loading) return;

    if (!state.locationName) return notification('Nama lokasi tidak boleh kosong', 'Error');
    else if (state.locationName.length < 5) return notification('Nama lokasi minimal 5 karakter', 'Error');
    else if (state.locationName.length > 150) return notification('Nama lokasi maksimal 150 karakter', 'Error');

    if (!state.location) return notification('Link google maps tidak boleh kosong', 'Error');
    else if (state.location < 15) return notification('Link google maps minimal 15 karakter', 'Error');
    else if (state.location.length > 255) return notification('Link google maps maksimal 255 karakter', 'Error');

    if (!state.address) return notification('Alamat tidak boleh kosong', 'Error');
    else if (state.address.length < 5) return notification('Alamat minimal 5 karakter', 'Error');
    else if (state.address.length > 255) return notification('Alamat maksimal 255 karakter', 'Error');

    if (!state.chosenImage || !state.chosenImage?.uri) return notification('Pilih gambar terlebih dahulu', 'Error');
    else if (state.chosenImage.size > 5000000) return notification('Ukuran gambar maksimal 5MB', 'Error');

    if (!state.starRating) return notification('Rating tidak boleh kosong', 'Error');
    else if (state.starRating < 1) return notification('Rating minimal 1', 'Error');
    else if (state.starRating > 5) return notification('Rating maksimal 5', 'Error');

    setLoading(true);
    handleSave();
  }

  const handleSave = async () => {
    try {
      if (!ethernet.isConnected || !ethernet.isInternetReachable) return notification('Tidak ada koneksi internet', 'Error');

      const blob = await getBlobFromUri(state.chosenImage.uri);
      const url = await cloudFile.uploadFile(blob);

      await storeModel.createStore({
        image: url,
        name: state.locationName,
        rating: state.starRating.toString(),
        location: state.location,
        address: state.address
      });

      notification('Data berhasil disimpan', 'Success');
      navigation.replace('Dashboard');
    } catch (error) {
      console.log(`error while save data: ${error}`);
      return notification('error while save data', 'Error');
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
        <TouchableOpacity onPress={() => navigation.replace('Dashboard')}>
          <FontAwesomeIcon icon={faArrowLeft} size={20} color='#000' style={styles.backIcon} />
        </TouchableOpacity>

        <Text style={styles.screenTitle}>Add Shop</Text>

        <TouchableOpacity onPress={validate} disabled={loading}>
          <Text style={styles.saveButton}>Save</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={{ flex: 1 }}>
        <CustomTextInput
          value={state.locationName}
          editable={!loading}
          placeholder="Shop Name"
          onChangeText={(text) => handleState('locationName', text)}
        />

        <CustomTextInput
          value={state.location}
          editable={!loading}
          placeholder="Link Google Maps"
          onChangeText={(text) => handleState('location', text)}
        />

        <CustomTextInput
          value={state.address}
          editable={!loading}
          multiline={true}
          placeholder="Address"
          scrollEnabled={true}
          onChangeText={(text) => handleState('address', text)}
        />

        <TouchableOpacity style={styles.imageCard} onPress={handleChooseImage} disabled={loading}>
          {state.chosenImage ? (
            <Image source={{ uri: state.chosenImage?.uri }} style={styles.image} />
          ) : (
            <Text style={styles.chooseImage}>Choose Image</Text>
          )}
        </TouchableOpacity>

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

AddShop.propTypes = {
  navigation: PropTypes.object.isRequired,
};

AddShop.defaultProps = {
  navigation: {
    replace: () => {}
  },
};

export default AddShop;
