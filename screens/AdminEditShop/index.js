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

export default function AdminEditShop({ route, navigation }) {
  const param = route.params.param;
  
  const [loading, setLoading] = React.useState(false);
  const [newImage, setNewImage] = React.useState(false);
  const [oldImage, setOldImage] = React.useState(null);
  const [chosenImage, setChosenImage] = React.useState({});
  const [address, setAddress] = React.useState(param.store.address);
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
      setNewImage(true);
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
      let url;

      if (newImage) {
        if (oldImage) await cloudFile.deleteFile(oldImage);

        const blob = await getBlobFroUri(chosenImage.uri);
        url = await cloudFile.uploadFile(blob, chosenImage.type);
      } else {
        url = oldImage;
      }

      await storeModel.updateStore(param.store.id, {
        image: url,
        name: locationName,
        rating: starRating,
        address,
      });

      navigation.replace('AdminDashboard');
    } catch (error) {
      console.log('error while save data', error);
      alert('error while save data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.nav}>
        <TouchableOpacity onPress={() => navigation.navigate('AdminDetail', { param: { store: param.store } })}>
          <FontAwesomeIcon icon={faArrowLeft} size={20} color='#000' style={styles.icon1} />
        </TouchableOpacity>

        <Text style={styles.text1}>Edit</Text>
      </View>

      <TouchableOpacity onPress={handleChooseImage} disabled={loading}>
        <Image style={styles.Image} source={chosenImage} />
      </TouchableOpacity>

      <View style={styles.card1}>
        <View style={{ flexDirection: 'row' }}>
          <TextInput
            style={styles.textInput}
            value={locationName}
            editable={!loading}
            onChangeText={(text) => setLocationName(text)}
          />

          <FontAwesomeIcon icon={faStar} size={13} color='#000' style={styles.icon2} />
          <TextInput
            style={styles.textInput}
            value={starRating}
            editable={!loading}
            onChangeText={(text) => setStarRating(text)}
          />
        </View>

        <TextInput
          style={[styles.textInput, styles.text4, { opacity: 0.6 }]}
          value={address}
          editable={!loading}
          onChangeText={(text) => setAddress(text)}
        />
      </View>

      <View style={styles.card2}>
        <TouchableOpacity onPress={validate} disabled={loading}>
          <View style={styles.button}>
            <Text style={styles.text5}>Update</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}