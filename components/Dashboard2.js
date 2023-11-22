import * as React from 'react';
import { faAdd, faArrowLeft, faDiagramNext, faDoorClosed, faFlask, faLocation, faLocationArrow, faLocationCrosshairs, faLocationDot, faLocationPin, faLocationPinLock, faPlaneCircleExclamation, faSearch, faSignOut, faSignOutAlt, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
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
  ScrollView,   
} from 'react-native';

export default function Dashboard2({navigation}) {
  
    return(
        <View style={styles.container}>
          <View style={styles.card1}>
          <View style={{flexDirection:'row'}}>
            <Text style={styles.text1}>Data Lokasi</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <FontAwesomeIcon icon={faSignOut} size={20} color='#000' style={styles.icon1}/>
            </TouchableOpacity>
          </View>
          <TextInput style={styles.input1} 
            placeholder="Search Shop"
          > 
          </TextInput>
          </View>
          <ScrollView style={styles.scroll}>
          <View style={styles.content}>
          <View style={styles.card2}>
          <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
          <View style={{flexDirection:'row'}}>
          <FontAwesomeIcon icon={faLocationDot} size={30} color='#ff7953' style={styles.icon2}/>
          <Text style={styles.text3}>Getuk Goreng "Gaya Baru"</Text>
          </View>
            <Text style={[styles.text4, { opacity: 0.6 }]}>Jl.Pesaren Kebutuh,Dusun 1,Sokaraja Kulon,
            Kec.Sokaraja,Kabupaten Banyumas,Jawa Tengah 53181
            </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.card2}>
          <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
          <View style={{flexDirection:'row'}}>
          <FontAwesomeIcon icon={faLocationDot} size={30} color='#ff7953' style={styles.icon2}/>
          <Text style={styles.text3}>Getuk Goreng "Gaya Baru"</Text>
          </View>
            <Text style={[styles.text4, { opacity: 0.6 }]}>Jl.Pesaren Kebutuh,Dusun 1,Sokaraja Kulon,
            Kec.Sokaraja,Kabupaten Banyumas,Jawa Tengah 53181
            </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.card2}>
          <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
          <View style={{flexDirection:'row'}}>
          <FontAwesomeIcon icon={faLocationDot} size={30} color='#ff7953' style={styles.icon2}/>
          <Text style={styles.text3}>Getuk Goreng "Gaya Baru"</Text>
          </View>
            <Text style={[styles.text4, { opacity: 0.6 }]}>Jl.Pesaren Kebutuh,Dusun 1,Sokaraja Kulon,
            Kec.Sokaraja,Kabupaten Banyumas,Jawa Tengah 53181
            </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.card2}>
          <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
          <View style={{flexDirection:'row'}}>
          <FontAwesomeIcon icon={faLocationDot} size={30} color='#ff7953' style={styles.icon2}/>
          <Text style={styles.text3}>Getuk Goreng "Gaya Baru"</Text>
          </View>
            <Text style={[styles.text4, { opacity: 0.6 }]}>Jl.Pesaren Kebutuh,Dusun 1,Sokaraja Kulon,
            Kec.Sokaraja,Kabupaten Banyumas,Jawa Tengah 53181
            </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.card2}>
          <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
          <View style={{flexDirection:'row'}}>
          <FontAwesomeIcon icon={faLocationDot} size={30} color='#ff7953' style={styles.icon2}/>
          <Text style={styles.text3}>Getuk Goreng "Gaya Baru"</Text>
          </View>
            <Text style={[styles.text4, { opacity: 0.6 }]}>Jl.Pesaren Kebutuh,Dusun 1,Sokaraja Kulon,
            Kec.Sokaraja,Kabupaten Banyumas,Jawa Tengah 53181
            </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.card2}>
          <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
          <View style={{flexDirection:'row'}}>
          <FontAwesomeIcon icon={faLocationDot} size={30} color='#ff7953' style={styles.icon2}/>
          <Text style={styles.text3}>Getuk Goreng "Gaya Baru"</Text>
          </View>
            <Text style={[styles.text4, { opacity: 0.6 }]}>Jl.Pesaren Kebutuh,Dusun 1,Sokaraja Kulon,
            Kec.Sokaraja,Kabupaten Banyumas,Jawa Tengah 53181
            </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.card2}>
          <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
          <View style={{flexDirection:'row'}}>
          <FontAwesomeIcon icon={faLocationDot} size={30} color='#ff7953' style={styles.icon2}/>
          <Text style={styles.text3}>Getuk Goreng "Gaya Baru"</Text>
          </View>
            <Text style={[styles.text4, { opacity: 0.6 }]}>Jl.Pesaren Kebutuh,Dusun 1,Sokaraja Kulon,
            Kec.Sokaraja,Kabupaten Banyumas,Jawa Tengah 53181
            </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.card2}>
          <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
          <View style={{flexDirection:'row'}}>
          <FontAwesomeIcon icon={faLocationDot} size={30} color='#ff7953' style={styles.icon2}/>
          <Text style={styles.text3}>Getuk Goreng "Gaya Baru"</Text>
          </View>
            <Text style={[styles.text4, { opacity: 0.6 }]}>Jl.Pesaren Kebutuh,Dusun 1,Sokaraja Kulon,
            Kec.Sokaraja,Kabupaten Banyumas,Jawa Tengah 53181
            </Text>
            </TouchableOpacity>
          </View>
          </View>
          </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      height: 960,
      backgroundColor: 'white',
    },
    scroll: {
        flex: 1
    },
    floatingButton: {
      backgroundColor: '#ff7953', 
      borderRadius: 50, 
      width: 60,
      height: 60,
      position: 'absolute', 
      bottom: 20,
      right: 20,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 3,
      marginBottom: 70,
      marginRight: 20
    },
    text1: {
        fontSize: 23,
        color: 'black',
        marginLeft: 20,
        padding: 23,
        marginTop: 30
    },
    text2: {
      fontSize: 15,
      padding: 10
    },
    text3: {
      fontSize: 18,
      marginLeft: 20,
      marginTop: 20
    },
    text4: {
        marginLeft: 70,
        padding: 10,
        marginTop: -20
    },
    card1: {
      alignSelf: 'center',
      width: 420,
      height: 200,
      backgroundColor: 'white',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 5, 
      marginBottom: 20,
    },
    card2: {
      alignSelf: 'center',
      width: 420,
      height: 110,
      backgroundColor: 'white',
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.5,
      shadowRadius: 4,
      elevation: 5,
      marginTop: 5
    },
    icon1: {
      marginLeft: 180,
      marginTop: 58
    },
    icon2: {
      marginTop: 30,
      marginLeft: 30
    },
    icon3: {
      color: 'white',
      fontSize: 35,
      fontWeight: 'bold',
      alignSelf: 'center'
    },
    input1: {
      alignSelf: 'center',
      backgroundColor: '#efefef',
      width: 360,
      height: 50,
      borderRadius: 10,
      padding: 15,
      
    },
});