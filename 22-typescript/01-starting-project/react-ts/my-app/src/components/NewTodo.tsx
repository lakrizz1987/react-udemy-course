import { prependListener } from "process";
import React, { useRef } from "react";
import { isPropertySignature } from "typescript";

const NewTodo = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const submitHandler = (e: React.FormEvent) => {
        e.preventDefault();

        const newTodoText = inputRef.current!.value;

        if (newTodoText.trim().length < 1) {
            alert('No empty todos!!!')
            return
        }


    };

    return (
        <form onSubmit={submitHandler}>
            <label htmlFor="todo">Todo Text:</label>
            <input type='text' id="todo" ref={inputRef} />
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodo;