import React, {Fragment} from 'react';
import {StyleSheet, Text, View, TouchableHighlight, Button} from 'react-native';
import HTMLView from 'react-native-htmlview';

const HTMLstyles = StyleSheet.create({
  styledText: {color: 'red'},
});

const QuestionCard = props => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.headContainer}>
        <Text style={styles.headText}>Category:</Text>
        <Text style={styles.headText}>{props.category}</Text>
      </View>
      <View style={styles.questionContainer}>
        <View style={styles.questionText}>
          <HTMLView
            value={'<styledText>' + props.question + '</styledText>'}
            stylesheet={HTMLstyles}
          />
        </View>
        <Text style={styles.questionCount}>
          {props.currentQuestionNum} of {props.numOfQuestions}
        </Text>
        <TouchableHighlight
          onPress={() => props.handleClick('True')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>True</Text>
        </TouchableHighlight>
        <TouchableHighlight
          onPress={() => props.handleClick('False')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>False</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    margin: 20,
    width: 300,
  },
  headContainer: {
    marginTop: 40,
    backgroundColor: '#EEE',
    alignItems: 'center',
    minHeight: 150,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    elevation: 2,
    borderRadius: 20,
  },
  headText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 15,
    marginTop: 15,
    textAlign: 'center',
  },
  questionContainer: {
    flex: 1,
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  questionText: {
    height: 120,
    padding: 25,
    fontSize: 20,
    textAlign: 'center',
  },
  questionCount: {
    padding: 25,
    fontSize: 20,
    textAlign: 'center',
  },
  button: {
    height: 50,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    marginHorizontal: 30,
    marginTop: 20,
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

export default QuestionCard;
