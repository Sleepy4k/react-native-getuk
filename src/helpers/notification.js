import { Alert, Platform, ToastAndroid } from "react-native";

const show = (message, title) => {
  switch (Platform.OS) {
    case "android":
      ToastAndroid.showWithGravityAndOffset(
        message,
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        25,
        50
      );
      break;
    case "web":
      alert(message);
      break;
    case "ios":
      Alert.alert(title, message);
    default:
      alert(message);
      break;
  }
};

export default show;
