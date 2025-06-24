import "./input.css"

export default function Input({value, onValueChange, onAdd}) {
    return (
        <div className="div-input" >
            <label className="add-task">Add task</label>
            <input className="input" type="text" value={value} onChange={(e) => onValueChange(e.target.value)} 
            onKeyDown={(e) => {if (e.key === "Enter") {
                onAdd();
                }
                }} /> 
            <button className="button" onClick={onAdd} >Add</button>
        </div>
    )
}