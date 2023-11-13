import React from 'react';
import styles from './styles';
import { cloudFile } from '@helpers';
import LogoGetukDetail from '@assets/getukdetail.png';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faStar } from '@fortawesome/free-solid-svg-icons';
import {
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity, 
} from 'react-native';

const RenderStore = ({ store }) => {
  if (!store) {
    alert('store not found');
    return;
  };

  return (
    <View style={styles.card1}>
      <View style={{flexDirection:'row'}}>
        <Text style={styles.text2}>{store.name}</Text>
        <FontAwesomeIcon icon={faStar} size={13} color='#000' style={styles.icon2} />
        <Text style={styles.text3}>{store.rating}</Text>
      </View>

      <Text style={[styles.text4, { opacity: 0.6 }]}>
        {store.address}
      </Text>
    </View>
  )
}

export default function UserDetail({ route, navigation }) {
  const { store } = route.params.param;
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
        <TouchableOpacity onPress={() => navigation.navigate('UserDashboard')}>
          <FontAwesomeIcon icon={faArrowLeft} size={20} color='#000' style={styles.icon1} />
        </TouchableOpacity>

        <Text style={styles.text1}>Detail</Text>
      </View>

      <Image style={styles.Image} source={image}/>

      <RenderStore store={store} />
    </SafeAreaView>
  )
}