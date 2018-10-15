import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment'
import {Octicons} from '@expo/vector-icons'

let originTime = moment()

export default class DatePicker extends React.Component {
  constructor(){
    super()
    this.state = {
      isVisible: false,
      chosenDate: moment().format('dddd Do [\n] MMMM YYYY'),
    }

  }
  handlePicker = (datetime) => {
    this.setState({
      isVisible: false,
      chosenDate: moment(datetime).format('dddd Do [\n] MMMM YYYY')
    })
    originTime = moment(datetime),
    this.props.giveDate(originTime)
  }

  hidePicker = () => {
    this.setState({
      isVisible: false
    })
  }
  showPicker = () => {
    this.setState({
      isVisible: true
    })
  }
  upOne = () =>{
      originTime = moment(originTime).add(1, 'day')
      this.setState({
        chosenDate: moment(originTime).format('dddd Do [\n] MMMM YYYY')
      }),
      this.props.giveDate(originTime)

  }
  downOne = () =>{
    originTime = moment(originTime).subtract(1, 'day')
      this.setState({
        chosenDate: moment(originTime).format('dddd Do [\n] MMMM YYYY')
      }),
      this.props.giveDate(originTime)
    }
  streakRip = () =>{
    this.props.streakBreak(originTime)
  }


  render() {
    return (
      <View style={styles.container}>
        <View style= {styles.datepicker}>
          <View><Text style={styles.arrows} onPress={this.downOne}>←</Text></View>
          <View><Text onPress={this.showPicker} style={styles.date}>{this.state.chosenDate}</Text></View>
          <View><Text style={styles.arrows} onPress={this.upOne}>→</Text></View>
          <View style= {styles.flexStreak}><Text style={styles.streak}> <Octicons name="flame" size={20} color='crimson'/> {this.props.streak}  </Text></View>
        </View>


        <DateTimePicker
          isVisible={this.state.isVisible}
          onConfirm={this.handlePicker}
          onCancel={this.hidePicker}
          datePickerModeAndroid={'spinner'}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  arrows:{
    fontSize:40,
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
  },
  datepicker:{
    width: 430,
    maxHeight: 60,
    backgroundColor: 'black',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  date:{
    width: 160,
    paddingTop: 5,
    fontSize:21,
    color: 'white',
  },
  streak:{
    paddingTop: 20,
    fontSize:19,
    color: 'white',
  },
  flexStreak:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    }

});
