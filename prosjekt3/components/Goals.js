import Expo from "expo";
import React from "react";
import {Text, View, TextInput, Button, AsyncStorage} from "react-native";

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

  handleSubmit(){
    try {
      AsyncStorage.multiSet([['goalOne', this.state.goalOne],['goalTwo', this.state.goalTwo],['goalThree', this.state.goalThree]]);
    } catch (error) {
      alert(error)
    }
    // this.setState(modalVisible: false);
  }

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
      <View>
        <Text style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>Goals</Text>
            <TextInput
              name="goalOne"
              type="text"
              onChange={(event) => this.handleGoalOne(event.nativeEvent.text)}
              value={this.state.goalOne}
            />

            <TextInput
              ref={this.goalTwo}
              type="text"
              onChange={(event) => this.handleGoalTwo(event.nativeEvent.text)}
              value={this.state.goalTwo}
            />

            <TextInput
              name="goalThree"
              type="text"
              value={this.state.goalThree}
              onChange={(event) => this.handleGoalThree(event.nativeEvent.text)}
            />

            <Button onPress={this.handleSubmit} title="Set goals" style={{ width: 100, paddingTop: 20 }} />

      </View>
    );
  }

}
