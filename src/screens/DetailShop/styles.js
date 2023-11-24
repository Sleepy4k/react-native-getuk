import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#efefef'
  },
  Image: {
    width: 300,
    height: 300,
    marginTop: 20,
    shadowRadius: 4,
    borderRadius: 20,
    shadowOpacity: 0.5,
    shadowColor: '#000',
    alignSelf: 'center',
    shadowOffset: {
      width: 0,
      height: 2
    }
  },
  button1: {
    width: 100,
    height: 40,
    margin: 50,
    marginTop: 15,
    borderRadius: 10,
    backgroundColor: 'green'
  },
  button2: {
    width: 100,
    height: 40,
    margin: 50,
    marginTop: 15,
    borderRadius: 10,
    backgroundColor: 'red'
  },
  card1: {
    width: 390,
    height: 240,
    marginTop: 30,
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: 'white'
  },
  icon1: {
    padding: 10,
    marginTop: 25,
    marginRight: 30
  },
  icon2: {
    margin: 20,
    padding: 10,
    alignSelf: 'center'
  },
  icon3: {
    margin: 20,
    padding: 10,
    alignSelf: 'center'
  },
  text1: {
    fontSize: 23,
    marginTop: 20,
    color: 'black'
  },
  text2: {
    padding: 11,
    marginTop: 5,
    fontSize: 18,
    marginLeft: 5,
    fontWeight: 'bold'
  },
  text3: {
    padding: 7,
    fontSize: 15,
    marginTop: 10
  },
  text4: {
    padding: 11,
    fontSize: 15,
    marginTop: -5,
    marginLeft: 5
  },
  text5: {
    margin: 8,
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  nav: {
    padding: 10,
    marginTop: 30,
    marginLeft: 15,
    flexDirection:'row'
  }
});

export default styles;