import { responsive } from '@helpers';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#efefef',
    height: responsive.heightPercentageToDP('100%')
  },
  screenTitle: {
    padding: '10%',
    color: 'black',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: responsive.scaleFontSize(30),
    marginTop: responsive.heightPercentageToDP('5%')
  },
  formCard: {
    borderRadius: 50,
    alignSelf: 'center',
    backgroundColor: 'white',
    width: responsive.widthPercentageToDP('100%'),
    height: responsive.heightPercentageToDP('45%'),
    marginTop: responsive.heightPercentageToDP('30%')
  },
  formTitle: {
    padding: '5%',
    color: 'black',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: responsive.scaleFontSize(20),
    marginTop: responsive.heightPercentageToDP('2%')
  },
  input: {
    padding: '3%',
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: '#efefef',
    width: responsive.widthPercentageToDP('85%'),
    height: responsive.heightPercentageToDP('6%')
  },
  inputPassword: {
    marginTop: responsive.heightPercentageToDP('2%')
  },
  button: {
    borderRadius: 25,
    alignSelf: 'center',
    backgroundColor: '#ff7953',
    width: responsive.widthPercentageToDP('85%'),
    height: responsive.heightPercentageToDP('5%'),
    marginTop: responsive.heightPercentageToDP('2%')
  },
  buttonEntry: {
    marginTop: responsive.heightPercentageToDP('2%')
  },
  buttonText: {
    margin: '2%',
    color: 'white',
    alignSelf: 'center',
    fontSize: responsive.scaleFontSize(18)
  }
});

export default styles;