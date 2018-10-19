import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, AsyncStorage, ScrollView } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment'
import Tasks from './Tasks';
import Appointments from './Appointments';
import Goals from './Goals'
import GoalModal from './GoalModal'
import GetPedometer from './GetPedometer'
import {Octicons} from '@expo/vector-icons'

//imports a DateTimePicker library witch makes the usage of a DatePicker easier
//imports the moment library that makes foramting and handeling of date objects a lot easier
//Imports a Flame icon as a streak icon

let originTime = moment()
//initializes an unformated date object

export default class DatePicker extends React.Component {
  constructor(){
    //sets witch date it is today and puts the DatePicker pop up to false
    super()
    this.state = {
      isVisible: false,
      chosenDate: moment().format('dddd Do [\n] MMMM YYYY'),
      storedData: [[],[]],
    }

  }
  setStoredTasks(item){
    data = Array.from(this.state.storedData)
    data[0] = item
    this.setState({storedData : data})
    this._storeData(data)

  }
  setStoredAppointments(item){
    data = Array.from(this.state.storedData)
    data[1] = item
    this.setState({storedData : data})
    this._storeData(data)
  }

  handlePicker = (datetime) => {
    //when a date is choosen:
    this.setState({
      isVisible: false, //sets the pop up to hidden
      chosenDate: moment(datetime).format('dddd Do [\n] MMMM YYYY')//updates the choosen date
    })
    originTime = moment(datetime) //updates unformated date
  }

  hidePicker = () => {
    //if you exit the datepicker without choosing a new date
    this.setState({
      isVisible: false //sets the pop up to hidden
    })
  }
  showPicker = () => {
    // when the date object is pushed
    this.setState({
      isVisible: true //sets the pop up to visable
    })
  }
  upOne = async () =>{
    //using the arrows to choose one day forward
      originTime = moment(originTime).add(1, 'day') // sets unformated date to the next day
      this.setState({
        chosenDate: moment(originTime).format('dddd Do [\n] MMMM YYYY') //updates choosen date to new date
      }),
      //this.props.giveDate(originTime)
      this.setState({storedData : [[],[]]})
      let data = await this._retrieveData()
      if (data === undefined){
          this.setState({storedData : [[],[]]})
      }
      else{
        this.setState({storedData : data})
      }


  }
  downOne = async () =>{
    originTime = moment(originTime).subtract(1, 'day') // sets unformated date to the day before
      this.setState({
        chosenDate: moment(originTime).format('dddd Do [\n] MMMM YYYY') //updates choosen date to day before
      }),
      //this.props.giveDate(originTime)
      this.setState({storedData : [[],[]]})
      let data = await this._retrieveData()
      if (data === undefined){
          this.setState({storedData : [[],[]]})
      }
      else{
        this.setState({storedData : data})
      }
    }

    async componentDidMount(){
      let data = await this._retrieveData()
      if (data === undefined){
          this.setState({storedData : [[],[]]})
      }
      else{
        this.setState({storedData : data})
      }
    }

    _storeData = async (storedData) => {
      try {
        let stateString = JSON.stringify(storedData)
        await AsyncStorage.setItem(this.generateStorageName(), stateString);
      } catch (error) {
      }
    }

    _retrieveData = async () => {
      try {
        const value = await AsyncStorage.getItem(this.generateStorageName());
        if (value !== null) {
          data = JSON.parse(value)
          return data
        }
       } catch (error) {
         return [[],[]]
       }
    }

    generateStorageName(){
      let name = "date" + moment(originTime).format("L");
      return name;
    }

    giveKeyT(){
      if(this.state.storedData[0].length < 1){
        return 0;
      }
      else{
        return this.state.storedData[0][this.state.storedData[0].length - 1].key
      }
    }
    giveKeyA(){
      if(this.state.storedData[1].length < 1){
        return 0;
      }
      else{
        return this.state.storedData[1][this.state.storedData[1].length - 1].key
      }
    }


    //renders the headder banner with upOne,downOne, datepicker and streak
    //initializes the functions nessesary to opperate the DatePicker
  render() {
    return (
      <View style={styles.container}>
        <View style= {styles.datepicker}>
          <View><Text style={styles.arrows} onPress={this.downOne}>←</Text></View>
          <View><Text onPress={this.showPicker} style={styles.date}>{this.state.chosenDate}</Text></View>
          <View><Text style={styles.arrows} onPress={this.upOne}>→</Text></View>
          <View style= {styles.flexStreak}><Text style={styles.streak}> <Octicons name="flame" size={20} color='crimson'/> 1 </Text></View>
        </View>


        <DateTimePicker
          isVisible={this.state.isVisible}
          onConfirm={this.handlePicker}
          onCancel={this.hidePicker}
          datePickerModeAndroid={'spinner'}
        />
        <GetPedometer />
        <ScrollView style={{flex: 1}}>
        <GoalModal/>

        <Tasks taskList={this.state.storedData[0]} nextKey={this.giveKeyT()} giveTasks={this.setStoredTasks.bind(this)}/>
        <Appointments style={{flex: 1}} appointmentList={this.state.storedData[1]} nextKey={this.giveKeyA()} giveAppointments={this.setStoredAppointments.bind(this)}/>
        </ ScrollView>
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
    maxHeight: 85,
    paddingTop: 20,
    maxHeight: 85,
    backgroundColor: 'black',
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
  },
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  }

});
