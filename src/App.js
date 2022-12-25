import './App.css';
import styled from 'styled-components'
import React, { useEffect, useRef } from 'react';
import TodoList from './TodoList';
import Header from './Header';

const Container = styled.div`
  font-family: 'Stick No Bills', sans-serif;
  text-align: center;
  color: white;
  width: 50vw;
`

const FormButton = styled.button `
  font-size: 17px;
  font-weight: bold;
  margin-left: 0.5vmax;
  color: #20B2AA;
  background-color: white;
  border: 3px solid;
  padding: 0.5vmax;
  border-radius: 0.5vmax;
  &:hover {
    color: white;
    background-color: #20B2AA;
  }
  &:active {
    background-color: #B8B8B8;
  }

`

const TodoInputStyling = styled.section `
  padding-top: 2vmax;

  > input {
    color: #20B2AA;
    font-size: 17px;
    font-weight: bold;
    border: 3px #20B2AA solid;
    padding: 0.5vmax;
    &:focus {
      outline: none;
    }
  }
`

const TodoListStyling = styled.section `
  font.family:s'Open Sans', sans-serif;
  padding: 0.2vmax;
  margin-top: 2vmax;
  border-top: 2px solid;
  color: #20B2AA;
  font-size: 24px;
`

const localStorageKey = 'mykey'

function App() {
  const [todos, setTodos] = React.useState([])

  const inputValue = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(localStorageKey))
    if(storedTodos) setTodos(storedTodos);
  }, []) //passing an empty dependancy array to make the function only run once

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(todos)) //Todos are in json format => stringify for LS
  }, [todos])

  document.addEventListener('keydown', handleEnterSubmit);

  function handleSubmit() {
    let submittedTodo = inputValue.current.value;
    if (submittedTodo === '') {
      return
    }

    setTodos(todosBefore => {
      let todoKey = Math.floor(Math.random() * 10000);
      return ([...todosBefore, {key: todoKey, value: submittedTodo}])
    })
    
    inputValue.current.value = '';
  }

  function handleEnterSubmit (event) {
    if(event.key === 'Enter') {
      handleSubmit();
    }
  }

  function handleRemoval() {
    setTodos([])
  }

  function handleTodoRemoval(id) {
    setTodos(todos.filter((eachTodo) => eachTodo.key !== id))
  }


  return (
    <Container>
      <Header />
      <TodoInputStyling>
        <input ref={inputValue} id='todoInput' type='text'></input>
        <FormButton onClick={handleSubmit}>Add Todo</FormButton>
        <FormButton onClick={handleRemoval}>Remove All</FormButton>
      </TodoInputStyling>
      <TodoListStyling>
        <TodoList allTodos={todos} closeTodo={handleTodoRemoval}>
        </TodoList>
      </TodoListStyling>
    </Container>
  );
}

export default App;