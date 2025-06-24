import "./taskList.css"


export default function TaskList({ textToDisplay }) {
    return (
        <div className="task-list" >
            <p> {textToDisplay} </p>
        </div>
    )
}