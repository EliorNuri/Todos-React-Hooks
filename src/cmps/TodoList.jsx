import React, {useContext} from 'react';
import { storeContext } from '../App';
import TodoRow from './TodoRow';

function TodoList() {

    const {state} = useContext(storeContext);
    
    const elTodos = state.todos.length ? state.todos.map((todo,idx) => {
        return (<TodoRow idx={idx} todo={todo} key={idx} />)
    }) : (<div>Todo's List is empty ...</div>)

    return (
        <React.Fragment>
            {elTodos}
        </React.Fragment>
    )
}

export default TodoList
