import React from 'react';
import { StyleSheet, FlatList, Text, View, Alert, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class DeleteButton extends React.Component {

// Simply returns a delete button icon
  render() {
    return (
      <View style={styles.container}>
        <MaterialCommunityIcons name="delete" size={20} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',

  },
});
