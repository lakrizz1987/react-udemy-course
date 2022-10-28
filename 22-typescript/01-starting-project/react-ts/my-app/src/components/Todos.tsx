import React, { useContext } from "react";
import Todo from "../models/Todo";
import { TodoContext } from "../store/TodoContext";
import TodoItem from "./TodoItem";
import styles from './Todos.module.css';

const Todos: React.FC = () => {
    const ctx = useContext(TodoContext);

    return (
        <ul className={styles.todos}>
            {ctx.items.map(item => <TodoItem onRemoveItem={ctx.onRemoveTodo.bind(null,item.id)} text={item.text} key={item.id} />)}
        </ul>
    )
};

export default Todos;