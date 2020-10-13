import React, {useState, useEffect} from 'react';
import NewTodo from './NewTodo';
import TodoList from './TodoList'
import logo from '../../assets/LauLogo.png';
import axios from 'axios';
import TodoActions from './TodoListActions';


function Todos() {
const [todoList, setTodoList] = useState([]);

const todoActions = new TodoActions();

const deleteHandler= (id) => {
todoActions.deleteHandler(id)
.then(data => {
  console.log(data)
  const newTodos = todoList.filter(item => {
      return item.id !== id
  })
  setTodoList(newTodos)
})
.catch()
}

const updateHandler=(todo) => {
  todoActions.updateHandler(todo)
  .then(res => {
    console.log(res)
    setTodoList( todoList.map(item =>{
        if(item.id === todo.id) {
          return{
            ...item, 
            message : todo.message
          }
        } else {
          return item
        }
      }))
    })
       .catch( err =>{
        console.log(err)
    })
}

const doneHandler=(todo) => {
  console.log(todo)
  todo.status = 1;
  todoActions.doneHandler(todo)
  .then(data => {
    console.log(data)
    setTodoList( todoList.map(item =>{
        if(item.id === todo.id) {
          return{
            ...item, 
            status: todo.status
          }
        } else {
          return item
        }
      }))
    })
       .catch( err =>{
        console.log(err)
    })
  }



useEffect(() => {
  axios.get('https://desolate-taiga-32629.herokuapp.com/todos', {})
  .then(res => {
console.log(res)
   setTodoList(res.data)
  })
  .catch( err =>{
    console.log(err)
  })
},
[])



  return (
         <div className="logo-container" >
                <img alt="" src={logo} className ="logo"></img>
                <h1>My To-Do App</h1>
<NewTodo todos={todoList} setTodos={setTodoList}/>
<TodoList todos={todoList} deleteHandler={deleteHandler} updateHandler={updateHandler}  doneHandler={doneHandler}  /> 
    </div>
  );
}

export default Todos;
