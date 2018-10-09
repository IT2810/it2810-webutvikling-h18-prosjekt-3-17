import React from 'react';
import { StyleSheet, FlatList, Text, View, Alert, Button, TouchableWithoutFeedback, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Check from './Check'

export default class Tasks extends React.Component {
  constructor(){
    super();
    this.state = {
      testText: 'Tasks',
      inputText: null,
      todos: []
    }
    this.myTextInput = React.createRef();
  }


  handlePressButton(){
    console.log("here");
    alert('press');
  }

  handlePressCheck = (el) => {
    console.log("here");
    const todos = this.state.todos.map(element => {
      if(element.key === el.key) {
        element.checked = !element.checked;
      }
      return element;
    });

    this.setState({todos: todos})
  }

  handleTextInput(txt){
    if (txt != 0){
      todo = {key: JSON.stringify(this.state.todos.length), txt: txt, checked: false};
      todos2 = Array.from(this.state.todos)
      todos2.push(todo);
      this.setState({todos : todos2})
      console.log(this.state.todos);
      this.myTextInput.current.clear();
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>{this.state.testText}</Text>
        <TextInput
        ref={this.myTextInput}
        style={{height: 40, borderColor: 'gray', borderWidth: 1, marginRight: 20}}
        onSubmitEditing={(event) => this.handleTextInput( event.nativeEvent.text )}
        value={this.state.inputText}
        />
        <FlatList style={styles.list} data={this.state.todos}
            renderItem={({item}) =>
              <TouchableWithoutFeedback onPress={() => this.handlePressCheck(item)}>
              <View style={styles.check}>
              <Check checked={item.checked}/>
              <Text style={styles.text}> {item.txt}</Text>
              </View>
              </TouchableWithoutFeedback>
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: 20,
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
