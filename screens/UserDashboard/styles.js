import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 960,
    backgroundColor: 'white',
  },
  scroll: {
    flex: 1
  },
  floatingButton: {
    backgroundColor: '#ff7953', 
    borderRadius: 50, 
    width: 60,
    height: 60,
    position: 'absolute', 
    bottom: 20,
    right: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 70,
    marginRight: 20
  },
  icon3: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  text1: {
    fontSize: 23,
    color: 'black',
    marginLeft: 138,
    padding: 23,
    marginTop: 30
  },
  text2: {
    fontSize: 15,
    padding: 10
  },
  text3: {
    fontSize: 18,
    marginLeft: 20,
    marginTop: 20
  },
  text4: {
    marginLeft: 70,
    padding: 10,
    marginTop: -20
  },
  card1: {
    alignSelf: 'center',
    width: 420,
    height: 120,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5, 
    marginBottom: 20,
  },
  card2: {
    alignSelf: 'center',
    width: 420,
    height: 110,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 5,
    marginTop: 5
  },
  icon1: {
    marginLeft: 75,
    marginTop: 58
  },
  icon2: {
    marginTop: 30,
    marginLeft: 30
  }
});

export default styles;