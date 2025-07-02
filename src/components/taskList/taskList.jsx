import { useState } from "react";
import "./taskList.css"


export default function TaskList({ tasks, onToggle, onDelete, onStartEditing, onSaveEdit }) {
    const [editText, setEditText] = useState("");

    return (
        <div className="task-list" >
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        {task.isEditing ? (
                        <input 
                         type="text"
                         value={editText}
                         onChange={(e) => setEditText(e.target.value)}
                         onBlur={() => onSaveEdit(index, editText)}
                        onKeyDown={(e) => { 
                        if (e.key === "Enter") onSaveEdit(index, editText); 
                        }}
                        autoFocus
                        />
                    ) : (
                        <>
                        <input 
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => onToggle(index)}
                    />
                    <span onClick={() => {
                        onStartEditing(index);
                        setEditText(task.text);
                    }}
                    >
                        {task.text}
                    </span>
                    <button onClick={() => onDelete(index)}>❌</button>
                    </>
                    )}
                    </li>
                ))}
            </ul>
        </div>
    )
}