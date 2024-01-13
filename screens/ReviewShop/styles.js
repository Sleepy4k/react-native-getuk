import { responsive } from '@helpers';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#efefef',
    height: responsive.heightPercentageToDP('100%')
  },
  nav: {
    padding: '5%',
    flexDirection: 'row',
    marginTop: responsive.heightPercentageToDP('2%'),
    marginLeft: responsive.widthPercentageToDP('5%')
  },
  backIcon: {
    padding: '2%',
    marginTop: responsive.heightPercentageToDP('3%'),
    marginRight: responsive.widthPercentageToDP('3%')
  },
  screenTitle: {
    color: 'black',
    fontSize: responsive.scaleFontSize(18),
    marginTop: responsive.heightPercentageToDP('2.5%')
  },
  saveButton: {
    color: 'green',
    alignSelf: 'center',
    fontSize: responsive.scaleFontSize(18),
    marginTop: responsive.heightPercentageToDP('2.5%'),
    marginLeft: responsive.widthPercentageToDP('22%')
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
  shopNoReview: {
    padding: '3%',
    fontWeight: 'bold',
    fontSize: responsive.scaleFontSize(18),
    marginTop: responsive.heightPercentageToDP('2%'),
    marginLeft: responsive.widthPercentageToDP('20%'),
    marginBottom: responsive.heightPercentageToDP('2%')
  },
  starCard: {
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: responsive.heightPercentageToDP('2%'),
    marginBottom: responsive.heightPercentageToDP('2%')
  },
  starIcon: {
    margin: '4%',
    padding: '3%',
    alignSelf: 'center'
  },
  button: {
    margin: '10%',
    borderRadius: 10,
    width: responsive.widthPercentageToDP('50%'),
    height: responsive.heightPercentageToDP('5%'),
    marginLeft: responsive.widthPercentageToDP('9%')
  },
  buttonText: {
    margin: '3.5%',
    color: 'white',
    alignSelf: 'center',
    fontSize: responsive.scaleFontSize(18)
  }
});

export default styles;
