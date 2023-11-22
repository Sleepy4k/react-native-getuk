import React from 'react';
import styles from './styles';
import { storeModel } from '@models';
import * as ImagePicker from 'expo-image-picker';
import { cloudFile, getBlobFromUri, notification } from '@helpers';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faStar } from '@fortawesome/free-solid-svg-icons';
import {
  Text,
  View,
  Image,
  Keyboard,
  TextInput,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';

export default function AddShop({ navigation }) {
  const [address, setAddress] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [starRating, setStarRating] = React.useState(null);
  const [chosenImage, setChosenImage] = React.useState(null);
  const [locationName, setLocationName] = React.useState(null);
  const [coordinates, setCoordinates] = React.useState({
    latitude: null,
    longitude: null
  });

  const handleChooseImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permission.granted) {
      return notification('permission required to access camera roll', 'Error');
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setChosenImage(result.assets[0]);
    }
  };

  const validate = async () => {
    Keyboard.dismiss();
    if (loading) return;

    if (!locationName) {
      return notification('Nama lokasi tidak boleh kosong', 'Error');
    } else if (locationName.length < 5) {
      return notification('Nama lokasi minimal 5 karakter', 'Error');
    } else if (locationName.length > 150) {
      return notification('Nama lokasi maksimal 150 karakter', 'Error');
    }

    if (!starRating) {
      return notification('Rating tidak boleh kosong', 'Error');
    } else if (starRating < 1) {
      return notification('Rating minimal 1', 'Error');
    } else if (starRating > 5) {
      return notification('Rating maksimal 5', 'Error');
    }

    if (!address) {
      return notification('Alamat tidak boleh kosong', 'Error');
    } else if (address.length < 5) {
      return notification('Alamat minimal 5 karakter', 'Error');
    } else if (address.length > 255) {
      return notification('Alamat maksimal 255 karakter', 'Error');
    }

    if (!chosenImage.uri) {
      return notification('Pilih gambar terlebih dahulu', 'Error');
    } else if (chosenImage.size > 5000000) {
      return notification('Ukuran gambar maksimal 5MB', 'Error');
    }

    setLoading(true);
    handleSave();
  }

  const handleSave = async () => {
    try {
      const blob = await getBlobFromUri(chosenImage.uri);
      const url = await cloudFile.uploadFile(blob);

      await storeModel.createStore({
        image: url,
        name: locationName,
        rating: starRating.toString(),
        address
      });

      navigation.replace('Dashboard');
    } catch (error) {
      console.log(`error while save data: ${error}`);
      return notification('error while save data', 'Error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.nav}>
        <TouchableOpacity onPress={() => navigation.replace('Dashboard')}>
          <FontAwesomeIcon icon={faArrowLeft} size={20} color='#000' style={styles.icon1} />
        </TouchableOpacity>

        <Text style={styles.text1}>Add Shop</Text>

        <TouchableOpacity onPress={validate}>
          <Text style={styles.text3}>Save</Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.input1}
        placeholder="Shop Name"
        value={locationName}
        editable={!loading}
        onChangeText={(text) => setLocationName(text)}
      />

      <TextInput
        style={styles.input2}
        placeholder="Location"
        editable={!loading}
      />

      <TextInput
        style={styles.input3}
        placeholder="Address"
        multiline={true}
        numberOfLines={4}
        value={address}
        editable={!loading}
        onChangeText={(text) => setAddress(text)}
      />

      <TouchableOpacity onPress={handleChooseImage} disabled={loading}>
        <View style={styles.card2}>
          {chosenImage ? (
            <Image source={{ uri: chosenImage?.uri }} style={styles.image} />
          ) : (
            <Text style={styles.text2}>Choose Image</Text>
          )}
        </View>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 15 }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <TouchableOpacity key={star} onPress={() => setStarRating(star)} disabled={loading}>
            <FontAwesomeIcon
              key={star}
              icon={faStar}
              size={27}
              color={star <= starRating ? '#000' : '#ccc'}
              style={styles.icon2}
            />
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}