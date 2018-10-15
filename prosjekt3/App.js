import React from 'react';

import { StyleSheet, FlatList, Text, View } from 'react-native';
import Tasks from './components/Tasks';
import Streak from './components/Streak';
import Appointments from './components/Appointments';
import Goals from './components/Goals';

export default class App extends React.Component {

//rendering all the components that makes up the page
  render() {
    return (
      <View style={styles.container}>

      <Streak/>
      <Goals/>
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
