import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faLocationArrow, faStar } from '@fortawesome/free-solid-svg-icons';
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import React, { useState } from 'react';

export default function Edit({ navigation }) {
    const [chosenImage, setChosenImage] = React.useState(require('../assets/getukdetail.png'));
    const [locationName, setLocationName] = React.useState('Pusat Getuk Goreng Tela Asli Sokaraja');
    const [starRating, setStarRating] = React.useState('4');
    const [address, setAddress] = useState("Jl.Jend.Sudirman,No.155,Sokaraja Tengah,Dusun 1, Sokaraja Kulon,Kec.Banyumas, Kabupaten Banyumas, Jawa tengah 53181");

    const handleChooseImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setChosenImage({ uri: result.uri });
        }
    };

    const handleSave = () => {
        // Implementasi penyimpanan data (misalnya: kirim ke server atau menyimpan lokal)
        console.log('Data tersimpan:', {
            image: chosenImage,
            locationName,
            starRating,
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.nav}>
                <TouchableOpacity onPress={() => navigation.navigate('')}>
                    <FontAwesomeIcon icon={faArrowLeft} size={20} color='#000' style={styles.icon1} />
                </TouchableOpacity>
                <Text style={styles.text1}>Edit</Text>
            </View>
            <TouchableOpacity onPress={handleChooseImage}>
                <Image style={styles.Image} source={chosenImage} />
            </TouchableOpacity>
            <View style={styles.card1}>
                <View style={{ flexDirection: 'row' }}>
                    <TextInput
                        style={styles.textInput}
                        value={locationName}
                        onChangeText={(text) => setLocationName(text)}
                    />
                    <FontAwesomeIcon icon={faStar} size={13} color='#000' style={styles.icon2} />
                    <TextInput
                        style={styles.textInput}
                        value={starRating}
                        onChangeText={(text) => setStarRating(text)}
                    />
                </View>
                <TextInput
                    style={[styles.textInput, styles.text4, { opacity: 0.6 }]}
                    value={address}
                    onChangeText={(text) => setAddress(text)}
                />
                <TouchableOpacity onPress={handleSave}>
                    <FontAwesomeIcon icon={faLocationArrow} size={27} color='#000' style={styles.icon3} />
                </TouchableOpacity>
            </View>
            <View style={styles.card2}>
                <TouchableOpacity onPress={handleSave}>
                    <View style={styles.button}>
                        <Text style={styles.text5}>Save</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    height: 960,
    backgroundColor: '#efefef',
  },
  Image: {
    marginTop: 20,
    width: 390,
    height: 390,
    alignSelf: 'center',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
  },
  card1: {
    alignSelf: 'center',
    width: 390,
    height: 200,
    backgroundColor: 'white',
    marginTop: 30,
    borderRadius: 10,
    padding: 10,
  },
  card2: {
    alignSelf: 'center',
    width: 390,
    height: 100,
    backgroundColor: 'white',
    marginTop: 30,
    borderRadius: 10,
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
    marginTop: 15,
    marginLeft: 30,
  },
  icon3: {
    alignSelf: 'center',
    padding: 10,
    margin: 20,
  },
  text1: {
    fontSize: 23,
    color: 'black',
    marginTop: 20,
  },
  textInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 5,
    borderRadius: 5,
    padding: 5,
  },
  text4: {
    padding: 11,
    marginTop: -5,
    fontSize: 15,
  },
  text5: {
    color: 'white',
    fontSize: 20,
    alignSelf: 'center',
    margin: 10,
  },
  nav: {
    padding: 10,
    marginTop: 30,
    marginLeft: 15,
    flexDirection: 'row',
  },
});
