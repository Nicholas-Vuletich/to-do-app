import "./input.css"

export default function Input({value, onValueChange}) {
    return (
        <div className="div-input" >
            <label className="add-task">Add task</label>
            <input className="input" type="text" value={value} onChange={(e) => onValueChange(e.target.value)} ></input>
            <button className="button">Add</button>
        </div>
    )
}