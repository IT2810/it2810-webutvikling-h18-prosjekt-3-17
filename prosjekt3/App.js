import React from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';
import Tasks from './components/Tasks'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
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
  }
})
