import Expo from "expo";
import React from "react";
import {Text, View, TextInput, Button, AsyncStorage} from "react-native";

//A class that lets you add and change your personal motivational goals
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
    } catch(error) {
        alert(error)
    }
  }


  render(){
    return(
      <View>
        <Text>Daily goals:</Text>
            <TextInput
              name="goalOne"
              type="text"
              onChange={(event) => this.setState({goalOne: event.nativeEvent.text})}
              value={this.state.goalOne}
            />

            <TextInput
              ref={this.goalTwo}
              type="text"
              onChange={(event) => this.setState({goalTwo: event.nativeEvent.text})}
              value={this.state.goalTwo}
            />

            <TextInput
              name="goalThree"
              type="text"
              value={this.state.goalThree}
              onChange={(event) => this.setState({goalThree: event.nativeEvent.text})}
            />

            <Button onPress={this.handleSubmit} title="Set goals" style={{ width: 100, paddingTop: 20 }} />

      </View>
    );
  }

}
