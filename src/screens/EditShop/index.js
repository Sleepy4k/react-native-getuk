import React from 'react';
import styles from './styles';
import { storeModel } from '@models';
import * as ImagePicker from 'expo-image-picker';
import { cloudFile, getBlobFroUri, notification } from '@helpers';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faStar } from '@fortawesome/free-solid-svg-icons';
import {
  Text,
  View,
  Image,
  Keyboard,
  TextInput,
  ScrollView,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';

export default function EditShop({ route, navigation }) {
  const param = route.params.param;

  const [loading, setLoading] = React.useState(false);
  const [newImage, setNewImage] = React.useState(false);
  const [oldImage, setOldImage] = React.useState(null);
  const [chosenImage, setChosenImage] = React.useState({});
  const [address, setAddress] = React.useState(param.store.address);
  const [location, setLocation] = React.useState(param.store.location);
  const [starRating, setStarRating] = React.useState(param.store.rating);
  const [locationName, setLocationName] = React.useState(param.store.name);

  React.useEffect(() => {
    (async () => {
      if (param.store.image) {
        const imageLink = await cloudFile.getFile(param.store.image);
        setChosenImage({ uri: imageLink });
        setOldImage(param.store.image);
      }
    })();
  }, []);

  const handleChooseImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) return notification('permission required to access camera roll', 'Error');

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setNewImage(true);
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

    if (!location) {
      return notification('Link google maps tidak boleh kosong', 'Error');
    } else if (location < 15) {
      return notification('Link google maps minimal 15 karakter', 'Error');
    } else if (location.length > 255) {
      return notification('Link google maps maksimal 255 karakter', 'Error');
    }

    if (!address) {
      return notification('Alamat tidak boleh kosong', 'Error');
    } else if (address.length < 5) {
      return notification('Alamat minimal 5 karakter', 'Error');
    } else if (address.length > 255) {
      return notification('Alamat maksimal 255 karakter', 'Error');
    }

    if (!chosenImage || !chosenImage?.uri) {
      return notification('Pilih gambar terlebih dahulu', 'Error');
    } else if (chosenImage.size > 5000000) {
      return notification('Ukuran gambar maksimal 5MB', 'Error');
    }

    if (!starRating) {
      return notification('Rating tidak boleh kosong', 'Error');
    } else if (starRating < 1) {
      return notification('Rating minimal 1', 'Error');
    } else if (starRating > 5) {
      return notification('Rating maksimal 5', 'Error');
    }

    setLoading(true);
    handleSave();
  }

  const handleSave = async () => {
    try {
      let url;

      if (newImage) {
        if (oldImage) await cloudFile.deleteFile(oldImage);

        const blob = await getBlobFroUri(chosenImage.uri);
        url = await cloudFile.uploadFile(blob);
      } else {
        url = oldImage;
      }

      await storeModel.updateStore(param.store.id, {
        image: url,
        name: locationName,
        rating: starRating,
        location,
        address,
      });

      navigation.replace('Dashboard');
    } catch (error) {
      console.log('error while save data', error);
      return notification('error while save data', 'Error');
    } finally {
      setLoading(false);
    }
  }

  const handleStarRating = (star) => {
    if (starRating === star) {
      setStarRating(0);
    } else {
      setStarRating(star);
    }
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.nav}>
          <TouchableOpacity onPress={() => navigation.replace('DetailShop', { param: { store: param.store } })}>
            <FontAwesomeIcon icon={faArrowLeft} size={20} color='#000' style={styles.icon1} />
          </TouchableOpacity>

          <Text style={styles.text1}>Edit Shop</Text>

          <TouchableOpacity onPress={validate} disabled={loading}>
            <Text style={styles.text3}>Update</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={{ flex: 1 }}>
        <TextInput
            style={styles.input}
            placeholder="Shop Name"
            value={locationName}
            editable={!loading}
            onChangeText={(text) => setLocationName(text)}
          />

          <TextInput
            style={styles.input}
            placeholder="Link Google Maps"
            value={location}
            editable={!loading}
            onChangeText={(text) => setLocation(text)}
          />

          <TextInput
            style={[styles.input, styles.description]}
            placeholder="Address"
            multiline={true}
            numberOfLines={4}
            value={address}
            editable={!loading}
            onChangeText={(text) => setAddress(text)}
          />

          <TouchableOpacity style={styles.card2} onPress={handleChooseImage} disabled={loading}>
            {chosenImage ? (
              <Image source={{ uri: chosenImage?.uri }} style={styles.image} />
            ) : (
              <Text style={styles.text2}>Choose Image</Text>
            )}
          </TouchableOpacity>

          <View style={[styles.star, { flexDirection: 'row', alignSelf: 'center' }]}>
            {[1, 2, 3, 4, 5].map((star) => (
              <TouchableOpacity key={star} onPress={() => handleStarRating(star)} disabled={loading}>
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
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}