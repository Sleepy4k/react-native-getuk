import { memo } from "react";
import styles from "./styles.js";
import PropTypes from "prop-types";
import { ActivityIndicator } from "react-native";

const Loader = ({ size, color }) => {
  return <ActivityIndicator size={size} color={color} style={styles.loader} />;
};

Loader.propTypes = {
  size: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

Loader.defaultProps = {
  size: "large",
  color: "#0000ff",
};

export default memo(Loader);
