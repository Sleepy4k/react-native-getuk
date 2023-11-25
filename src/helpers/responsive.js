import { dimension } from "@constants";
import { PixelRatio } from "react-native";

const base = {
  width: 375,
  height: 812,
}

const scaleFontSize = (size) => {
  const newSize = (size * dimension.width) / base.width;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

const widthPercentageToDP = (widthPercent) => {
  const elemWidth = parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel(dimension.width * elemWidth / 100);
}

const heightPercentageToDP = (heightPercent) => {
  const elemHeight = parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel(dimension.height * elemHeight / 100);
}

export { scaleFontSize, widthPercentageToDP, heightPercentageToDP };