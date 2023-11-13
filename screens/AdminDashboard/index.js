import React from 'react';
import styles from './styles';
import { storeModel } from '@models';
import { AuthContext } from '@contexts/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAdd, faLocationDot, faSignOut } from '@fortawesome/free-solid-svg-icons';
import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  RefreshControl,
  TouchableOpacity
} from 'react-native';

export default function AdminDashboard({ navigation }) {
  const [stores, setStores] = React.useState([]);
  const { setLoggedOut } = React.useContext(AuthContext);

  const handleRefresh = async () => {
    try {
      const stores = await storeModel.getStores();
      setStores(stores);
    } catch (error) {
      console.log(`error while get stores: ${error}`);
    }
  }

  React.useEffect(() => {
    handleRefresh();
  }, []);

  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.card1}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.text1}>Data Lokasi</Text>
          <TouchableOpacity onPress={() => setLoggedOut(navigation)}>
            <FontAwesomeIcon icon={faSignOut} size={20} color='#000' style={styles.icon1}/>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.scroll} refreshControl={
        <RefreshControl
          refreshing={false}
          onRefresh={handleRefresh}
        />
      }>
        <View style={styles.content}>
          <Text style={styles.text2}>Total Data: {stores.length}</Text>

          {stores && stores.map((store, index) => (
            <View key={index} style={styles.card2}>
              <TouchableOpacity onPress={() => navigation.navigate('AdminDetail', { param: { store: store } })}>
                <View style={{flexDirection: 'row'}}>
                  <FontAwesomeIcon icon={faLocationDot} size={30} color='#ff7953' style={styles.icon2}/>
                  <Text style={styles.text3}>{store.name}</Text>
                </View>

                <Text style={[styles.text4, { opacity: 0.6 }]}>
                  {store.address}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>

      <TouchableOpacity onPress={() => navigation.navigate('AdminAddShop')} style={styles.floatingButton}>
        <FontAwesomeIcon icon={faAdd} size={25} color='white' style={styles.icon3}/>
      </TouchableOpacity>
    </SafeAreaView>
  )
}