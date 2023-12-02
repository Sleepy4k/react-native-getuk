import styles from './styles';
import PropTypes from "prop-types";
import { TextInput } from "react-native";

const CustomTextInput = ({
  value,
  style,
  editable,
  maxLength,
  multiline,
  placeholder,
  onChangeText,
  keyboardType,
  scrollEnabled,
  numberOfLines,
  autoCapitalize,
  secureTextEntry,
}) => {
  if (multiline) numberOfLines = 4;
  if (style === undefined || Object.keys(style).length == 0) {
    if (multiline) style = [styles.input, styles.inputDescription];
    else style = styles.input;
  }

  return (
    <TextInput
      style={style}
      value={value}
      editable={editable}
      maxLength={maxLength}
      multiline={multiline}
      placeholder={placeholder}
      keyboardType={keyboardType}
      onChangeText={onChangeText}
      scrollEnabled={scrollEnabled}
      numberOfLines={numberOfLines}
      autoCapitalize={autoCapitalize}
      secureTextEntry={secureTextEntry}
    />
  );
}

CustomTextInput.propTypes = {
  value: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  editable: PropTypes.bool.isRequired,
  maxLength: PropTypes.number.isRequired,
  multiline: PropTypes.bool.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  keyboardType: PropTypes.string.isRequired,
  scrollEnabled: PropTypes.bool.isRequired,
  numberOfLines: PropTypes.number.isRequired,
  autoCapitalize: PropTypes.string.isRequired,
  secureTextEntry: PropTypes.bool.isRequired,
};

CustomTextInput.defaultProps = {
  value: "",
  style: {},
  editable: true,
  maxLength: 255,
  multiline: false,
  placeholder: "",
  onChangeText: () => {},
  keyboardType: "default",
  scrollEnabled: false,
  numberOfLines: 1,
  autoCapitalize: "none",
  secureTextEntry: false,
};

export default CustomTextInput;
