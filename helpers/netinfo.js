import * as Network from 'expo-network';

const getNetworkInfo = async () => {
  try {
    const networkInfo = await Network.getNetworkStateAsync();
    return networkInfo;
  } catch (error) {
    console.log(`error while get network info: ${error}`);
    return {
      type: 'unknown',
      isConnected: false,
      isInternetReachable: false
    };
  }
}

const getIpAddress = async () => {
  try {
    const ipAddress = await Network.getIpAddressAsync();
    return ipAddress;
  } catch (error) {
    console.log(`error while get ip address: ${error}`);
    return null;
  }
}

export { getNetworkInfo, getIpAddress }