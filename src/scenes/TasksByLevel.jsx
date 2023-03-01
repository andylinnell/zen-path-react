// import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import ".//homepage.css"
import 'bootstrap/dist/css/bootstrap.min.css'

export default function TasksByLevel() {
    const navigate = useNavigate()
//     const [tasks, setTasks] = useState



    return (
        <div className="task">
            <div className="h2">
                <h2>Zen Tasks</h2>
            </div>
            <div className="taskimg" onClick={() => navigate('/task1')}>
                <img src="../images/mapicon1.png" alt="medi-man" />
                <p>task name</p>
            </div >
            <div className="taskimg" onClick={() => navigate('/task2')}>
                <img src="../images/mapicon2.png" alt="medi-man" />
                <p>task name</p>
            </div >
            <div className="taskimg" onClick={() => navigate('/task3')}>
                <img src="../images/mapicon3.png" alt="medi-man" />
                <p>task name</p>
            </div >
            <div className="taskimg" onClick={() => navigate('/task4')}>
                <img src="../images/mapicon4.png" alt="medi-man" />
                <p>task name</p>
            </div >
            <div>
                <Button onClick={() => navigate('/')}>Back to Home</Button>
            </div>
        </div>
    )
}