import { useState, useEffect, useContext } from 'react'
import ".//zen-path.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import { TaskContext } from '../context/TaskContext';
import TaskCardVideo from '../components/TaskCardVideo'

export default function OneTaskVideo({ task }) {
    // const navigate = useNavigate()

    const { selectedTask, setSelectedTask } = useContext(TaskContext);
    const { selectedLevel, setSelectedLevel } = useContext(TaskContext);

    const [taskData, setTaskData] = useState()
    
console.log({selectedTask})

    useEffect(() => {
        fetch('https://zen-path-api.web.app/tasks')
            .then(res => res.json())
            .then((data) => {
                const tasks = data.filter((task) => task.taskNo === selectedTask && task.level === selectedLevel)
                setTaskData(tasks)
            })
            .catch(err => console.error(err))
    }, []);


    return (
        <article>

            {!taskData
                ? (<h2>Loading...</h2>)
                : (<section id="section">
                    {taskData.map((element) => {
                        return <TaskCardVideo key={element._id} task={element} />
                    })}
                </section>)
            }

        </article>
    )
}
