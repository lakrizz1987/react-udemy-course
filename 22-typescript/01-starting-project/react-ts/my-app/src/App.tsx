
import { useState } from 'react';
import './App.css';
import NewTodo from './components/NewTodo';
import Todos from './components/Todos';
import Todo from './models/Todo';

function App() {

  const [todos, setTodos] = useState<Todo[]>([])

  const addHandler = (text: string) => {
    const newTodo = new Todo(text);

    setTodos(oldState => {
      return [...oldState, newTodo]
    })
  }

  return (
    <div>
      <NewTodo addHandler={addHandler} />
      <Todos items={todos} />
    </div>
  );
}

export default App;
