import React from 'react';
import styles from './styles';
import { storeModel } from '@models';
import * as ImagePicker from 'expo-image-picker';
import { cloudFile, getBlobFroUri } from '@helpers';
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

export default function AdminAddShop({ navigation }) {
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
      alert('permission required to access camera roll');
      return;
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

    setLoading(true);
    let valid = true;

    if (!locationName) {
      valid = false;
      alert('Nama lokasi tidak boleh kosong');
    } else if (locationName.length < 5) {
      valid = false;
      alert('Nama lokasi minimal 5 karakter');
    } else if (locationName.length > 150) {
      valid = false;
      alert('Nama lokasi maksimal 150 karakter');
    }

    if (!starRating) {
      valid = false;
      alert('Rating tidak boleh kosong');
    } else if (starRating < 1) {
      valid = false;
      alert('Rating minimal 1');
    } else if (starRating > 5) {
      valid = false;
      alert('Rating maksimal 5');
    }

    if (!address) {
      valid = false;
      alert('Alamat tidak boleh kosong');
    } else if (address.length < 5) {
      valid = false;
      alert('Alamat minimal 5 karakter');
    } else if (address.length > 255) {
      valid = false;
      alert('Alamat maksimal 255 karakter');
    }

    if (!chosenImage.uri) {
      valid = false;
      alert('Pilih gambar terlebih dahulu');
    } else if (chosenImage.size > 5000000) {
      valid = false;
      alert('Ukuran gambar maksimal 5MB');
    }

    if (valid) {
      handleSave();
    } else {
      setLoading(false);
    }
  }

  const handleSave = async () => {
    try {
      const blob = await getBlobFroUri(chosenImage.uri);
      const url = await cloudFile.uploadFile(blob);

      await storeModel.createStore({
        image: url,
        name: locationName,
        rating: starRating.toString(),
        address
      });

      navigation.replace('AdminDashboard');
    } catch (error) {
      console.log(`error while save data: ${error}`);
      alert('error while save data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.nav}>
        <TouchableOpacity onPress={() => navigation.replace('AdminDashboard')}>
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