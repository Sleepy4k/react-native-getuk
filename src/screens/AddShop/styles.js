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
    marginRight: responsive.widthPercentageToDP('5%')
  },
  screenTitle: {
    color: 'black',
    fontSize: responsive.scaleFontSize(22),
    marginTop: responsive.heightPercentageToDP('2%')
  },
  saveButton: {
    color: 'green',
    alignSelf: 'center',
    fontSize: responsive.scaleFontSize(22),
    marginTop: responsive.heightPercentageToDP('2%'),
    marginLeft: responsive.widthPercentageToDP('30%')
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
  inputDescription: {
    textAlignVertical: 'top',
    height: responsive.heightPercentageToDP('10%')
  },
  imageCard: {
    borderRadius: 30,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: responsive.widthPercentageToDP('85%'),
    height: responsive.heightPercentageToDP('30%'),
    marginTop: responsive.heightPercentageToDP('3%')
  },
  image: {
    borderRadius: 10,
    width: responsive.widthPercentageToDP('75%'),
    height: responsive.heightPercentageToDP('25%')
  },
  chooseImage: {
    color: 'black',
    alignSelf: 'center',
    fontSize: responsive.scaleFontSize(22)
  },
  starCard: {
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: responsive.heightPercentageToDP('5%'),
    marginBottom: responsive.heightPercentageToDP('5%')
  },
  starIcon: {
    margin: '4%',
    padding: '3%',
    alignSelf: 'center'
  }
});

export default styles;