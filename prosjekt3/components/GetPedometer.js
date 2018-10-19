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
    androidClientId: '',
    iosClientId: ''
  }

  signInWithGoogleAsync = async() => {
    try {
      const result = await Expo.Google.LogInAsync({
        androidClientId: 359782590332-mb30mnpilma80ojdvmsslq20htao5nvi.apps.googleusercontent.com,
        iosClientId: 359782590332-pvuqmrkms9i20qfaqm2sk1ctcnt3ns2f.apps.googleusercontent.com,
        scopes: ['profile', 'email'],
      });

      if (result.type === 'success') {
        return result.accessToken;
        alert(result.accessToken)
      } else {
        return {cancelled: true};
      }
    } catch(error) {
      return {error: true};
    }
  }

  componentDidMount() {
   this.signInWithGoogleAsync();
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

   // if (GoogleApiClient != null) {
   //   GoogleApiClient.connect();
   // }

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
   // if ((GoogleApiClient != null || GoogleApiClient === 0) && GoogleApiClient.isConnected()){
   //   GoogleApiClient.stopAutoManage(Activity(), context);
   //   GoogleApiClient.disconnect();
   // }
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
