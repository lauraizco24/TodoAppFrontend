import axios from 'axios';
import React, { Component } from 'react';


export default class TodoListActions extends Component {

    deleteHandler(id) {
        return (
            axios.delete(`https://desolate-taiga-32629.herokuapp.com/todos/${id}`)
                .then(res =>
                    res.data)
        )
    }


    updateHandler(todo) {
        return (
            axios.put(`https://desolate-taiga-32629.herokuapp.com/todos/${todo.id}` , todo)

        )
    }

    doneHandler(todo) {
        return (
            axios.put(`https://desolate-taiga-32629.herokuapp.com/${todo.id}/status`, todo)

        )
    }

}
