import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#efefef'
  },
  Image: {
    width: 360,
    height: 390,
    marginTop: 20,
    shadowRadius: 4,
    borderRadius: 20,
    shadowOpacity: 0.5,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    }
  },
  card1: {
    width: 360,
    height: 90,
    padding: 10,
    marginTop: 30,
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: 'white'
  },
  card2: {
    width: 390,
    height: 180,
    marginTop: 30,
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: 'white'
  },
  card3: {
    width: 360,
    height: 200,
    padding: 10,
    marginTop: 30,
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: 'white'
  },
  button: {
    width: 340,
    height: 50,
    marginTop: 20,
    borderRadius: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'green'
  },
  icon1: {
    padding: 10,
    marginTop: 25,
    marginRight: 30
  },
  icon2: {
    marginTop: 15,
    marginLeft: 30
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
  textInput: {
    flex: 1,
    height: 40,
    margin: 5,
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'gray'
  },
  text4: {
    padding: 11,
    fontSize: 15,
    marginTop: -5
  },
  text5: {
    margin: 10,
    fontSize: 20,
    color: 'white',
    alignSelf: 'center'
  },
  input1: {
    width: 360,
    height: 50,
    padding: 15,
    marginTop: 30,
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: 'white'
  },
  input2: {
    width: 360,
    height: 50,
    padding: 15,
    marginTop: 20,
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: 'white'
  },
  input3: {
    width: 360,
    height: 90,
    padding: 15,
    marginTop: 20,
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: 'white'
  },
  nav: {
    padding: 10,
    marginTop: 30,
    marginLeft: 15,
    flexDirection: 'row'
  }
});

export default styles;