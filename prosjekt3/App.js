import React from 'react';

import { StyleSheet, FlatList, Text, View } from 'react-native';
import Tasks from './components/Tasks';
import Appointments from './components/Appointments';
import Streak from './components/Streak';
import Goals from "./components/Goals";
import GoalModal from "./components/GoalModal";



export default class App extends React.Component {

//rendering all the components that makes up the page
  render() {
    return (
      <View style={styles.container}>
      <Streak/>
      </View>
    );
  }
}
;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
