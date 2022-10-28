import React from "react";
import Todo from "../models/Todo";
import TodoItem from "./TodoItem";
import styles from './Todos.module.css';

const Todos: React.FC<{ items: Todo[] }> = (props) => {
    return (
        <ul className={styles.todos}>
            {props.items.map(item => <TodoItem text={item.text} key={item.id} />)}
        </ul>
    )
};

export default Todos;