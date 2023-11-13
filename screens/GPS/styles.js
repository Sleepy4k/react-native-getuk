import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 960,
    backgroundColor: '#65d7cd'
  },
  card1: {
    marginTop: 10,
    backgroundColor: 'white',
    height: 400,
    width: 450,
    borderRadius: 50,
    alignSelf: 'center',
  },
  text1: {
    fontSize: 20,
    color: 'black',
    alignSelf: 'center',
    padding: 30,
    fontWeight: 'bold',
    marginTop: 10
  },
  text2: {
    alignSelf: 'center',
  },
  text3: {
    color: 'white',
    fontSize: 18,
    alignSelf: 'center',
    margin: 10
  },
  button: {
    alignSelf: 'center',
    backgroundColor: '#ff7953',
    width: 360,
    height: 50,
    borderRadius: 25,
    margin: 20,
  },
  image: {
    width: 250,
    height: 250,
    alignSelf: 'center',
    marginTop: 60
  },
  headtext: {
    alignSelf: 'center',
    flexDirection:'row',
    marginTop: 150
  },
  headtext1: {
    fontSize: 30,
    color: 'white',
  },
  headtext2: {
    marginLeft: 10,
    fontSize: 30,
    color: '#ff7953'
  }
});

export default styles;