import React from 'react';
import styles from './styles';
import { debounce } from 'lodash';
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

  React.useEffect(() => {
    handleRefresh();
  }, []);

  const displayedStores = (stores && !searchShop && stores.length > 0) ? stores : filteredShop;

  const searchFilter = async (textParam) => {
    const stores = await storeModel.searchStore(textParam);
    setSearchShop(textParam);
    setFilteredShop(stores);
    setTotalData(stores.length);
  }

  const handleSearch = React.useCallback(debounce(searchFilter, 500), []);

  return(
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.headerCard}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.headerTitle}>Data Lokasi</Text>
            <TouchableOpacity onPress={() => setLoggedOut(navigation)}>
              <FontAwesomeIcon icon={faSignOut} size={20} color='#000' style={styles.logoutIcon} />
            </TouchableOpacity>
          </View>

          <TextInput
            style={styles.searchInput}
            placeholder="Search Shop"
            onChangeText={handleSearch}
          />
        </View>

        <ScrollView style={{ flex: 1 }} refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={handleRefresh}
          />
        }>
          <Text style={styles.totalData}>Total Data: {totalData}</Text>

          {displayedStores.map((store, index) => (
            <View key={index} style={styles.shopCard}>
              <TouchableOpacity style={styles.shopBox} onPress={() => navigation.navigate('DetailShop', { param: { store: store } })}>
                <View style={{ flexDirection: 'row' }}>
                  <FontAwesomeIcon icon={faLocationDot} size={30} color='#ff7953' style={styles.locationIcon} />
                  <Text style={styles.shopName}>{store.name}</Text>
                </View>

                <Text style={[styles.shopAddress, { opacity: 0.6 }]}>
                  {store.address}
                </Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        {userData && userData?.role == 'admin' && (
          <TouchableOpacity onPress={() => navigation.navigate('AddShop')} style={styles.floatingButton}>
            <FontAwesomeIcon icon={faAdd} size={25} color='white' style={styles.floatingIcon} />
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  )
}