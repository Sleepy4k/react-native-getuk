import { responsive } from '@helpers';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  input: {
    padding: '3%',
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: 'white',
    width: responsive.widthPercentageToDP('85%'),
    height: responsive.heightPercentageToDP('6%'),
    marginTop: responsive.heightPercentageToDP('3%')
  },
  inputDescription: {
    textAlignVertical: 'top',
    height: responsive.heightPercentageToDP('10%')
  }
});

export default styles;