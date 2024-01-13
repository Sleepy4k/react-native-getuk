import styles from './styles';
import { debounce } from 'lodash';
import PropTypes from "prop-types";
import { MainLayout } from '@layouts';
import { wait, notification } from '@helpers';
import { storeModel, reviewModel } from '@models';
import { AuthContext } from '@contexts/AuthContext';
import { useState, useEffect, useContext, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAdd, faLocationDot, faSignOut } from '@fortawesome/free-solid-svg-icons';
import {
  Text,
  View,
  Alert,
  TextInput,
  ScrollView,
  RefreshControl,
  TouchableOpacity
} from 'react-native';

const Dashboard = ({ navigation }) => {
  const [stores, setStores] = useState([]);
  const [totalData, setTotalData] = useState(0);
  const [searchShop, setSearchShop] = useState(null);
  const [filteredShop, setFilteredShop] = useState([]);
  const { userData, loading, ethernet, setLoading, setLoggedOut } = useContext(AuthContext);

  const handleRefresh = useCallback(() => {
    setLoading(true);
    wait(2000)
      .then(() => setLoading(false))
      .catch((error) => console.log(`error while refresh: ${error}`))
      .finally(() => {
        getCurrentData();
        setLoading(false);
      });
  }, []);

  const getCurrentData = async () => {
    try {
      if (!ethernet.isInternetReachable) return notification('Tidak ada koneksi internet', 'Error');

      let stores;

      if (searchShop) {
        stores = await storeModel.searchStore(searchShop);
        setStores([]);
        setFilteredShop(stores);
      } else {
        stores = await storeModel.getStores();
        setStores(stores);
        setFilteredShop([]);
      }

      setTotalData(stores?.length);
    } catch (error) {
      notification('error while get stores', 'Error');
      console.log(`error while get stores: ${error}`);
    }
  }

  useEffect(() => {
    (async () => {
      await getCurrentData();
    })()
  }, []);

  const displayedStores = (stores && !searchShop && stores.length > 0) ? stores : filteredShop;

  const searchFilter = async (textParam) => {
    try {
      const stores = await storeModel.searchStore(textParam);
      setSearchShop(textParam);
      setFilteredShop(stores);
      setTotalData(stores?.length);
    } catch (error) {
      notification('error while search store', 'Error');
      console.log(`error while search store: ${error}`);
    }
  }

  const handleSearch = useCallback(debounce(searchFilter, 500), []);

  const ConfirmationLogout = () => {
    Alert.alert(
      'Konfirmasi',
      'Apakah kamu yakin ingin keluar?\n\n*Data yang belum tersimpan akan hilang',
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'OK',
          onPress: () => setLoggedOut(navigation)
        }
      ]
    );
  }

  return(
    <MainLayout containerStyle={styles.container} enableLoader={false}>
      <View style={styles.headerCard}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.headerTitle}>Data Lokasi</Text>
          <TouchableOpacity onPress={ConfirmationLogout} disabled={loading}>
            <FontAwesomeIcon icon={faSignOut} size={20} color='#000' style={styles.logoutIcon} />
          </TouchableOpacity>
        </View>

        <TextInput
          editable={!loading}
          style={styles.searchInput}
          placeholder="Search Shop"
          onChangeText={handleSearch}
          disabled={(!ethernet.isConnected || !ethernet.isInternetReachable)}
        />
      </View>

      <ScrollView style={{ flex: 1 }} refreshControl={
        <RefreshControl
          refreshing={loading}
          onRefresh={handleRefresh}
        />
      }>
        <Text style={styles.totalData}>Total Data: {totalData}</Text>

        {displayedStores.map((store, index) => (
          <View key={index} style={styles.shopCard}>
            <TouchableOpacity style={styles.shopBox} onPress={() => navigation.navigate('DetailShop', { param: { store: store } })} disabled={loading}>
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
        <TouchableOpacity onPress={() => navigation.navigate('AddShop')} style={styles.floatingButton} disabled={loading}>
          <FontAwesomeIcon icon={faAdd} size={25} color='white' style={styles.floatingIcon} />
        </TouchableOpacity>
      )}
    </MainLayout>
  )
}

Dashboard.propTypes = {
  navigation: PropTypes.object.isRequired,
};

Dashboard.defaultProps = {
  navigation: {
    navigate: () => {}
  },
};

export default Dashboard;
