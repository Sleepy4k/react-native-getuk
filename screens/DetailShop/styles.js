import { responsive } from '@helpers';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#efefef',
    height: responsive.heightPercentageToDP('100%')
  },
  nav: {
    padding: '3%',
    flexDirection:'row',
    marginTop: responsive.heightPercentageToDP('2%'),
    marginLeft: responsive.widthPercentageToDP('1%')
  },
  backIcon: {
    padding: '3%',
    marginTop: responsive.heightPercentageToDP('3%'),
    marginLeft: responsive.widthPercentageToDP('5%'),
    marginRight: responsive.widthPercentageToDP('3%')
  },
  screenTitle: {
    color: 'black',
    fontSize: responsive.scaleFontSize(23),
    marginTop: responsive.heightPercentageToDP('2%')
  },
  imageCard: {
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
  shopCard: {
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: 'white',
    width: responsive.widthPercentageToDP('90%'),
    marginTop: responsive.heightPercentageToDP('2%')
  },
  shopTitle: {
    padding: '3%',
    fontWeight: 'bold',
    fontSize: responsive.scaleFontSize(18),
    marginTop: responsive.heightPercentageToDP('2%'),
    marginLeft: responsive.widthPercentageToDP('1%')
  },
  shopDetail: {
    opacity: 0.6,
    padding: '3%',
    fontSize: responsive.scaleFontSize(15),
    marginLeft: responsive.widthPercentageToDP('2%')
  },
  shopAddress: {
    opacity: 0.6,
    padding: '3%',
    fontSize: responsive.scaleFontSize(15),
    marginTop: responsive.heightPercentageToDP('2%'),
    marginLeft: responsive.widthPercentageToDP('2%')
  },
  spacingCol: {
    padding: '1%',
  },
  mapIcon: {
    margin: '5%',
    padding: '3%',
    alignSelf: 'center'
  },
  mapDescription: {
    opacity: 0.6,
    alignSelf: 'center',
    fontSize: responsive.scaleFontSize(12),
    marginBottom: responsive.heightPercentageToDP('3%')
  },
  starCard: {
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: responsive.heightPercentageToDP('2%')
  },
  starIcon: {
    margin: '5%',
    padding: '3%',
    alignSelf: 'center'
  },
  slider: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    margin: '3%',
    borderRadius: 10,
    width: responsive.widthPercentageToDP('25%'),
    height: responsive.heightPercentageToDP('5%'),
    marginLeft: responsive.widthPercentageToDP('4%'),
    marginTop: responsive.heightPercentageToDP('3%')
  },
  buttonText: {
    margin: '6%',
    color: 'white',
    alignSelf: 'center',
    fontSize: responsive.scaleFontSize(18)
  }
});

export default styles;