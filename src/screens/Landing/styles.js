import { responsive } from '@helpers';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#65d7cd',
    height: responsive.heightPercentageToDP('100%')
  },
  card1: {
    borderRadius: 50,
    alignSelf: 'center',
    backgroundColor: 'white',
    width: responsive.widthPercentageToDP('100%'),
    height: responsive.heightPercentageToDP('30%'),
    marginTop: responsive.heightPercentageToDP('9%')
  },
  text1: {
    padding: '5%',
    color: 'black',
    fontWeight: 'bold',
    alignSelf: 'center',
    fontSize: responsive.scaleFontSize(20),
    marginTop: responsive.heightPercentageToDP('2%')
  },
  text2: {
    alignSelf: 'center'
  },
  text3: {
    margin: '2.5%',
    color: 'white',
    alignSelf: 'center',
    fontSize: responsive.scaleFontSize(18)
  },
  button: {
    borderRadius: 25,
    alignSelf: 'center',
    backgroundColor: '#ff7953',
    width: responsive.widthPercentageToDP('85%'),
    height: responsive.heightPercentageToDP('5%'),
    marginTop: responsive.heightPercentageToDP('4%')
  },
  image: {
    alignSelf: 'center',
    width: responsive.widthPercentageToDP('75%'),
    height: responsive.heightPercentageToDP('35%'),
    marginTop: responsive.heightPercentageToDP('10%')
  },
  headtext: {
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: responsive.heightPercentageToDP('8%')
  },
  headtext1: {
    color: 'white',
    fontSize: responsive.scaleFontSize(28),
  },
  headtext2: {
    color: '#ff7953',
    fontSize: responsive.scaleFontSize(28),
    marginLeft: responsive.widthPercentageToDP('2%')
  }
});

export default styles;