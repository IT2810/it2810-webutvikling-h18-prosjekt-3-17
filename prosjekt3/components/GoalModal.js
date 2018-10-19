import Expo from "expo";
import React from "react";
import {Text, View, Modal, TouchableHighlight, FlatList, StyleSheet, TouchableWithoutFeedback, AsyncStorage} from "react-native";
import Goals from "./Goals";
import Check from './Check'


export default class GoalModal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      modalVisible: true,
      goals: [],
      checks: [false, false, false]
    };
    this._retrieveData()

  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  getGoals(goals){
    this.setState({goals: goals})
  }

// Saves checked/unchecked boxes Daily Goals
  handlePressCheck = (el) => {
    checks = []
    checks.push(this.state.checks[0])
    checks.push(this.state.checks[1])
    checks.push(this.state.checks[2])
    checks[el] = !checks[el]
    this.setState({checks: checks})
    this._storeChecks(checks)
  }

// save method
  _storeChecks = async (checks) => {
    try {
      let stateString = JSON.stringify(checks)
      await AsyncStorage.setItem('checks', stateString)
    } catch (error) {
      alert(error)
    }
  }

// Only used as quickfix to get info from Goals before it is rendered
  componentDidMount = async() => {
    this.setState({modalVisible: false})

  }


// load method
  _retrieveData = async() => {
    try {
      let val = await AsyncStorage.getItem('checks')
      let value = JSON.parse(val)
      if(value === undefined){
        this.setState({checks : [false, false, false]})
      }
      else{
        this.setState({checks : value})
      }
    } catch (error) {
      alert(error)
    }
  }

  componentWillUnmount(){
    this.setState({modalVisible : false})
  }


  render(){
    return (

      <View style={{marginTop: 22, paddingLeft: 20, paddingRight: 20}}>
      <Text style={styles.header} >Goals of today</Text>
      <View style={styles.container}>
      <View style={styles.check}>
      <TouchableWithoutFeedback onPress={() => this.handlePressCheck(0)}  >
      <View style={styles.check}>
      <Check checked={this.state.checks[0]}/>
      <Text style={styles.text}> {this.state.goals[0]}</Text>
      </View>
      </TouchableWithoutFeedback>
      </View>
      <View style={styles.check}>
      <TouchableWithoutFeedback onPress={() => this.handlePressCheck(1)}  >
      <View style={styles.check}>
      <Check checked={this.state.checks[1]}/>
      <Text style={styles.text}> {this.state.goals[1]}</Text>
      </View>
      </TouchableWithoutFeedback>
      </View>
      <View style={styles.check}>
      <TouchableWithoutFeedback onPress={() => this.handlePressCheck(2)}  >
      <View style={styles.check}>
      <Check checked={this.state.checks[2]}/>
      <Text style={styles.text}> {this.state.goals[2]}</Text>
      </View>
      </TouchableWithoutFeedback>
      </View>

        </View>

        <Modal
        animationType="fade"
        transparent={false}
        visible={this.state.modalVisible}
        onRequestClose = { () => {
          console.log('Modal was closed');
        }}>
        <View style={{marginTop: 22}}>
          <View>
            <Goals setGoals={this.getGoals.bind(this)} />

            <TouchableHighlight
              onPress = { () => {
                this.setModalVisible(!this.state.modalVisible);
              }}>
              <Text>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

        <TouchableHighlight
          onPress = { () => {
            this.setModalVisible(true);
          }}>
          <View style={{backgroundColor: 'lightgrey', width: 70, padding: 5, alignItems: 'center',}}>
          <Text style={{textAlign: 'center'}}>Set Goals</Text>
          </View>
        </TouchableHighlight>
      </View>
    )
  }
}

  const styles = StyleSheet.create({
    container: {
    },
    text: {
      fontSize: 18,
    },
    check: {
      flexDirection: 'row',
    },
    header: {
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold'
    },
  });
