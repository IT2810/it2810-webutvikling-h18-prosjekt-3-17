import React from 'react';
import { StyleSheet, FlatList, Text, View, Alert, Button, TouchableWithoutFeedback, TextInput, KeyboardAvoidingView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import DeleteButton from './DeleteButton'

export default class Appointments extends React.Component {
  constructor(){
    super();
    this.state = {
      testText: 'Appointments',
      inputText: null,
      todos: [],
      nextKey: 0,
      currHour: '00',
      currMinute: '00'
    }
    this.myTextInput = React.createRef();
  }


  handlePressButton(){
    alert('press');
  }

  handleTextInput(txt){
    if (txt != 0){
      todo = {key: JSON.stringify(this.state.nextKey), txt: txt, hour: this.state.currHour, minute: this.state.currMinute};
      this.setState({nextKey : (this.state.nextKey+1)});
      todos2 = Array.from(this.state.todos);
      todos2.push(todo);
      this.setState({todos : todos2})
      this.myTextInput.current.clear();
      this.setState({currHour : '00'});
      this.setState({currMinute : '00'});
    }
  }

  deleteAppointment = (i) => {
    todos2 = Array.from(this.state.todos);
    if (todos2[this.returnIndex(i)] === i){
      todos2.splice(this.returnIndex(i), 1);
    }
    this.setState({todos: todos2});

  }

  returnIndex(el){
    for (i = 0; i < this.state.todos.length; i++){
      if(this.state.todos[i] === el){
        return i;
      }
    }
    return null;
  }

  handleHour(el){
    this.setState({currHour : el})
  }

  handleMinute(el){
    this.setState({currMinute : el})
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Text style={styles.header}>{this.state.testText}</Text>
        <View style={{flexDirection: 'row'}}>
        <TextInput
        ref={this.myTextInput}
        defaultValue={this.state.currHour}
        style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 30, textAlign:'center'}}
        onEndEditing={(event) => this.handleHour( event.nativeEvent.text )}
        value={this.state.inputText}
        />
        <TextInput
        ref={this.myTextInput}
        defaultValue={this.state.currMinute}
        style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 30, textAlign:'center'}}
        onEndEditing={(event) => this.handleMinute( event.nativeEvent.text )}
        value={this.state.inputText}
        />
        <TextInput
        ref={this.myTextInput}
        style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 240}}
        onSubmitEditing={(event) => this.handleTextInput( event.nativeEvent.text )}
        value={this.state.inputText}
        />
        </View>
        <FlatList style={styles.list} data={this.state.todos}
            renderItem={({item}) =>
              <View style={styles.check}>
                <View style={styles.check}>
                  <Text style={styles.text}>{item.hour}:{item.minute} {item.txt}</Text>
                </View>
                <TouchableWithoutFeedback onPress={() => this.deleteAppointment(item) }  >
                  <View style={{flex: 1, justifyContent: 'flex-end', flexDirection: 'row'}}>
                    <DeleteButton />
                  </View>
                </TouchableWithoutFeedback>
              </View>
          }
        />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: 20,
    paddingRight: 20
  },

  text: {
    fontSize: 18,
  },

  header: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold'
  },
  check: {
    flexDirection: 'row',
  },
  list: {
    height: 200
  }
});
