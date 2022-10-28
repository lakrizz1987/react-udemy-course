import { prependListener } from "process";
import React, { useRef } from "react";
import { isPropertySignature } from "typescript";
import styles from './NewTodo.module.css';

const NewTodo: React.FC<{ addHandler: (x: string) => void }> = (porps) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();

        const newTodoText = inputRef.current!.value;

        if (newTodoText.trim().length < 1) {
            alert('No empty todos!!!')
            return
        }

        porps.addHandler(newTodoText)
    };

    return (
        <form onSubmit={submitHandler} className={styles.form}>
            <label htmlFor="todo">Todo Text:</label>
            <input type='text' id="todo" ref={inputRef} />
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodo;