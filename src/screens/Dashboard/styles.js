import { responsive } from '@helpers';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: responsive.heightPercentageToDP('100%')
  },
  floatingButton: {
    borderRadius: 50,
    alignItems: 'center',
    position: 'absolute',
    justifyContent: 'center',
    backgroundColor: '#ff7953',
    right: responsive.widthPercentageToDP('3%'),
    width: responsive.widthPercentageToDP('13%'),
    height: responsive.heightPercentageToDP('6%'),
    bottom: responsive.heightPercentageToDP('3%'),
    marginRight: responsive.widthPercentageToDP('6%'),
    marginBottom: responsive.heightPercentageToDP('2%')
  },
  icon3: {
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  text1: {
    padding: '6%',
    color: 'black',
    fontSize: responsive.scaleFontSize(20),
    marginTop: responsive.heightPercentageToDP('2%'),
    marginLeft: responsive.widthPercentageToDP('3%')
  },
  text2: {
    padding: '2%',
    fontSize: responsive.scaleFontSize(15)
  },
  text3: {
    fontSize: responsive.scaleFontSize(16),
    marginTop: responsive.heightPercentageToDP('2%'),
    marginLeft: responsive.widthPercentageToDP('5%')
  },
  text4: {
    marginLeft: responsive.widthPercentageToDP('19%'),
    marginTop: responsive.heightPercentageToDP('-1.5%')
  },
  shopBox: {
    marginBottom: responsive.widthPercentageToDP('3%')
  },
  card1: {
    elevation: 8,
    shadowRadius: 4,
    borderRadius: 10,
    shadowOpacity: 0.3,
    shadowColor: '#000',
    alignSelf: 'center',
    backgroundColor: 'white',
    width: responsive.widthPercentageToDP('100%'),
    height: responsive.heightPercentageToDP('20%'),
    marginBottom: responsive.widthPercentageToDP('3%'),
    shadowOffset: {
      width: 0,
      height: 2
    }
  },
  card2: {
    elevation: 5,
    shadowRadius: 4,
    borderRadius: 10,
    shadowOpacity: 0.5,
    alignSelf: 'center',
    shadowColor: '#000',
    backgroundColor: 'white',
    width: responsive.widthPercentageToDP('100%'),
    marginTop: responsive.heightPercentageToDP('2%'),
    shadowOffset: {
      width: 0,
      height: 2
    }
  },
  icon1: {
    marginLeft: responsive.widthPercentageToDP('40%'),
    marginTop: responsive.heightPercentageToDP('5.5%'),
  },
  icon2: {
    marginTop: responsive.heightPercentageToDP('3%'),
    marginLeft: responsive.widthPercentageToDP('7%')
  },
  input1: {
    padding: '2%',
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: '#efefef',
    width: responsive.widthPercentageToDP('85%'),
    height: responsive.heightPercentageToDP('5%')
  }
});

export default styles;