import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 960,
    backgroundColor: 'white'
  },
  scroll: {
    flex: 1
  },
  floatingButton: {
    width: 60,
    height: 60,
    bottom: 35,
    right: 20,
    marginRight: 20,
    borderRadius: 50,
    marginBottom: 70,
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
    padding: 23,
    fontSize: 23,
    marginTop: 30,
    color: 'black',
    marginLeft: 20
  },
  text2: {
    padding: 10,
    fontSize: 15
  },
  text3: {
    fontSize: 18,
    marginTop: 20,
    marginLeft: 20
  },
  text4: {
    padding: 10,
    marginTop: -20,
    marginLeft: 70
  },
  card1: {
    width: 420,
    height: 200,
    elevation: 5,
    borderRadius: 10,
    shadowRadius: 4,
    marginBottom: 20,
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
    width: 420,
    height: 110,
    marginTop: 5,
    elevation: 5,
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
    marginTop: 58,
    marginLeft: 160
  },
  icon2: {
    marginTop: 30,
    marginLeft: 30
  },
  input1: {
    width: 360,
    height: 50,
    padding: 15,
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: '#efefef'
  }
});

export default styles;