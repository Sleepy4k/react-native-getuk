import { responsive } from '@helpers';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#efefef',
    height: responsive.heightPercentageToDP('100%')
  },
  card2: {
    borderRadius: 30,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: responsive.widthPercentageToDP('85%'),
    height: responsive.heightPercentageToDP('30%'),
    marginTop: responsive.heightPercentageToDP('3%')
  },
  icon1: {
    padding: '2%',
    marginTop: responsive.heightPercentageToDP('3%'),
    marginRight: responsive.widthPercentageToDP('5%')
  },
  icon2: {
    margin: '4%',
    padding: '3%',
    alignSelf: 'center'
  },
  text1: {
    color: 'black',
    fontSize: responsive.scaleFontSize(22),
    marginTop: responsive.heightPercentageToDP('2%')
  },
  text2: {
    color: 'black',
    alignSelf: 'center',
    fontSize: responsive.scaleFontSize(22)
  },
  text3: {
    color: 'green',
    alignSelf: 'center',
    fontSize: responsive.scaleFontSize(22),
    marginTop: responsive.heightPercentageToDP('2%'),
    marginLeft: responsive.widthPercentageToDP('30%')
  },
  nav: {
    padding: '5%',
    flexDirection: 'row',
    marginTop: responsive.heightPercentageToDP('2%'),
    marginLeft: responsive.widthPercentageToDP('5%')
  },
  input: {
    padding: '3%',
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: 'white',
    width: responsive.widthPercentageToDP('85%'),
    height: responsive.heightPercentageToDP('6%'),
    marginTop: responsive.heightPercentageToDP('3%')
  },
  description: {
    textAlignVertical: 'top',
    height: responsive.heightPercentageToDP('10%')
  },
  star: {
    marginTop: responsive.heightPercentageToDP('5%'),
    marginBottom: responsive.heightPercentageToDP('5%')
  },
  image: {
    borderRadius: 10,
    width: responsive.widthPercentageToDP('75%'),
    height: responsive.heightPercentageToDP('25%')
  }
});

export default styles;