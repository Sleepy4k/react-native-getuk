import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 960,
    backgroundColor: '#efefef',
  },
  Image: {
    marginTop: 20,
    width: 390,
    height: 390,
    alignSelf: 'center',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4
  },
  card1: {
    alignSelf: 'center',
    width: 390,
    height: 200,
    backgroundColor: 'white',
    marginTop: 30,
    borderRadius: 10,
    padding: 10,
  },
  card2: {
    alignSelf: 'center',
    width: 390,
    height: 100,
    backgroundColor: 'white',
    marginTop: 30,
    borderRadius: 10,
  },
  button: {
    alignSelf: 'center',
    width: 340,
    height: 50,
    backgroundColor: 'green',
    borderRadius: 50,
    marginTop: 40,
    justifyContent: 'center',
  },
  icon1: {
    padding: 10,
    marginTop: 25,
    marginRight: 30,
  },
  icon2: {
    marginTop: 20,
    marginLeft: 30,
  },
  icon3: {
    alignSelf: 'center',
    padding: 10,
    margin: 20,
  },
  text1: {
    fontSize: 23,
    color: 'black',
    marginTop: 20,
  },
  textInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 5,
    borderRadius: 5,
    padding: 5,
  },
  text4: {
    padding: 11,
    marginTop: -5,
    fontSize: 15,
  },
  text5: {
    color: 'white',
    fontSize: 20,
    alignSelf: 'center',
    margin: 10,
  },
  nav: {
    padding: 10,
    marginTop: 30,
    marginLeft: 15,
    flexDirection: 'row',
  }
});

export default styles;