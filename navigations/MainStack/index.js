import React from "react";
import { AuthContext } from "@contexts/AuthContext";
import { createStackNavigator } from "@react-navigation/stack";
import {
  GPS,
  Login,
  UserDetail,
  AdminDetail,
  AdminAddShop,
  AdminEditShop,
  UserDashboard,
  AdminDashboard
} from "@screens";

const MainStack = () => {
  const Stack = createStackNavigator();
  const { logged, isAdmin } = React.useContext(AuthContext);
  const [initialRoute, setInitialRoute] = React.useState("GPS");

  React.useEffect(() => {
    try {
      if (logged) {
        if (isAdmin) {
          setInitialRoute("AdminDashboard");
        } else {
          setInitialRoute("UserDashboard");
        }
      }
    } catch (error) {
      console.log(`something went wrong while set initial route: ${error}`);
    }
  }, []);

  return (
    <Stack.Navigator initialRouteName={initialRoute} screenOptions={{ headerShown: false }}>
      <Stack.Screen name="GPS" component={GPS} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="UserDetail" component={UserDetail} />
      <Stack.Screen name="AdminDetail" component={AdminDetail} />
      <Stack.Screen name="AdminAddShop" component={AdminAddShop} />
      <Stack.Screen name="AdminEditShop" component={AdminEditShop} />
      <Stack.Screen name="UserDashboard" component={UserDashboard} />
      <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
    </Stack.Navigator>
  )
}

export default MainStack;
