import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  FlatList,
  KeyboardAvoidingView,
} from 'react-native';

import {main, todo_input} from './styles';
import {TodoCard, TodoInput} from './components';

const Main = () => {
  const [list, setList] = useState([]);

  function addTodo(text) {
    const element = {
      id: list.length,
      todo: text,
      isDone: false,
    };

    const newArray = [...list, element];

    setList(newArray);
  }

  const doneTodo = (id) => {
    const newArray = [...list];
    const todoIndex = newArray.findIndex((item) => item.id == id);

    newArray[todoIndex].isDone = !newArray[todoIndex].isDone;

    setList(newArray);
  };

  const removeTodo = (id) => {
      const newArray = [...list];
      const removeIndex = list.findIndex(t => t.id == id);

      newArray.splice(removeIndex,1)

      setList(newArray)
  }

  const renderTodo = ({item}) => {
    return <TodoCard data={item} 
    onDone={(id) => doneTodo(id)}
    onRemove={() => removeTodo(item.id)}
    />;
  };

  return (
    <SafeAreaView style={main.container}>
      <KeyboardAvoidingView style={main.container} behavior="padding">
        <View style={main.banner}>
          <Text style={main.todoText}>TODO</Text>
          <View style={{flexDirection:'row'}}>
            <Text style={main.todoDoneCount}>{list.filter(t => t.isDone === true).length}</Text>
            <Text style={main.todoUndoneCount}>{list.filter(t => t.isDone === false).length}</Text>
          </View>
        </View>

        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={list}
          renderItem={renderTodo}
          ListEmptyComponent={() => (
            <Text style={main.emptyComponent}>NOTHING TO DO...</Text>
          )}
        />

        <TodoInput onTodoEnter={(todoText) => addTodo(todoText)} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Main;
