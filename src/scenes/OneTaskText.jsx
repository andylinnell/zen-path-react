import { useEffect, useContext } from 'react'
import ".//zen-path.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import TaskCardText from '../components/TaskCardText'
import { TaskContext } from '../context/TaskContext';


export default function OneTaskText() {
    const { selectedTask, selectedLevel, setTaskData, taskData }
         = useContext(TaskContext);

    

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
                        return <TaskCardText key={element._id} task={element} />
                    })}
                </section>)
            }

        </article>)
}