import React from 'react';
import styles from './styles';
import {debounce} from 'lodash';
import { storeModel } from '@models';
import { AuthContext } from '@contexts/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAdd, faLocationDot, faSignOut } from '@fortawesome/free-solid-svg-icons';
import {
  Text,
  View,
  TextInput,
  ScrollView,
  SafeAreaView,
  RefreshControl,
  TouchableOpacity
} from 'react-native';

export default function Dashboard({ navigation }) {
  const [stores, setStores] = React.useState([]);
  const [totalData, setTotalData] = React.useState(0);
  const [searchShop, setSearchShop] = React.useState(null);
  const [filteredShop, setFilteredShop] = React.useState([]);
  const { userData, setLoggedOut } = React.useContext(AuthContext);

  const handleRefresh = async () => {
    try {
      let stores;

      if (searchShop) {
        stores = await storeModel.searchStore(searchShop);
        setFilteredShop(stores);
      } else {
        stores = await storeModel.getStores();
        setStores(stores);
      }

      setTotalData(stores.length);
    } catch (error) {
      console.log(`error while get stores: ${error}`);
    }
  }

  const searchFilter = async (textParam) => {
    const stores = await storeModel.searchStore(textParam);
    setSearchShop(textParam);
    setFilteredShop(stores);
    setTotalData(stores.length);
  }

  const handleSearch = React.useCallback(debounce(searchFilter, 500), []);

  React.useEffect(() => {
    handleRefresh();
  }, []);

  return(
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.card1}>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.text1}>Data Lokasi</Text>
            <TouchableOpacity onPress={() => setLoggedOut(navigation)}>
              <FontAwesomeIcon icon={faSignOut} size={20} color='#000' style={styles.icon1}/>
            </TouchableOpacity>
          </View>

          <TextInput style={styles.input1} placeholder="Search Shop" onChangeText={handleSearch}></TextInput>
        </View>

        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flex: 1 }} refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={handleRefresh}
          />
        }>
          <View style={styles.content}>
            <Text style={styles.text2}>Total Data: {totalData}</Text>

            {(stores && !searchShop && stores.length > 0) ? (
              stores.map((store, index) => (
                <View key={index} style={styles.card2}>
                  <TouchableOpacity style={styles.shopBox} onPress={() => navigation.navigate('DetailShop', { param: { store: store } })}>
                    <View style={{ flexDirection: 'row' }}>
                      <FontAwesomeIcon icon={faLocationDot} size={30} color='#ff7953' style={styles.icon2}/>
                      <Text style={styles.text3}>{store.name}</Text>
                    </View>

                    <Text style={[styles.text4, { opacity: 0.6 }]}>
                      {store.address}
                    </Text>
                  </TouchableOpacity>
                </View>
              ))
            ) : (
              filteredShop.map((store, index) => (
                <View key={index} style={styles.card2}>
                  <TouchableOpacity style={styles.shopBox} onPress={() => navigation.navigate('DetailShop', { param: { store: store } })}>
                    <View style={{flexDirection: 'row'}}>
                      <FontAwesomeIcon icon={faLocationDot} size={30} color='#ff7953' style={styles.icon2}/>
                      <Text style={styles.text3}>{store.name}</Text>
                    </View>

                    <Text style={[styles.text4, { opacity: 0.6 }]}>
                      {store.address}
                    </Text>
                  </TouchableOpacity>
                </View>
              ))
            )}
          </View>
        </ScrollView>

        {userData && userData?.role == 'admin' && (
          <TouchableOpacity onPress={() => navigation.navigate('AddShop')} style={styles.floatingButton}>
            <FontAwesomeIcon icon={faAdd} size={25} color='white' style={styles.icon3}/>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  )
}