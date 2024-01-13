import styles from './styles';
import PropTypes from "prop-types";
import { storeModel } from '@models';
import { MainLayout } from '@layouts';
import { CustomTextInput } from '@components';
import ViewSlider from 'react-native-view-slider';
import { AuthContext } from '@contexts/AuthContext';
import LogoGetukDetail from '@images/getukdetail.png';
import { useState, useEffect, useContext } from 'react';
import { cloudFile, getBlobFromUri, notification } from '@helpers';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faStar } from '@fortawesome/free-solid-svg-icons';
import { MediaTypeOptions, launchImageLibraryAsync } from 'expo-image-picker';
import {
  Text,
  View,
  Alert,
  Image,
  Keyboard,
  ScrollView,
  TouchableOpacity
} from 'react-native';

const EditShop = ({ route, navigation }) => {
  const { store } = route.params.param;

  if (!store) {
    notification('store not found', 'Error');
    return navigation.replace('Dashboard');
  }

  const { loading, ethernet, setLoading } = useContext(AuthContext);
  const [state, setState] = useState({
    oldImage: [],
    chosenImage: [],
    deletedImage: [],
    address: store?.address,
    shopDetail: store?.detail,
    location: store?.location,
    starRating: store?.rating,
    locationName: store?.name,
  });

  const handleState = (name, value) => {
    setState((prevValues) => ({ ...prevValues, [name]: value }));
  }

  useEffect(() => {
    (async () => {
      try {
        if (!ethernet.isInternetReachable) return notification('Tidak ada koneksi internet', 'Error');
  
        if (store?.image.length < 1) return;
        
        const transformedImage = [];
  
        for (let i = 0; i < store.image.length; i++) {
          const url = await cloudFile.getFile(store.image[i]);
          transformedImage.push(url);
        }
  
        handleState('oldImage', transformedImage);
      } catch (error) {
        notification(`error while get image: ${error}`, 'Error');
      }
    })();
  }, []);

  const handleChooseImage = async () => {
    try {
      const result = await launchImageLibraryAsync({
        mediaTypes: MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (result.canceled) return;

      const images = state.chosenImage;
      images.push(result.assets[0]);
      handleState('chosenImage', images);
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

    if (!state.shopDetail) return notification('Detail toko tidak boleh kosong', 'Error');
    else if (state.shopDetail.length < 5) return notification('Detail toko minimal 5 karakter', 'Error');
    else if (state.shopDetail.length > 255) return notification('Detail toko maksimal 255 karakter', 'Error');

    if (!state.starRating) return notification('Rating tidak boleh kosong', 'Error');
    else if (state.starRating < 1) return notification('Rating minimal 1', 'Error');
    else if (state.starRating > 5) return notification('Rating maksimal 5', 'Error');

    setLoading(true);
    handleSave();
  }

  const transformImage = async () => {
    try {
      const images = state.chosenImage;
      const imageList = [];

      for (let i = 0; i < images.length; i++) {
        const image = images[i];
        const blob = await getBlobFromUri(image?.uri);
        const url = await cloudFile.uploadFile(blob);
        imageList.push(url);
      }

      return imageList;
    } catch (error) {
      notification('error while transform image', 'Error');
      console.log(`error while transform image: ${error}`);
    }
  }

  const handleSave = async () => {
    try {
      if (!ethernet.isInternetReachable) return notification('Tidak ada koneksi internet', 'Error');

      let imageList = await transformImage();
      if (state.oldImage.length > 0) {
        if (imageList.length > 0) imageList = [...imageList, ...state.oldImage];
        else imageList = state.oldImage;
      }

      if (state.deletedImage.length > 0) {
        for (let i = 0; i < state.deletedImage.length; i++) {
          await cloudFile.deleteFile(state.deletedImage[i]);
        }
      }

      await storeModel.updateStore(store?.id, {
        image: imageList,
        name: state.locationName,
        rating: state.starRating.toString(),
        location: state.location,
        address: state.address,
        detail: state.shopDetail
      });

      navigation.replace('Dashboard');
    } catch (error) {
      console.log('error while save data', error);
      return notification('error while save data', 'Error');
    } finally {
      setLoading(false);
    }
  }

  const HandleDelete = (index, type) => {
    const validType = ['old', 'chosen'];
    if (!validType.includes(type)) return notification('Error while deleting image', 'Error');

    const list = state[type + 'Image'];
    const images = list;
    const image = list[index];
    if (!image) return;

    handleState('deletedImage', [...state.deletedImage, image]);
    images.splice(index, 1);
    handleState(`${type}Image`, images);
  }

  const ConfirmationDelete = (id, type) => {
    Alert.alert(
      'Konfirmasi',
      'Apakah kamu yakin ingin menghapus foto ini?\n\n*Data yang sudah dihapus tidak dapat dikembalikan',
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'OK',
          onPress: () => HandleDelete(id, type)
        }
      ]
    );
  }

  const handleStarRating = (star) => {
    if (state.starRating === star) handleState('starRating', 0);
    else handleState('starRating', star);
  }

  return (
    <MainLayout containerStyle={styles.container}>
      <View style={styles.nav}>
        <TouchableOpacity onPress={() => navigation.replace('DetailShop', { param: { store: store } })}>
          <FontAwesomeIcon icon={faArrowLeft} size={20} color='#000' style={styles.backIcon} />
        </TouchableOpacity>

        <Text style={styles.screenTitle}>Edit Shop</Text>

        <TouchableOpacity onPress={validate} disabled={loading}>
          <Text style={styles.updateButton}>Update</Text>
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

        <CustomTextInput
          value={state.shopDetail}
          editable={!loading}
          multiline={true}
          placeholder="Shop Detail"
          scrollEnabled={true}
          onChangeText={(text) => handleState('shopDetail', text)}
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

        {(state.chosenImage?.length > 0 || state.oldImage?.length > 0) ? (
          <ViewSlider
            style={styles.slider}
            slideCount={state.chosenImage.length + state.oldImage.length}
            renderSlides={
              <>
                {state.chosenImage?.map((image, index) => (
                  <TouchableOpacity style={styles.imageCard} onPress={() => ConfirmationDelete(index, 'chosen')}>
                    <Image source={{ uri: image?.uri }} style={styles.image} />
                  </TouchableOpacity>
                ))}
                {state.oldImage?.map((image, index) => (
                  <TouchableOpacity style={styles.imageCard} onPress={() => ConfirmationDelete(index, 'old')}>
                    <Image source={{ uri: image }} style={styles.image} />
                  </TouchableOpacity>
                ))}
              </>
            }
          />
        ) : (
          <View style={styles.imageCard}>
            <Image source={LogoGetukDetail} style={styles.image} />
          </View>
        )}

        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
          <TouchableOpacity onPress={handleChooseImage} disabled={loading}>
            <View style={[styles.button, { backgroundColor: 'green' }]}>
              <Text style={styles.buttonText}>Choose Image</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </MainLayout>
  )
}

EditShop.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

EditShop.defaultProps = {
  route: {
    params: {
      param: {
        store: {}
      }
    }
  },
  navigation: {
    replace: () => {}
  },
};

export default EditShop;
