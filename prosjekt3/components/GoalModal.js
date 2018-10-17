import Expo from "expo";
import React from "react";
import {Text, View, Modal, TouchableHighlight, FlatList, StyleSheet, TouchableWithoutFeedback} from "react-native";
import Goals from "./Goals";
import Check from './Check'


export default class GoalModal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      modalVisible: false,
      goals: [],
      checks: [false, false, false]
    };
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  getGoals(goals){
    console.log(goals)
    console.log(goals[0])
    console.log(goals[1])
    console.log(goals[2])
    this.setState({goals: goals})
  }
  getChecks(checks){
    console.log(checks)
    console.log(checks[0])
    console.log(checks[1])
    console.log(checks[2])
    this.setState({checks: checks})
  }
  handlePressCheck = (el) => {
    checks = Array.from(this.state.checks);
    console.log(el)
    console.log(checks[el])
    checks[el] = !checks[el]
    this.setState({checks: checks})
  }

  render(){
    return (
      <View style={{marginTop: 22}}>
      <Text style={styles.header} >Goals</Text>
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
        >
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
          <View style={{backgroundColor: 'lightgrey', width: 70, padding: 5,}}>
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
