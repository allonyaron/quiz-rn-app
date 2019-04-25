import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Results from './components/Results';

const MainNavigator = createStackNavigator(
  {
    HomeRT: {
      screen: Home,
      navigationOptions: {
        header: null,
      },
    },
    QuizRT: {
      screen: Quiz,
      navigationOptions: {
        header: null,
      },
    },
    ResultsRT: {
      screen: Results,
      navigationOptions: {
        header: null,
      },
    },
  },
  {initialRouteName: 'HomeRT'},
);

const App = createAppContainer(MainNavigator);

export default App;
