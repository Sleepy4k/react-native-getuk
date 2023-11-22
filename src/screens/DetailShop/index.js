import React from 'react';
import styles from './styles';
import { storeModel } from '@models';
import { cloudFile, notification } from '@helpers';
import { AuthContext } from '@contexts/AuthContext';
import LogoGetukDetail from '@images/getukdetail.png';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faStar, faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import {
  Text,
  View,
  Image,
  Linking,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

const handleDelete = async (id, navigation) => {
  try {
    const data = await storeModel.deleteStore(id);
    await cloudFile.deleteFile(data?.image);
    navigation.replace('Dashboard');
  } catch (error) {
    console.log(`error while delete store: ${error}`);
  }
}

const RenderStore = ({ store }) => {
  if (!store) return notification('store not found', 'Error');

  return (
    <View>
      <View style={styles.card1}>
        <View style={{flexDirection:'row'}}>
          <Text style={styles.text2}>{store.name}</Text>
        </View>

        <Text style={[styles.text4, { opacity: 0.6 }]}>
          {store.address}
        </Text>

        <TouchableOpacity onPress={() => Linking.openURL(store.location)}>
          <FontAwesomeIcon icon={faLocationArrow} size={30} color='#000' style={styles.icon3} />
        </TouchableOpacity>

        <Text style={{ opacity: 0.6, fontSize: 12, alignSelf: 'center', marginTop: 10}}>Press the icon to see the location</Text>
      </View>

      <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 10 }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <FontAwesomeIcon
            key={star}
            icon={faStar}
            size={27}
            color={star <= store.rating ? '#000' : '#ccc'}
            style={styles.icon2}
          />
        ))}
      </View>
    </View>
  )
}

export default function DetailShop({ route, navigation }) {
  const { store } = route.params.param;
  const { userData } = React.useContext(AuthContext);
  const [image, setImage] = React.useState(LogoGetukDetail);

  React.useEffect(() => {
    (async () => {
      try {
        const url = await cloudFile.getFile(store.image);
        setImage({ uri: url });
      } catch (error) {
        console.log(`error while get image: ${error}`);
      }
    })();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.nav}>
        <TouchableOpacity onPress={() => navigation.replace('Dashboard')}>
          <FontAwesomeIcon icon={faArrowLeft} size={20} color='#000' style={styles.icon1} />
        </TouchableOpacity>

        <Text style={styles.text1}>Detail</Text>
      </View>

      <ScrollView>
        <Image style={styles.Image} source={image}/>

        <RenderStore store={store} />

        {userData && userData?.role == 'admin' && (
          <View style={{flexDirection:'row', alignSelf: 'center'}}>
            <TouchableOpacity onPress={() => navigation.navigate('EditShop', { param: { store: store } })}>
              <View style={styles.button1}>
                <Text style={styles.text5}>Edit</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => handleDelete(store.id, navigation)}>
              <View style={styles.button2}>
                <Text style={styles.text5}>Delete</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  )
}