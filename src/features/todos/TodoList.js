// add imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import {
    useCreateTodoMutation,
    useDeleteTodoMutation,
    useGetTodosQuery,
    useUpdateTodoMutation,
} from "./slices/todo";
import { nanoid } from "@reduxjs/toolkit";

const TodoList = () => {
    const [newTodo, setNewTodo] = useState("");
    const { data } = useGetTodosQuery();
    const [updateTodo, { isLoading }] = useUpdateTodoMutation();
    const [deleteTodo] = useDeleteTodoMutation();
    const [createTodo] = useCreateTodoMutation();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(newTodo);

        let todoItem = {
            userId: nanoid(),
            id: nanoid(),
            title: newTodo,
            completed: false,
        };
        createTodo(todoItem);
        setNewTodo("");
    };

    const newItemSection = (
        <form onSubmit={handleSubmit}>
            <label htmlFor="new-todo">Enter a new todo item</label>
            <div className="new-todo">
                <input
                    type="text"
                    id="new-todo"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                    placeholder="Enter new todo"
                />
            </div>
            <button className="submit">
                <FontAwesomeIcon icon={faUpload} />
            </button>
        </form>
    );

    let content;

    return (
        <main>
            <h1>Todo List</h1>
            {newItemSection}
            {content}
        </main>
    );
};
export default TodoList;
