import Expo from "expo";
import React from "react";
import Pedometer from "expo";
import {Text, View} from "react-native";

export default class PedometerSensor extends React.Component {
  state = {
    isPedometerAvailable: "checking",
    pastStedCount: 0,
    currentStepCount: 0
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

   Pedometer.isAvailableAsync().then(
     result => {
       this.setState({
         isPedometerAvailable: String(result)
       });
     },
     error => {
       this.setState({
         isPedometerAvailable: "Could not get isPedometerAvailable: " + error
       });
     }
   );

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
     
   );
 }
}
