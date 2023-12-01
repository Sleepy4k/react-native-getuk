import { notification } from "@helpers";
import { useState, useEffect, createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [logged, setLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userData, setUserData] = useState(null);

  const isLoggedIn = async () => {
    try {
      let user = await AsyncStorage.getItem("authUser");

      if (user) {
        user = JSON.parse(user);

        if (user.role === "admin") setIsAdmin(true);

        setLogged(true);
        setUserData(user);
      }
    } catch (error) {
      notification.show("Error while check user data", "Error");
      console.log(`error while checking login status: ${error}`);
    }
  };

  const setLoggedIn = async (data) => {
    try {
      await AsyncStorage.setItem("authUser", JSON.stringify(data));

      if (data.role === "admin") setIsAdmin(true);

      setLogged(true);
      setUserData(data);
    } catch (error) {
      notification.show("Error while set user data", "Error");
      console.log(`error while login: ${error}`);
    }
  };

  const setLoggedOut = async (navigation) => {
    try {
      setLogged(false);
      setIsAdmin(false);
      setUserData(null);

      await AsyncStorage.removeItem("authUser");
    } catch (error) {
      notification.show("Error while clear user data", "Error");
      console.log(`error while logout: ${error}`);
    } finally {
      navigation.replace("Landing");
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        logged,
        isAdmin,
        userData,
        setLoggedIn,
        setLoggedOut
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
