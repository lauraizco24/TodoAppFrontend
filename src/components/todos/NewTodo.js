import React, {useState} from 'react';
import axios from 'axios';

function NewTodo({todos, setTodos}){
const initialState = {
   id:' ',
   message:'',
   status:''
}
    const [todo, setTodo] = useState({initialState});

const handleChange=  e =>{
    setTodo({
        message: e.target.value
    })
}

const handleSubmit= e =>{
    e.preventDefault()
setTodos([todo, ...todos])
axios.post('https://desolate-taiga-32629.herokuapp.com/todos', todo)
.then(res =>{
    console.log(res)
})
.catch(err =>(
    console.log(err)
))
setTodo(initialState)
}
    return(
        <form onSubmit={handleSubmit}>
            <input
            type='text'
            name="todo"
            value={todo.message}
            placeholder="Enter your Todo item"
            onChange={handleChange}
            required
            />

            <button type="submit">New todo</button>
        </form>
    );
}

export default NewTodo;