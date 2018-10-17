import React from 'react';
import { StyleSheet, FlatList, Text, View, Alert, Button, TouchableWithoutFeedback, TextInput, KeyboardAvoidingView, AsyncStorage } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Check from './Check'
import DeleteButton from './DeleteButton'

export default class Tasks extends React.Component {
  constructor(){
    super();
    this.state = {
      testText: 'Tasks',
      inputText: null,
      todos: [],
      nextKey: 0,
    }
    this.myTextInput = React.createRef();
  }


  handlePressButton(){
    alert('press');
  }

  handlePressCheck = (el) => {
    const todos = this.state.todos.map(element => {
      if(element.key === el.key) {
        element.checked = !element.checked;
      }
      return element;
    });

    this.setState({todos: todos})
    this._storeData(todos)
  }

  handleTextInput(txt){
    if (txt != 0){
      todo = {key: JSON.stringify(this.state.nextKey), txt: txt, checked: false};
      this.setState({nextKey : (this.state.nextKey+1)});
      todos2 = Array.from(this.state.todos);
      todos2.push(todo);
      this.setState({todos : todos2})

      this.myTextInput.current.clear();
    }
    this._storeData(todos2)
  }

  deleteTask = (i) => {
    todos2 = Array.from(this.state.todos);
    if (todos2[this.returnIndex(i)] === i){
      todos2.splice(this.returnIndex(i), 1);
    }
    this.setState({todos: todos2});
    this._storeData(todos2)

  }

  returnIndex(el){
    for (i = 0; i < this.state.todos.length; i++){
      if(this.state.todos[i] === el){
        return i;
      }
    }
    return null;
  }

  async componentDidMount(){
    let todos = await this._retrieveTodos()
    let nextKey = await this._retrieveKeys()
    console.log("Todos: ")
    console.log(todos)
    if (todos === undefined){
        this.setState({todos : []})
    }
    else{
      this.setState({todos : todos})
    }
    if (nextKey === undefined){
        this.setState({nextKey : 0})
    }
    else{
      this.setState({nextKey : nextKey})
    }
  }

  _storeData = async (todos) => {
  try {
    let stateString = JSON.stringify(todos)
    await AsyncStorage.setItem('todos', stateString);
    await AsyncStorage.setItem('toDoNextKey', JSON.stringify(this.state.nextKey));
    console.log(stateString);
  } catch (error) {
    console.log('ERROR storing')
  }
}

_retrieveTodos = async () => {
  try {
    const value = await AsyncStorage.getItem('todos');
    if (value !== null) {
      todos2 = JSON.parse(value)
      return todos2

    }
   } catch (error) {
     console.log('ERROR retrieveing')
     return null
   }
}

_retrieveKeys = async () => {
  try {
    const value = await AsyncStorage.getItem('toDoNextKey');
    if (value !== null) {
      nextKey = JSON.parse(value)
      return nextKey
    }
   } catch (error) {
     console.log('ERROR retrieveing')
     return null
   }
}


  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <Text style={styles.header}>{this.state.testText}</Text>
        <TextInput
        ref={this.myTextInput}
        style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 300}}
        onSubmitEditing={(event) => this.handleTextInput( event.nativeEvent.text )}
        value={this.state.inputText}
        />
        <FlatList style={styles.list} data={this.state.todos}
            renderItem={({item}) =>
              <View style={styles.check}>
              <TouchableWithoutFeedback onPress={() => this.handlePressCheck(item)}  >
              <View style={styles.check}>
              <Check checked={item.checked}/>
              <Text style={styles.text}> {item.txt}</Text>
              </View>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback onPress={() => this.deleteTask(item) } >
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
    paddingRight: 20,
  },

  text: {
    fontSize: 18,
  },

  header: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold'
  },
  check: {
    flexDirection: 'row',
  },
  list: {
    height: 200
  }
});
