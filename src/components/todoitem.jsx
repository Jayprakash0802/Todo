import { useState } from "react";
import useTodo from "../contex/todo";

function TodoItem({ todo }) {
    const { deletetodo, updatetodo, togglecomplete } = useTodo();
    const [todomsg, setTodoMsg] = useState(todo.todo);
    const [iseditabel, setIseditable] = useState(false);

    const editTodo = () => {
        // todo.todo=todomsg;
        updatetodo(todo.id, {...todo, todo: todomsg});
        setIseditable(false);
        // setTodoMsg("");
    }
    const togglecompleted = () => {
        togglecomplete(todo.id)
    }

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
                }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={togglecompleted}
            />
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${iseditabel ? "border-black/10 px-2" : "border-transparent"
                    } ${todo.completed ? "line-through" : ""}`}
                value={todomsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                readOnly={!iseditabel}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;

                    else if (iseditabel) {
                        editTodo();
                    } else setIseditable((prev) => !prev);
                }}
                disabled={todo.completed}
            >
                {iseditabel ? "📁" : "✏️"}
            </button>
            {/* Delete Todo Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deletetodo(todo.id)}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;