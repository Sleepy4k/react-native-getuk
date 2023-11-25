import { responsive } from '@helpers';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#efefef',
    height: responsive.heightPercentageToDP('100%')
  },
  Image: {
    shadowRadius: 4,
    borderRadius: 20,
    shadowOpacity: 0.5,
    shadowColor: '#000',
    alignSelf: 'center',
    width: responsive.widthPercentageToDP('85%'),
    height: responsive.heightPercentageToDP('30%'),
    marginTop: responsive.heightPercentageToDP('2%'),
    shadowOffset: {
      width: 0,
      height: 2
    }
  },
  button: {
    margin: 50,
    borderRadius: 10,
    width: responsive.widthPercentageToDP('25%'),
    height: responsive.heightPercentageToDP('5%'),
    marginTop: responsive.heightPercentageToDP('3%')
  },
  card1: {
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: 'white',
    width: responsive.widthPercentageToDP('90%'),
    marginTop: responsive.heightPercentageToDP('3%')
  },
  mapHelperText: {
    opacity: 0.6,
    alignSelf: 'center',
    fontSize: responsive.scaleFontSize(12),
    marginBottom: responsive.heightPercentageToDP('3%')
  },
  icon1: {
    padding: 10,
    marginTop: responsive.heightPercentageToDP('3%'),
    marginLeft: responsive.widthPercentageToDP('5%'),
    marginRight: responsive.widthPercentageToDP('3%')
  },
  icon2: {
    margin: 20,
    padding: 10,
    alignSelf: 'center'
  },
  text1: {
    fontSize: 23,
    color: 'black',
    marginTop: responsive.heightPercentageToDP('2.3%')
  },
  text2: {
    padding: 11,
    fontWeight: 'bold',
    fontSize: responsive.scaleFontSize(18),
    marginTop: responsive.heightPercentageToDP('2%'),
    marginLeft: responsive.widthPercentageToDP('1%')
  },
  text3: {
    padding: 11,
    fontSize: responsive.scaleFontSize(15),
    marginLeft: responsive.widthPercentageToDP('2%')
  },
  text5: {
    margin: '6%',
    color: 'white',
    alignSelf: 'center',
    fontSize: responsive.scaleFontSize(18)
  },
  nav: {
    padding: 10,
    flexDirection:'row',
    marginTop: responsive.heightPercentageToDP('2%'),
    marginLeft: responsive.widthPercentageToDP('1%')
  }
});

export default styles;