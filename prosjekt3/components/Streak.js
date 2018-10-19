import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DatePicker from './Date';
import moment from 'moment';
import Goals from './Goals'
//imports Date and the momnet library


export default class Streak extends React.Component {
// initializes the date of the streak start and how many days have passed since that day
  constructor(){
    super()
    this.state = {
    streakStart: moment().startOf('day'),
    days: 0
  }
  }


  streakReset(el){
  //this function checks if yesterdays goals was achived and breaks the streak by setting streakstart to today
  // and setting days to 0. you now need to start over with the goals
    this.setState({
      days:0,
      streakStart: el
    })
  }

  render() {
    return (
      <View style={{flex: 1}}>


        <DatePicker streak={this.state.days}/>

      </View>
    );
  }
}
