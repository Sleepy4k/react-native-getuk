import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ImagePicker from 'react-native-image-picker';
import gps from './components/gps';
import Login from './components/Login';
import Detail from './components/Detail';
import Dashboard1 from './components/Dashboard1';
import Add from './components/Add';
import Dashboard2 from './components/Dashboard2';
import DetailAdmin from './components/DetailAdmin';
import Edit from './components/Edit';




const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Edit' component={Edit}/>
      <Stack.Screen name="Add" component={Add}/>
      <Stack.Screen name="gps" component={gps}/>
      <Stack.Screen name='DetailAdmin' component={DetailAdmin}/>
      
        <Stack.Screen name='Dashboard2' component={Dashboard2}/>
        
        <Stack.Screen name='Dashboard1' component={Dashboard1}/>
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Detail" component={Detail}/>
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;