import React, { useContext } from 'react';
import { storeContext } from '../App';

import { REMOVE_TODO } from '../actions';
import { AiOutlineDelete } from "react-icons/ai";


function TodoRow({ todo, idx }) {

    const { dispatch } = useContext(storeContext);

    function removeTodo(id) {
        dispatch({ type: REMOVE_TODO, id })
    }

    return (
        <div className="todo-row">
            <div>
                <div className="todo-idx">{idx + 1 + ". "}</div>
                <div>{todo.todo}</div>
            </div>
            <div className="remove-icon" onClick={() => { removeTodo(todo.id) }}><AiOutlineDelete /></div>
        </div>
    )
}

export default TodoRow
