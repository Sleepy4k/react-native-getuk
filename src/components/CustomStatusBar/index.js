import PropTypes from "prop-types";
import { colors } from "@constants";
import { StatusBar } from "expo-status-bar";

const CustomStatusBar = ({
  hidden,
  animated,
  translucent,
  barStyle,
  backgroundColor,
  networkActivityIndicatorVisible,
}) => {
  return (
    <StatusBar
      style={barStyle}
      hidden={hidden}
      animated={animated}
      translucent={translucent}
      backgroundColor={backgroundColor}
      networkActivityIndicatorVisible={networkActivityIndicatorVisible}
    />
  );
};

CustomStatusBar.propTypes = {
  hidden: PropTypes.bool.isRequired,
  animated: PropTypes.bool.isRequired,
  translucent: PropTypes.bool.isRequired,
  barStyle: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  networkActivityIndicatorVisible: PropTypes.bool.isRequired,
};

CustomStatusBar.defaultProps = {
  hidden: false,
  animated: true,
  translucent: false,
  barStyle: "dark-content",
  backgroundColor: colors.lightDeepBlue,
  networkActivityIndicatorVisible: false,
};

export default CustomStatusBar;

// Path: src\components\CustomStatusBar\index.js
