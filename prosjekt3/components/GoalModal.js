import Expo from "expo";
import React from "react";
import {Text, View, Modal, TouchableHighlight, FlatList} from "react-native";
import Goals from "./Goals";

export default class GoalModal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      modalVisible: false
    };
  }


  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render(){
    return (

      <View style={{marginTop: 22}}>

        <Modal
        animationType="fade"
        transparent={false}
        visible={this.state.modalVisible}
        onRequestClose = { () => {
          console.log('Modal was closed');
        }}>
        <View style={{marginTop: 22}}>
          <View>
            <Goals/>

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
          <Text>Set Goals</Text>
        </TouchableHighlight>
      </View>
    )
  }

}
