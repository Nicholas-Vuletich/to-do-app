import "./filter.css"

export default function Filter({filter, handleFilterChange, clearCompletedTasks }) { 

return (
    <div className="filter-div" >
        <button className={filter === "all" ? "active-filter" : ""} onClick={() => handleFilterChange("all")} >All</button>
        <button className={filter === "active" ? "active-filter" : ""} onClick={() => handleFilterChange("active")} >Active</button>
        <button className={filter === "completed" ? "active-filter" : ""} onClick={() => handleFilterChange("completed")} >Completed</button>

        <button onClick={clearCompletedTasks} >Clear Completed</button>
    </div>
)
}