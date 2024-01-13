import * as SplashScreen from "expo-splash-screen";
import { AuthContext } from '@contexts/AuthContext';
import { useState, useEffect, useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Login,
  Landing,
  AddShop,
  Register,
  EditShop,
  Dashboard,
  ReviewShop,
  DetailShop,
  AddReviewShop,
  EditReviewShop
} from "@screens";

const MainStack = () => {
  const Stack = createStackNavigator();
  const { userData, isLoggedIn } = useContext(AuthContext);
  const [initialRouteName, setInitialRouteName] = useState("Landing");

  useEffect(() => {
    (async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        await isLoggedIn();

        if (userData) {
          if (userData?.role) setInitialRouteName("Dashboard");
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        SplashScreen.hideAsync();
      }
    })
  }, []);

  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{ headerShown: false, animationEnabled: true }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="AddShop" component={AddShop} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="EditShop" component={EditShop} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="ReviewShop" component={ReviewShop} />
      <Stack.Screen name="DetailShop" component={DetailShop} />
      <Stack.Screen name="AddReviewShop" component={AddReviewShop} />
      <Stack.Screen name="EditReviewShop" component={EditReviewShop} />
    </Stack.Navigator>
  );
};

export default MainStack;
