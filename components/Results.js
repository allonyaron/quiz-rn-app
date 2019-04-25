import React, {Component} from 'react';
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import HTMLView from 'react-native-htmlview';
import QuestionCard from './QuestionCard';

const Results = props => {
  const {questions} = props.navigation.state.params;
  const correctAnswers = questions.filter(question => {
    if (question.user_answer === 'correct') {
      return true;
    } else {
      return false;
    }
  });
  return (
    <View style={styles.container}>
      <Text style={styles.scoreText}>
        You Scored {correctAnswers.length} / {questions.length}
      </Text>
      <FlatList
        key="flatlist"
        data={questions}
        keyExtractor={(item, index) => 'key' + index}
        renderItem={({item, separators}) => (
          <View
            style={[
              styles.listItem,
              {
                backgroundColor:
                  item.user_answer === 'correct' ? 'lightgreen' : 'pink',
              },
            ]}
          >
            <HTMLView value={item.question} />
            <Text style={styles.answerText}>
              Your Answer:{' '}
              {item.user_answer === 'correct'
                ? item.correct_answer
                : item.correct_answer === 'True'
                ? 'False'
                : 'True'}
            </Text>
            <Text style={styles.answerText}>
              Correct Answer: {item.correct_answer}
            </Text>
          </View>
        )}
      />
      <TouchableOpacity
        onPress={() => props.navigation.navigate('HomeRT')}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Play Again</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  scoreText: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  answerText: {
    fontWeight: 'bold',
  },
  listItem: {
    textAlign: 'left',
    padding: 10,
    borderRadius: 10,
    margin: 6,
  },
  button: {
    height: 50,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    alignSelf: 'stretch',
    margin: 30,
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

export default Results;
