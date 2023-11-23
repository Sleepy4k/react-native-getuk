import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#65d7cd'
  },
  card1: {
    height: '50%',
    width: '100%',
    borderRadius: 50,
    alignSelf: 'center',
    backgroundColor: 'white'
  },
  text1: {
    padding: 25,
    fontSize: 20,
    color: 'black',
    marginTop: '2%',
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  text2: {
    alignSelf: 'center'
  },
  text3: {
    margin: 10,
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    width: '85%',
    height: '10%',
    marginTop: '7%',
    borderRadius: 25,
    alignSelf: 'center',
    backgroundColor: '#ff7953'
  },
  image: {
    width: '65%',
    height: '45%',
    marginTop: '20%',
    alignSelf: 'center'
  },
  headtext: {
    marginTop: '20%',
    alignSelf: 'center',
    flexDirection:'row'
  },
  headtext1: {
    fontSize: 30,
    color: 'white'
  },
  headtext2: {
    fontSize: 30,
    marginLeft: '2%',
    color: '#ff7953'
  }
});

export default styles;