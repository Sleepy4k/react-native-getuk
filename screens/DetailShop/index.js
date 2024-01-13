import styles from './styles';
import PropTypes from "prop-types";
import { MainLayout } from '@layouts';
import { storeModel, reviewModel } from '@models';
import ViewSlider from 'react-native-view-slider';
import { cloudFile, notification } from '@helpers';
import { AuthContext } from '@contexts/AuthContext';
import LogoGetukDetail from '@images/getukdetail.png';
import { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faStar, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import {
  Text,
  View,
  Alert,
  Image,
  Linking,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

const DetailShop = ({ route, navigation }) => {
  const { store } = route.params.param;

  if (!store) {
    notification('store not found', 'Error');
    return navigation.replace('Dashboard');
  }

  const [images, setImages] = useState([]);
  const [totalReview, setTotalReview] = useState(0);
  const [calculatedRating, setCalculatedRating] = useState(0);
  const { userData, loading, ethernet, setLoading } = useContext(AuthContext);

  const getStoreRating = async () => {
    const userRating = await reviewModel.ratingReview(store.id);

    totalData = userRating.totalData + 1;
    totalRating = userRating.totalRating + Number(store?.rating);
    calculate = Math.round(totalRating / totalData);

    setTotalReview(totalData);
    setCalculatedRating(calculate);
  }

  useEffect(() => {
    (async () => {
      try {
        if (!ethernet.isInternetReachable) return notification('Tidak ada koneksi internet', 'Error');

        const transformedImage = [];

        for (let i = 0; i < store.image.length; i++) {
          const url = await cloudFile.getFile(store.image[i]);
          transformedImage.push(url);
        }

        setImages(transformedImage);
    
        await getStoreRating();
      } catch (error) {
        notification(`error: ${error}`, "info");
        console.log(`error while get image: ${error}`);
      }
    })();
  }, []);

  const handleDelete = async () => {
    if (!ethernet.isInternetReachable) return notification('Tidak ada koneksi internet', 'Error');

    setLoading(true);

    try {
      const data = await storeModel.deleteStore(store.id);
      if (data.image.length < 1) return navigation.replace('Dashboard');

      for (let i = 0; i < data.image.length; i++) {
        await cloudFile.deleteFile(data.image[i]);
      }

      await reviewModel.massDeleteReview(store?.id);

      navigation.replace('Dashboard');
    } catch (error) {
      notification(`error while delete store: ${error}`, "Info");
      console.log(`error while delete store: ${error}`);
    } finally {
      setLoading(false);
    }
  }

  const ConfirmationDelete = () => {
    Alert.alert(
      'Konfirmasi',
      'Apakah kamu yakin ingin menghapus toko ini?\n\n*Data yang sudah dihapus tidak dapat dikembalikan',
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'OK',
          onPress: handleDelete
        }
      ]
    );
  }

  return (
    <MainLayout containerStyle={styles.container}>
      <View style={styles.nav}>
        <TouchableOpacity onPress={() => navigation.replace('Dashboard')} disabled={loading}>
          <FontAwesomeIcon icon={faArrowLeft} size={20} color='#000' style={styles.backIcon} />
        </TouchableOpacity>

        <Text style={styles.screenTitle}>Detail Toko</Text>
      </View>

      <ScrollView style={{ flex: 1 }}>
        {images.length > 0 ? (
          <ViewSlider
            style={styles.slider}
            slideCount={images.length}
            renderSlides={
              <>
                {images.map((image) => (
                  <Image source={{ uri: image }} style={styles.imageCard} />
                ))}
              </>
            }
          />
        ) : (
          <Image style={styles.imageCard} source={LogoGetukDetail}/>
        )}

        <View style={styles.starCard}>
          {[1, 2, 3, 4, 5].map((star) => (
            <FontAwesomeIcon
              key={star}
              icon={faStar}
              size={27}
              color={star <= calculatedRating ? '#000' : '#ccc'}
              style={styles.starIcon}
            />
          ))}
        </View>

        <View style={styles.shopCard}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.shopTitle}>{store.name}</Text>
          </View>

          <Text style={styles.shopDetail}>{store.detail}</Text>
          <Text style={styles.spacingCol}></Text>
        </View>

        <View style={styles.shopCard}>
          <Text style={styles.shopAddress}>{store.address}</Text>

          <TouchableOpacity onPress={() => Linking.openURL(store.location)} disabled={loading}>
            <FontAwesomeIcon icon={faLocationArrow} size={30} color='#000' style={styles.mapIcon} />
          </TouchableOpacity>

          <Text style={styles.mapDescription}>Press the icon to see the location</Text>
        </View>

        {userData && (userData?.role == 'admin' ? (
          <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <TouchableOpacity onPress={() => navigation.navigate('EditShop', { param: { store: store } })} disabled={loading}>
              <View style={[styles.button, { backgroundColor: 'green' }]}>
                <Text style={styles.buttonText}>Edit</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('ReviewShop', { param: { store: store } })} disabled={loading}>
              <View style={[styles.button, { backgroundColor: 'blue' }]}>
                <Text style={styles.buttonText}>Review</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={ConfirmationDelete} disabled={loading}>
              <View style={[styles.button, { backgroundColor: 'red' }]}>
                <Text style={styles.buttonText}>Delete</Text>
              </View>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <TouchableOpacity onPress={() => navigation.replace('ReviewShop', { param: { store: store } })} disabled={loading}>
              <View style={[styles.button, { backgroundColor: 'blue' }]}>
                <Text style={styles.buttonText}>Review</Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </MainLayout>
  )
}

DetailShop.propTypes = {
  route: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

DetailShop.defaultProps = {
  route: {
    params: {
      param: {
        store: {}
      }
    }
  },
  navigation: {
    replace: () => {},
    navigate: () => {}
  },
};

export default DetailShop;
