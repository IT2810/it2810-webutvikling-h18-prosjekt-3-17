import React from 'react';

import { StyleSheet, FlatList, Text, View } from 'react-native';
import Tasks from './components/Tasks'
import DatePicker from './components/Date';
import Streak from './components/Streak';

export default class App extends React.Component {


  render() {
    return (
      <View style={styles.container}>
      <Streak/>
      <Tasks />
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
  },
  test: {
    backgroundColor: 'yellow'
  }
});
