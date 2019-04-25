import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import QuestionCard from './QuestionCard';

class Quiz extends React.Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    questions: [],
    currentQuestionIndex: 0,
    numOfQuestions: 10,
  };

  async componentDidMount() {
    let response = await fetch(
      `https://opentdb.com/api.php?amount=${
        this.state.numOfQuestions
      }&difficulty=hard&type=boolean`,
    );
    let data = await response.json();
    this.setState({questions: data.results});
  }

  handleClick = answerValue => {
    if (this.state.currentQuestionIndex === 9) {
      this.props.navigation.navigate('ResultsRT', {
        questions: this.state.questions,
      });
    }
    this.setState({
      questions: [
        ...this.state.questions.slice(0, this.state.currentQuestionIndex),
        Object.assign(
          {},
          this.state.questions[this.state.currentQuestionIndex],
          {
            user_answer:
              answerValue ===
              this.state.questions[this.state.currentQuestionIndex]
                .correct_answer
                ? 'correct'
                : 'incorrect',
          },
        ),
        ...this.state.questions.slice(this.state.currentQuestionIndex + 1),
      ],
      currentQuestionIndex: this.state.currentQuestionIndex + 1,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.questions.length ? (
          <QuestionCard
            {...this.state.questions[this.state.currentQuestionIndex]}
            currentQuestionNum={this.state.currentQuestionIndex + 1}
            numOfQuestions={this.state.numOfQuestions}
            handleClick={this.handleClick}
          />
        ) : (
          <Text>Loading...</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Quiz;
