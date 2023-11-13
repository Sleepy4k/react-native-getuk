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
    shadowRadius: 4,
  },
  button1: {
    marginTop: 50,
    width: 100,
    height: 40,
    backgroundColor: 'green',
    margin: 50,
    borderRadius: 10,
  },
  button2: {
    marginTop: 50,
    width: 100,
    height: 40,
    backgroundColor: 'red',
    margin: 50,
    borderRadius: 10,
  },
  card1: {
    alignSelf: 'center',
    width: 390,
    height: 200,
    backgroundColor: 'white',
    marginTop: 30,
    borderRadius: 10,
  },
  icon1: {
    padding: 10,
    marginTop: 25,
    marginRight: 30
  },
  icon2: {
    marginTop: 20,
    marginLeft: 30
  },
  icon3: {
    alignSelf: 'center',
    padding: 10,
    margin: 20
  },
  text1: {
    fontSize: 23,
    color: 'black',
    marginTop: 20,
  },
  text2: {
    marginTop: 5,
    fontSize: 18,
    padding: 11, 
    fontWeight: 'bold',
    marginLeft: 5
  },
  text3: {
    fontSize: 15,
    padding: 7, 
    marginTop: 10
  },
  text4: {
    padding: 11,
    marginTop: -5,
    fontSize: 15,
    marginLeft: 5
  },
  text5: {
    color: 'white',
    fontSize: 18,
    alignSelf: 'center',
    margin: 8
  },
  nav: {
    padding: 10,
    marginTop: 30,
    marginLeft: 15,
    flexDirection:'row'
  }
});

export default styles;