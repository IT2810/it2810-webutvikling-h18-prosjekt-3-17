import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment'

let test = 0
let originTime = moment()

export default class DatePicker extends React.Component {
  constructor(){
    super()
    this.state = {
      isVisible: false,
      chosenDate: moment().format('dddd Do MMM'),
    }

  }
  handlePicker = (datetime) => {
    this.setState({
      isVisible: false,
      chosenDate: moment(datetime).format('dddd Do MMM')
    })
    originTime = datetime,
    test = 0
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
    test = test + 1
      let date = moment(originTime).add(test, 'days')
      this.setState({
        chosenDate: moment(date).format('dddd Do MMM')
      })

  }
  downOne = () =>{
    test = test - 1
    let date = moment(originTime).add(test, 'days')
      this.setState({
        chosenDate: moment(date).format('dddd Do MMM')
      })

  }


  render() {
    return (
      <View style={styles.container}>


        <TouchableOpacity style={styles.button} onPress={this.showPicker}>
          <Text style={styles.text}>{this.state.chosenDate}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button2} onPress={this.upOne}>
          <Text style={styles.text2}>→</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button2} onPress={this.downOne}>
          <Text style={styles.text2}>←</Text>
        </TouchableOpacity>

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
  button:{
    width:300,
    height: 100,
    backgroundColor: '#330066',
    justifyContent: 'center',
    marginTop: 15
  },
  text:{
    fontSize:18,
    color: 'white',
    textAlign:'center'
  },
  button2:{
    width: 100,
    height: 30,
    backgroundColor: '#BBBBBB',
    justifyContent: 'center',
    marginTop: 15
  },
  text2:{
    fontSize:50,
    color: 'black',
    textAlign:'center',
    paddingBottom: 20
  },
});
