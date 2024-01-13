import { networkModel } from "@models";
import { localstorage } from "@services";
import { netinfo, notification } from "@helpers";
import { useState, useEffect, createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [logged, setLogged] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userData, setUserData] = useState(null);
  const [ethernet, setEthernet] = useState({
    type: "unknown",
    isConnected: false,
    isInternetReachable: false
  });

  const checkConnection = async () => {
    const connection = await netinfo.getNetworkInfo();
    setEthernet(connection);

    if (connection.isConnected || connection.isInternetReachable) {
      const userIP = await netinfo.getIpAddress();

      if (!userIP) return;

      try {
        await networkModel.createNetwork({
          ip: userIP,
          type: connection.type,
          isConnected: connection.isConnected || false,
          isInternetReachable: connection.isInternetReachable || false
        });
      } catch (error) {
        console.log(`error while add network: ${error}`);
      }
    }
  }

  const isLoggedIn = async () => {
    if (loading) return notification("Please wait until the process done", "Warning");

    setLoading(true);

    try {
      const user = await localstorage.get("authUser", true);

      if (user) {
        if (user.role === "admin") setIsAdmin(true);

        setLogged(true);
        setUserData(user);
      }
    } catch (error) {
      notification("Error while check user data", "Error");
      console.log(`error while checking login status: ${error}`);
    } finally {
      setLoading(false);
      await checkConnection();
    }
  };

  const setLoggedIn = async (data) => {
    if (loading) return notification("Please wait until the process done", "Warning");

    setLoading(true);

    try {
      await localstorage.store("authUser", data, true);

      if (data.role === "admin") setIsAdmin(true);

      setLogged(true);
      setUserData(data);
    } catch (error) {
      notification("Error while set user data", "Error");
      console.log(`error while login: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const setLoggedOut = async (navigation) => {
    if (loading) return notification("Please wait until the process done", "Warning");

    setLoading(true);

    try {
      setLogged(false);
      setIsAdmin(false);
      setUserData(null);

      await localstorage.remove("authUser");
    } catch (error) {
      notification("Error while clear user data", "Error");
      console.log(`error while logout: ${error}`);
    } finally {
      setLoading(false);
      navigation.replace("Landing");
    }
  };

  useEffect(() => {
    (async () => {
      await isLoggedIn();
    })();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        logged,
        isAdmin,
        loading,
        ethernet,
        userData,
        setLoading,
        isLoggedIn,
        setLoggedIn,
        setLoggedOut
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
