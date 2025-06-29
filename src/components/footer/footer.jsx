import "./footer.css"

export default function Footer({ totalTasks, completedTasks }) {
    const percentage = 
        totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

    return (
        <div className="footer" >
            <p>Obavljeno {completedTasks} od {totalTasks} zadataka {percentage}%</p>
        </div>
    )
}