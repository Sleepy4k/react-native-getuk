import React, { useState, useEffect, useRef, SafeAreaView } from 'react';
import MapboxGL from '@react-native-mapbox-gl/maps';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
  SocialIcon,
  Animated,
  ImageBackground,   
} from 'react-native';
import { Platform } from 'react-native';

const accessToken = 'sk.eyJ1IjoiYmVuamFtaW40ayIsImEiOiJjbG93eGZibW0xYTgyMmtxMDV0c3R2cDcwIn0.gJucuQzpbjNDHfUIdbFUuQ'

MapboxGL.setAccessToken(
    'pk.eyJ1IjoiYmVuamFtaW40ayIsImEiOiJjbDM1YWx5eGEwNmJwM2tsZDhsbG1zaGhpIn0.6pA7VvYoJELB5lPGFrjaJA',
);



const IS_ANDROID=Platform.OS==='android';
export default class showMaps extends component({ navigation }) {
    async UNSAFE_componentWillMount() {
        if(IS_ANDROID){
            const isGranted=await MapboxGL.requestAndroidLocationPermissions();
            this.setState({
                isAndroidPermissionGranted :isGranted,
                isFetchingAndroidPermission :false,
            });
        }
    }

    constructor(props){
        super(props);
        this.state={
            isAndroidPermissionGranted:false,
            isFetchingAndroidPermission:IS_ANDROID,
            coordinates: [[-7.419237,109.312681]],
            showUserLocation:true,
            location: [[-7.419237,109.312681]],
        };
    }
    render() {
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <MapboxGL.MapView
                    ref={c=>(this.map=c)}
                        zoomLevel={15}
                        centerCoordinate={this.state.coordinates[0]}
                        showUserLocation={true}
                        style={styles.container}
                        onUserTrackingModeChange={this.state.userSelectedUserTrackingMode}
                        styleURL={`https://api.jawg.io/styles/jawg-sunny.json?access-token=${accessToken}`}
                    >
                        <MapboxGL.Camera
                            zoomLevel={17}
                            animationMode='flyTo'
                            animationDuration={0}
                            ref={c=>(this.camera=c)}
                            centerCoordinate={this.state.location}
                        >

                        </MapboxGL.Camera>
                        <MapboxGL.UserLocation>

                        </MapboxGL.UserLocation>


                    </MapboxGL.MapView>
                </View>
            </SafeAreaView>
        )
    }
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
    },
})