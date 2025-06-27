import "./taskList.css"


export default function TaskList({ tasks, onToggle }) {
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
                    </li>
                ))}
            </ul>
        </div>
    )
}