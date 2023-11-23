import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'white'
  },
  scroll: {
    flex: 1
  },
  floatingButton: {
    right: '5%',
    width: '10%',
    height: '6%',
    bottom: '5%',
    borderRadius: 50,
    marginRight: '6%',
    marginBottom: '2%',
    alignItems: 'center',
    position: 'absolute',
    justifyContent: 'center',
    backgroundColor: '#ff7953'
  },
  icon3: {
    fontSize: 35,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  text1: {
    fontSize: 23,
    padding: '6%',
    color: 'black',
    marginTop: '5%',
    marginLeft: '5%'
  },
  text2: {
    padding: '3%',
    fontSize: 15
  },
  text3: {
    fontSize: 18,
    marginTop: '6%',
    marginLeft: '5%'
  },
  text4: {
    padding: 10,
    marginTop: '-4%',
    marginLeft: '17%'
  },
  card1: {
    elevation: 8,
    width: '100%',
    height: '22%',
    shadowRadius: 4,
    borderRadius: 10,
    marginBottom: '2%',
    shadowOpacity: 0.3,
    shadowColor: '#000',
    alignSelf: 'center',
    backgroundColor: 'white',
    shadowOffset: {
      width: 0,
      height: 2
    }
  },
  card2: {
    elevation: 5,
    width: '100%',
    height: '75%',
    marginTop: '3%',
    shadowRadius: 4,
    borderRadius: 10,
    shadowOpacity: 0.5,
    alignSelf: 'center',
    shadowColor: '#000',
    backgroundColor: 'white',
    shadowOffset: {
      width: 0,
      height: 2
    }
  },
  icon1: {
    marginTop: '19%',
    marginLeft: '60%',
  },
  icon2: {
    marginTop: '7%',
    marginLeft: '7%'
  },
  input1: {
    width: '87%',
    height: '25%',
    padding: 15,
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: '#efefef'
  }
});

export default styles;