import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DatePicker from './Date';
import moment from 'moment';



export default class Streak extends React.Component {
  constructor(){
    super()
    this.state = {
    streakStart: moment().startOf('day'),
    days: 0
  }
  }

  getDate(e){
    if (moment(e).isSame(this.state.streakStart, 'day')){
      this.setState({
        days: 0
      })
    }
    else{
    this.setState({
      days: e.diff(this.state.streakStart,'day')
    })
  }
  }

  streakReset(el){
    this.setState({
      days:0,
      streakStart: el
    })
  }

  render() {
    return (
      <View style={styles.container}>

        <DatePicker giveDate={this.getDate.bind(this)} streakBreak={this.streakReset.bind(this)}/>
        <Text> Streak: {this.state.days} </Text>

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
  },
  button: {
    backgroundColor: 'yellow'
  }
});
