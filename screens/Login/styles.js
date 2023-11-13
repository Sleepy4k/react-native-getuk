import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 960,
    backgroundColor: '#efefef',
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
    fontSize: 30,
    color: 'black',
    alignSelf: 'center',
    padding: 40,
    fontWeight: 'bold',
    marginTop: 50
  },
  text2: {
    fontSize: 20,
    color: 'black',
    alignSelf: 'center',
    padding: 30,
    fontWeight: 'bold',
    marginTop: 2
  },
  text3: {
    color: 'white',
    fontSize: 18,
    alignSelf: 'center',
    margin: 10
  },
  input1: {
    alignSelf: 'center',
    backgroundColor: '#efefef',
    width: 360,
    height: 50,
    borderRadius: 10,
    padding: 15,
    
  },
  input2: {
    alignSelf: 'center',
    backgroundColor: '#efefef',
    width: 360,
    height: 50,
    borderRadius: 10,
    padding: 15,
    margin: 5,
  },
  error: {
    color: 'red',
    alignSelf: 'center',
    marginTop: 5
  },
  button: {
    alignSelf: 'center',
    backgroundColor: '#ff7953',
    width: 360,
    height: 50,
    borderRadius: 25,
    margin: 20
  }
});

export default styles;