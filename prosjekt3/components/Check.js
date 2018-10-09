import React from 'react';
import { StyleSheet, FlatList, Text, View, Alert, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class Check extends React.Component {

  isChecked(){
    if(this.props.checked === true){
      return <MaterialCommunityIcons name="checkbox-marked" size={20}/>;
    }
    else{
      return <MaterialCommunityIcons name="checkbox-blank-outline" size={20} />
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.isChecked()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',

  },
});
