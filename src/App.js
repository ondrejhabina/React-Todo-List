
import './App.css';
import styled from 'styled-components'
import React, { useEffect, useRef } from 'react';


const Container = styled.div`
  font-family: 'Stick No Bills', sans-serif;
  text-align: center;
  color: white;
  width: 50vw;
`

const HeaderStyling = styled.div `
  font-size: 58px;
  background-color: #20B2AA;
  border-radius: 8px;
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

const TodoInputStyling = styled.div `
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

const TodoListStyling = styled.div `
  font.family:s'Open Sans', sans-serif;
  padding: 0.2vmax;
  margin-top: 2vmax;
  border-top: 2px solid;
  color: #20B2AA;
  font-size: 24px;
`

const TodoStyling = styled.div `
  border-radius: 0.5vmax;
  font.family:s'Open Sans', sans-serif;
  font-size: 26px;
  width: 80%;
  padding: 0.5vmax;
  margin: auto;
  margin-top: 2vmax;
  border: 2px solid;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
    button {
      align-self: center;
      border: 2px solid red;
      width: 40px;
      height: 40px;
      border-radius: 0.5vmax;
      &:hover {
        background-color: red;
        border: 2px solid white;
      }
    }
`

function Header() {
  return(
    <div>Write it down!</div>
  );
}

function TodoList({allTodos, closeTodo}) {
  let todoArr = [...allTodos]
  return(
    todoArr.map(todo => {
      return <Todo key={todo.key} id={todo.key} todoItem={todo.value} handleClose={closeTodo}/>
    })
  )
}

function Todo({id, todoItem, handleClose}) {
  return(
    <TodoStyling id={id}>
      <p>{todoItem}</p>
      <button onClick={() => handleClose(id)}></button>
    </TodoStyling>
  ) 
}

const localStorageKey = 'mykey'

function App() {
  const [todos, setTodos] = React.useState([])

  const inputValue = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(localStorageKey))
    if(storedTodos) setTodos(storedTodos);
  }, []) //passing an empty array to make the function only run once

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(todos)) //Todos are in json format => stringify
  }, [todos])


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

  function handleRemoval() {
    setTodos([])
  }

  function handleTodoRemoval(id) {
    setTodos(todos.filter((eachTodo) => eachTodo.key !== id))
  }


  return (
    <Container>
      <HeaderStyling>
        <Header />
      </HeaderStyling>
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