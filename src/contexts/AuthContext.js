import * as React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [logged, setLogged] = React.useState(false);
  const [isAdmin, setIsAdmin] = React.useState(false);
  const [location, setLocation] = React.useState(null);
  const [userData, setUserData] = React.useState(null);

  const isLoggedIn = async () => {
    try {
      let user = await AsyncStorage.getItem("authUser");

      if (user) {
        setLogged(true);
        user = JSON.parse(user);

        if (user.role === "admin") setIsAdmin(true);

        setUserData(user);
      }
    } catch (error) {
      console.log(`error while checking login status: ${error}`);
    }
  };

  const setLoggedIn = async (data) => {
    try {
      await AsyncStorage.setItem("authUser", JSON.stringify(data));
      setLogged(true);

      if (data.role === "admin") setIsAdmin(true);

      setUserData(data);
    } catch (error) {
      console.log(`error while login: ${error}`);
    }
  };

  const setLoggedOut = async (navigation) => {
    try {
      await AsyncStorage.removeItem("authUser");
      setLogged(false);
      setIsAdmin(false);
      setUserData(null);
      navigation.navigate("Landing");
    } catch (error) {
      console.log(`error while logout: ${error}`);
    }
  };

  React.useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        logged,
        isAdmin,
        userData,
        location,
        setLocation,
        setLoggedIn,
        setLoggedOut
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
