import React, { useContext, useState, useEffect } from 'react';
import { storeContext } from '../App';
import { ADD_TODO } from '../actions';

function TodoInput() {
    const [todo, setTodo] = useState({todo: "", importance: 0 });
    const { dispatch } = useContext(storeContext);

    useEffect(() => {
        console.log(todo);

    }, [todo])

    function createTodo(e) {
        setTodo(prevTodo => {
            return {
                ...prevTodo,
                todo: e.target.value,
            }
        });
    }

    function handleKeyPress(e){
        console.log(e.keyCode);
        if(e.keyCode === 13) addTodo();
    }

    function addTodo() {
        if(todo.todo){
            dispatch({ type: ADD_TODO , todo })
            setTodo(prevTodo => {
                return {
                    ...prevTodo,
                    todo:"",
                }
            })
        }
    }

    return (
        <div className="todo-input-wrapper">
            <input value={todo.todo} onKeyUp={(e) => {handleKeyPress(e)}} onChange={(e) => { createTodo(e) }} type="text" placeholder="Create Your Task ..." />
            <button onClick={addTodo}>Add Todo</button>
        </div>
    )
}

export default TodoInput;
