import React from 'react';

import { StyleSheet, FlatList, Text, View } from 'react-native';
import Tasks from './components/Tasks';
//import DatePicker from './components/Date';
//import Streak from './components/Streak';
import Appointments from './components/Appointments';

export default class App extends React.Component {


  render() {
    return (
      <View style={styles.container}>
<<<<<<< HEAD
      <Streak/>
      <Tasks />
      <Appointments style={{flex: 1}} />
=======

      <Streak/>
      <Tasks />
      <Appointments style={{flex: 1}} />

>>>>>>> 69c82fe7f76481e9b68590fba25dd9d4a822ad42
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
