import { memo } from "react";
import PropTypes from "prop-types";
import { colors } from "@constants";
import { StatusBar } from "expo-status-bar";

const CustomStatusBar = ({
  hidden,
  animated,
  barStyle,
  translucent,
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
  barStyle: PropTypes.string.isRequired,
  translucent: PropTypes.bool.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  networkActivityIndicatorVisible: PropTypes.bool.isRequired,
};

CustomStatusBar.defaultProps = {
  hidden: false,
  animated: true,
  barStyle: "dark-content",
  translucent: false,
  backgroundColor: colors.darkDeepBlueGrey,
  networkActivityIndicatorVisible: false,
};

export default memo(CustomStatusBar);
