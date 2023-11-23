import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#efefef'
  },
  card1: {
    width: '100%',
    height: '75%',
    marginTop: '5%',
    borderRadius: 50,
    alignSelf: 'center',
    backgroundColor: 'white'
  },
  text1: {
    padding: 40,
    fontSize: 30,
    color: 'black',
    marginTop: '10%',
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  text2: {
    padding: 30,
    fontSize: 20,
    color: 'black',
    marginTop: '5%',
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  text3: {
    margin: 10,
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  input: {
    width: '85%',
    height: '8%',
    padding: '3%',
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: '#efefef'
  },
  error: {
    color: 'red',
    marginTop: '3%',
    alignSelf: 'center'
  },
  button: {
    width: '85%',
    height: '7%',
    marginTop: '3%',
    borderRadius: 25,
    alignSelf: 'center',
    backgroundColor: '#ff7953'
  }
});

export default styles;