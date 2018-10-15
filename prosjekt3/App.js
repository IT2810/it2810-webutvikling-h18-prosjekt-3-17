import React from 'react';

import { StyleSheet, FlatList, Text, View } from 'react-native';
import Tasks from './components/Tasks';
// import Streak from './components/Streak';
import Goals from "./components/Goals";
import GoalModal from "./components/GoalModal";
import Appointments from './components/Appointments';

export default class App extends React.Component {


  render() {
    return (
      <View style={styles.container}>

  
      <GoalModal/>

      <Tasks />
      <Appointments style={{flex: 1}} />

      </View>
    );
  }
}
;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
