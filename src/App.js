import React, { useReducer } from 'react';
import reducer, { initialState } from './reducer';
import TodoInput from './cmps/TodoInput';
import TodoList from './cmps/TodoList';

export const storeContext = React.createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <storeContext.Provider value={{state, dispatch}}>
      <div className="App container">
        <h1>Todos Demo App - React Hooks</h1>
        <TodoInput />
        <TodoList />
      </div>
    </storeContext.Provider>
  );
}

export default App;
