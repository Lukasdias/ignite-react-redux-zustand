import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../store";

interface Todo {
        id: number;
        text: string;
}

/* eslint-disable @typescript-eslint/no-unsafe-call */
export const TodoList = () => {
        const todos = useAppSelector((store) => store.todo);
        return (
                <ul className="gap-4 flex-col flex border-red-100 rounded-md border p-10">
                        {todos?.map((todo, idx: number) => (
                                <TodoItem key={idx} id={idx} text={todo} />
                        ))}
                </ul>
        );
};

export const TodoItem = (props: Todo) => {
        const [checked, setChecked] = useState(false);

        return (
                <li
                        className="
      text-xl text-green-500 bg-white rounded-md p-4   
    "
                >
                        <input
                                type="checkbox"
                                checked={checked}
                                onChange={() => setChecked(!checked)}
                        />
                        <span className="ml-4">{props.text}</span>
                </li>
        );
};

export const AddTodo = () => {
        const [newTodo, setNewTodo] = useState("");
        const dispatch = useDispatch();

        const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
                if (newTodo === "") return;
                e.preventDefault();
                dispatch({ type: "todo/add", payload: { newTodo } });
                setNewTodo("");
        };
        return (
                <form onSubmit={handleSubmit} className="flex gap-4">
                        <input
                                type="text"
                                value={newTodo}
                                placeholder="Add a new todo"
                                onChange={(e) => setNewTodo(e.target.value)}
                                className="text-green-700 bg-white rounded-md p-4"
                        />
                        <button
                                type="submit"
                                className="text-green-700 bg-white rounded-md p-4"
                        >
                                Add Todo
                        </button>
                </form>
        );
};
