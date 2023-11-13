import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft, faLocation, faLocationArrow, faLocationCrosshairs, faLocationPin, faLocationPinLock, faStar } from '@fortawesome/free-solid-svg-icons';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
  SocialIcon,
  ImageBackground,   
} from 'react-native';

export default function DetailAdmin({navigation}) {
    return(
        <View style={styles.container}>
            <View style={styles.nav}>
            <TouchableOpacity onPress={() => navigation.navigate('Dashboard1')}>
                <FontAwesomeIcon icon={faArrowLeft} size={20} color='#000' style={styles.icon1}/>
            </TouchableOpacity>
                <Text style={styles.text1}>Detail</Text>
            </View>
            <Image style={styles.Image} source={require('../assets/getukdetail.png')}/>
            <View style={styles.card1}>
            <View style={{flexDirection:'row'}}>
                <Text style={styles.text2}>Pusat Getuk Goreng Tela Asli Sokaraja</Text>
                <FontAwesomeIcon icon={faStar} size={13} color='#000' style={styles.icon2}/>
                <Text style={styles.text3}>4</Text>
            </View>
            <Text style={[styles.text4, { opacity: 0.6 }]}>Jl.Jend.Sudirman,No.155,Sokaraja Tengah,Dusun 1,
                Sokaraja Kulon,Kec.Banyumas, Kabupaten Banyumas, Jawa tengah 53181
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('Dashboard1')}>
            <FontAwesomeIcon icon={faLocationArrow} size={27} color='#000' style={styles.icon3}/>
            </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row', alignSelf: 'center'}}>
            <TouchableOpacity onPress={() => navigation.navigate('Edit')}>
            <View style={styles.button1}>
                <Text style={styles.text5}>Edit</Text>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>
            <View style={styles.button2}>
                <Text style={styles.text5}>Delete</Text>
            </View>
            </TouchableOpacity>
                
            </View>
            

        </View>
    )
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
      button1: {
        marginTop: 100,
        width: 100,
        height: 40,
        backgroundColor: 'green',
        margin: 50,
        borderRadius: 10,
      },
      button2: {
        marginTop: 100,
        width: 100,
        height: 40,
        backgroundColor: 'red',
        margin: 50,
        borderRadius: 10,
      },
    card1: {
        alignSelf: 'center',
        width: 390,
        height: 200,
        backgroundColor: 'white',
        marginTop: 30,
        borderRadius: 10,
    },
    icon1: {
        padding: 10,
        marginTop: 25,
        marginRight: 30
    },
    icon2: {
        marginTop: 15,
        marginLeft: 30
        
    },
    icon3: {
        alignSelf: 'center',
        padding: 10,
        margin: 20
    },
    text1: {
        fontSize: 23,
        color: 'black',
        marginTop: 20,
    },
    text2: {
        marginTop: 5,
        fontSize: 18,
        padding: 11, 
        fontWeight: 'bold',
        marginLeft: 5
    },
    text3: {
        fontSize: 15,
        padding: 7, 
        marginTop: 5
    },
    text4: {
        padding: 11,
        marginTop: -5,
        fontSize: 15,
        marginLeft: 5

    },
    text5: {
        color: 'white',
        fontSize: 18,
        alignSelf: 'center',
        margin: 8
    },
    nav: {
        padding: 10,
        marginTop: 30,
        marginLeft: 15,
        flexDirection:'row'
    }
    
})