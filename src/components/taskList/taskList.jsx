import "./taskList.css"


export default function TaskList({ tasks, onToggle, onDelete }) {
    return (
        <div className="task-list" >
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}><input 
                        type="checkbox"
                        checked={task.completed}
                        onChange={() => onToggle(index)}
                    />
                    {task.text}
                    <button onClick={() => onDelete(index)} >❌</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}