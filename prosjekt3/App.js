import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DatePicker from './components/Date';
import Streak from './components/Streak';



export default class App extends React.Component {


  render() {
    return (
      <View style={styles.container}>


      <Streak/>

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
  }
});
