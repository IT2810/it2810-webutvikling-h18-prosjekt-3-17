//Class to import Pedometer from Expo to calculate steps taken. The code is largely based on
//the expo documentation example for pedometer: https://docs.expo.io/versions/latest/sdk/pedometer

import Expo from "expo";
import React from "react";
import {Pedometer} from "expo";
import {Text, View} from "react-native";


export default class GetPedometer extends React.Component {
  state = {
    pastStedCount: 0,
    currentStepCount: 0,
  }

  componentDidMount() {
   this._subscribe();
 }

 componentWillUnmount() {
   this._unsubscribe();
 }

 _subscribe = () => {
   this._subscription = Pedometer.watchStepCount(result => {
     this.setState({
       currentStepCount: result.steps
     });
   });

   const end = new Date();
   const start = new Date();
   start.setDate(end.getDate() - 1);
   Pedometer.getStepCountAsync(start, end).then(
     result => {
       this.setState({ pastStepCount: result.steps });
     },
     error => {
       this.setState({
         pastStepCount: "Stepcount unavailable: " + error
       });
     }
   );
 };

 _unsubscribe = () => {
   this._subscription && this._subscription.remove();
   this._subscription = null;
 };

 render() {
   return(
     <View>
      <Text>
        Steps: {this.state.pastStepCount}
      </Text>
    </View>
   );
 }
}

Expo.registerRootComponent(GetPedometer);
