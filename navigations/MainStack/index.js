import { useState, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Login,
  Landing,
  AddShop,
  Register,
  EditShop,
  Dashboard,
  DetailShop
} from "@screens";

const MainStack = () => {
  const Stack = createStackNavigator();
  const [isReady, setIsReady] = useState(false);
  const [initialRouteName, setInitialRouteName] = useState("Landing");

  useEffect(() => {
    const prepare = async () => {
      await SplashScreen.preventAutoHideAsync();
    };

    const getInitialRouteName = async () => {
      try {
        const authUser = await AsyncStorage.getItem("authUser");

        if (authUser) {
          const auth = JSON.parse(authUser);
          if (auth.role) setInitialRouteName("Dashboard");
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsReady(true);
      }
    };

    prepare();
    getInitialRouteName();
  }, []);


  if (!isReady) return null;

  SplashScreen.hideAsync();

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
      <Stack.Screen name="DetailShop" component={DetailShop} />
    </Stack.Navigator>
  );
};

export default MainStack;
