import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const Home = props => {
  return (
    <View style={styles.container}>
      <View style={styles.headContainer}>
        <Text style={styles.headText}>Welcome to the Trivia Challenge</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.introText}>
          You will be presented with 10 True or False questions.
        </Text>
        <Text style={styles.introText}>Can you score 100%?</Text>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('QuizRT')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Begin</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
  },
  headContainer: {
    marginTop: 50,
    backgroundColor: '#EEE',
    alignItems: 'center',
    height: 150,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    borderRadius: 20,
  },
  headText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 30,
    textAlign: 'center',
  },
  introText: {
    fontSize: 20,
    marginTop: 25,
    textAlign: 'center',
  },
  button: {
    height: 50,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    marginHorizontal: 30,
    marginTop: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Home;
