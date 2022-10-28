import React, { useState } from "react";
import Todo from "../models/Todo";

export const TodoContext = React.createContext<{
    items: Todo[];
    onAddTodo: (text: string) => void;
    onRemoveTodo: (id: string) => void;
}>({
    items: [],
    onAddTodo: (text: string) => { },
    onRemoveTodo: (id: string) => { }
})

const ContextProvider: React.FC<{ children: React.ReactNode }> = (props) => {

    const [todos, setTodos] = useState<Todo[]>([])

    const addHandler = (text: string) => {
        const newTodo = new Todo(text);

        setTodos(oldState => {
            return [...oldState, newTodo]
        })
    }

    const removeHandler = (todoId: string) => {
        setTodos(oldState => {
            return oldState.filter(x => x.id !== todoId)
        })
    }

    const contextValue = {
        onAddTodo: addHandler,
        onRemoveTodo: removeHandler,
        items: todos
    }

    return (
        <TodoContext.Provider value={contextValue}>{props.children}</TodoContext.Provider>
    )
}

export default ContextProvider;