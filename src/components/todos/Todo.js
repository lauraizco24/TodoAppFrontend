import React, { useState } from 'react';


const Todo = ({ todo, deleteHandler, updateHandler, doneHandler }) => {

    const [isEditing, setIsEditing] = useState(false);
    const [updatedTodo, setUpdatedTodo] = useState(todo);



    const updateTodoState = e => {


        setUpdatedTodo({
            id: todo.id,
            message: e.target.value,
            status: 1

        })
    }


    const updateAndReset = (input, e) => {
        e.preventDefault()
        updateHandler(input)
        setIsEditing(false)
    }

    const updateAndResetDoneButton = (input, e) => {
        e.preventDefault()
        doneHandler(input)


    }
    const handleEvent = e => {
        setUpdatedTodo({
            id: 0,
            message: "",
            status: 1

        });
        doneHandler(updatedTodo);
    }

    return (
        <div>

            {isEditing ?
                <form onSubmit={e => updateAndReset(updatedTodo, e)}>
                    <input type="text"
                        defaultValue={todo.message}
                        onChange={updateTodoState}
                    />
                </form>

                :
                <p onDoubleClick={() => setIsEditing(true)} >
                    {todo.message}
                </p>
            }
            
                <button className="done-button" onClick={handleEvent} >Done</button>
            
            <button onClick={() => deleteHandler(todo.id)}>X</button>
        </div>
    )
}
export default Todo;