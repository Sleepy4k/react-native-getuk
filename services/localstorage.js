import { notification } from '@helpers';
import AsyncStorage from '@react-native-async-storage/async-storage';

const get = async (key, isObject = false) => {
  try {
    let data = await AsyncStorage.getItem(key);

    if (data == null) return null;

    return isObject ? JSON.parse(data) : data;
  } catch (error) {
    notification('Error while get local storage', 'Error');
    console.log(`error while get local storage: ${error}`);
  }
}

const store = async (key, value, isObject = false) => {
  try {
    if (isObject) value = JSON.stringify(value);

    await AsyncStorage.setItem(key, value);
  } catch (error) {
    notification('Error while set local storage', 'Error');
    console.log(`error while set local storage: ${error}`);
  }
}

const remove = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    notification('Error while remove local storage', 'Error');
    console.log(`error while remove local storage: ${error}`);
  }
}

export { get, store, remove };
