import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faStar } from '@fortawesome/free-solid-svg-icons';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function Add({ navigation }) {
  const [shopName, setShopName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState(0);
  const [image, setImage] = useState(null);

  const handleChooseImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync();

    if (!result.cancelled) {
      setImage(result.uri);
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

  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <TouchableOpacity onPress={() => navigation.navigate('Dashboard1')}>
          <FontAwesomeIcon icon={faArrowLeft} size={20} color='#000' style={styles.icon1} />
        </TouchableOpacity>
        <Text style={styles.text1}>Add Shop</Text>
        <TouchableOpacity onPress={handleSave}>
            <Text style={styles.text3}>Save</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.input1}
        placeholder="Shop Name"
        value={shopName}
        onChangeText={(text) => setShopName(text)}
      />
      <TextInput
        style={styles.input2}
        placeholder="Link Google Maps"
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
          {image && <Image source={{ uri: image }} style={styles.image} />}
          <Text style={styles.text2}>Choose Image</Text>
        </View>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 10 }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <FontAwesomeIcon
            key={star}
            icon={faStar}
            size={27}
            color={star <= rating ? '#000' : '#ccc'}
            style={styles.icon2}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#efefef',
  },
  card1: {
    alignSelf: 'center',
    width: 390,
    height: 140,
    backgroundColor: 'white',
    marginTop: 20,
    borderRadius: 30,
  },
  card2: {
    alignSelf: 'center',
    width: 360,
    height: 200,
    backgroundColor: 'white',
    marginTop: 20,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  caard3: {
    alignSelf: 'center',
    width: 360,
    height: 260,
    backgroundColor: 'white',
    marginTop: 20,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignSelf: 'center',
    width: 340,
    height: 50,
    backgroundColor: 'green',
    borderRadius: 50,
    marginTop: 40,
    justifyContent: 'center',
  },
  icon1: {
    padding: 10,
    marginTop: 25,
    marginRight: 30,
  },
  icon2: {
    alignSelf: 'center',
    padding: 10,
    margin: 20,
  },
  text1: {
    fontSize: 23,
    color: 'black',
    marginTop: 20,
  },
  text2: {
    fontSize: 23,
    color: 'white',
    alignSelf: 'center',
  },
  text3: {
    fontSize: 23,
    color: 'green',
    alignSelf: 'center',
    marginTop: 22,
    marginLeft: 175
  },
  nav: {
    padding: 10,
    marginTop: 30,
    marginLeft: 15,
    flexDirection: 'row',
  },
  input1: {
    alignSelf: 'center',
    backgroundColor: 'white',
    width: 360,
    height: 50,
    borderRadius: 10,
    padding: 15,
    marginTop: 10,
  },
  input2: {
    alignSelf: 'center',
    backgroundColor: 'white',
    width: 360,
    height: 50,
    borderRadius: 10,
    padding: 15,
    marginTop: 20,
  },
  input3: {
    alignSelf: 'center',
    backgroundColor: 'white',
    width: 360,
    height: 90,
    borderRadius: 10,
    padding: 15,
    marginTop: 20,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
});
