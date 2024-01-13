import * as Network from 'expo-network';

const getNetworkInfo = async () => {
  try {
    const networkInfo = await Network.getNetworkStateAsync();
    return networkInfo;
  } catch (error) {
    console.log(`error while get network info: ${error}`);
  }
}

const getIpAddress = async () => {
  try {
    const ipAddress = await Network.getIpAddressAsync();
    return ipAddress;
  } catch (error) {
    console.log(`error while get ip address: ${error}`);
    return "0.0.0.0";
  }
}

export { getNetworkInfo, getIpAddress }