import Expo from "expo";
import React from "react";
import {StyleSheet, Text, View, TextInput, Button, AsyncStorage} from "react-native";

export default class Goals extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      goalOne: null,
      goalTwo: null,
      goalThree: null,
      // modalVisible: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //Runs when the user submits his/her changes in the personal goals. Stores the goals locally using AsyncStorage.
  handleSubmit(){
    try {
      AsyncStorage.multiSet([['goalOne', this.state.goalOne],['goalTwo', this.state.goalTwo],['goalThree', this.state.goalThree]]);
    } catch (error) {
      alert(error)
    }
    // this.setState(modalVisible: false);
  }

  //Runs when the component loads to get the users goals and set theese as the  components state
  componentDidMount = async() =>{
    try{
      var goalOne = await AsyncStorage.getItem('goalOne');
      var goalTwo = await AsyncStorage.getItem('goalTwo');
      var goalThree = await AsyncStorage.getItem('goalThree');
      this.setState({goalOne: goalOne});
      this.setState({goalTwo: goalTwo});
      this.setState({goalThree: goalThree});
      this.props.setGoals([goalOne, goalTwo, goalThree])
    } catch(error) {
        alert(error)
    }
  }
  handleGoalOne(text){
    this.setState({goalOne : text})
    let goals = [text, this.state.goalTwo, this.state.goalThree]
    this.props.setGoals(goals)
  }
  handleGoalTwo(text){
    this.setState({goalTwo : text})
    let goals = [this.state.goalOne, text, this.state.goalThree]
    this.props.setGoals(goals)
  }
  handleGoalThree(text){
    this.setState({goalThree : text})
    let goals = [this.state.goalOne, this.state.goalTwo, text]
    this.props.setGoals(goals)
  }


  render(){
    return(
      //Returns a view containing a form for setting and updating goals. Whenever there is a change in any of
      //the textinputs there is a onChange funtion that updates the state of the coresponding goal.
      <View>
        <Text style={styles.text}>Daily goals:</Text>
          <View>
            <TextInput
              name="goalOne"
              type="text"
              onChange={(event) => this.handleGoalOne(event.nativeEvent.text)}
              value={this.state.goalOne}
              style={styles.textInputs}
            />

            <TextInput
              name="goalTwo"
              type="text"
              onChange={(event) => this.handleGoalTwo(event.nativeEvent.text)}
              value={this.state.goalTwo}
              style={styles.textInputs}
            />

            <TextInput
              name="goalThree"
              type="text"
              value={this.state.goalThree}
              onChange={(event) => this.handleGoalThree(event.nativeEvent.text)}
              style={styles.textInputs}
            />

            <Button
            onPress={this.handleSubmit}
            title="Set goals"
            style={styles.button} />
          </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  text:{
    fontSize: 30,
    textAlign: 'center',
  },
  textInputs:{
    paddingTop: 20,
    textAlign: 'center',
    alignSelf: 'center',
  },
  button:{
    width: 200,
    paddingTop: 20,
    alignSelf: 'center',
  },
});
