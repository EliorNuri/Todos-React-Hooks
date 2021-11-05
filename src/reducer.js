import { ADD_TODO, REMOVE_TODO } from './actions';

export const initialState = {
    todos: [
        { id: 1, todo: "Buy Milk", importance: 1 },
        { id: 2, todo: "Wash Dishes", importance: 1 },
        { id: 3, todo: "Read Book", importance: 2 },
    ]
}


export default function reducer(state, action) {
    switch (action.type) {

        case ADD_TODO: {
            const { todo } = action;
            const id = Math.random();
            todo.id = id;
            const todos = [...state.todos, todo];
            return {
                ...state,
                todos
            }
        }
        case REMOVE_TODO: {
            const { id } = action;
            const todos = state.todos.filter((todo) => todo.id !== id);

            return {
                ...state,
                todos
            }
        }
        default:
            return state;
    }
}