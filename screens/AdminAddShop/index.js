import React from 'react';
import * as ImagePicker from 'expo-image-picker';
import styles from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faStar } from '@fortawesome/free-solid-svg-icons';
import {
  Text,
  View,
  Image,
  TextInput,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';

export default function AdminAddShop({ navigation }) {
  const [shopName, setShopName] = React.useState('');
  const [location, setLocation] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [rating, setRating] = React.useState(0);
  const [image, setImage] = React.useState([]);

  const handleChooseImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync();

    if (!result.canceled) {
      setImage(result.assets[0]);
    }
  };

  const handleSave = () => {
    // Implementasi penyimpanan data (misalnya: kirim ke server atau menyimpan lokal)
    console.log('Data tersimpan:', {
      shopName,
      location,
      description,
      rating,
      image,
    });

    // Navigasi kembali ke Dashboard1
    navigation.navigate('Dashboard1');
  };

  const handleStar = (number) => {
    console.log(`Jumlah bintang: ${number}`);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.nav}>
        <TouchableOpacity onPress={() => navigation.navigate('AdminDashboard')}>
          <FontAwesomeIcon icon={faArrowLeft} size={20} color='#000' style={styles.icon1} />
        </TouchableOpacity>

        <Text style={styles.text1}>Add Shop</Text>
      </View>

      <TextInput
        style={styles.input1}
        placeholder="Shop Name"
        value={shopName}
        onChangeText={(text) => setShopName(text)}
      />

      <TextInput
        style={styles.input2}
        placeholder="Location"
        value={location}
        onChangeText={(text) => setLocation(text)}
      />

      <TextInput
        style={styles.input3}
        placeholder="Description"
        multiline={true}
        numberOfLines={4}
        value={description}
        onChangeText={(text) => setDescription(text)}
      />

      <TouchableOpacity onPress={handleChooseImage}>
        <View style={styles.card2}>
          {image && <Image source={{ uri: image?.uri }} style={styles.image} />}
          <Text style={styles.text2}>Choose Image</Text>
        </View>
      </TouchableOpacity>

      <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 10 }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <TouchableOpacity key={star} onPress={() => handleStar(star)}>
            <FontAwesomeIcon
              key={star}
              icon={faStar}
              size={27}
              color={star <= rating ? '#000' : '#ccc'}
              style={styles.icon2}
            />
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.card1}>
        <TouchableOpacity onPress={handleSave}>
          <View style={styles.button}>
            <Text style={styles.text2}>Create</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}