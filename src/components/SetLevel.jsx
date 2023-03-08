import { useState, useEffect, useContext } from 'react'
import ".//zen-path.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import TaskCardText from '../components/TaskCardText'
import { TaskContext } from '../context/TaskContext';
import TasksByLevel from '../scenes/TasksByLevel';


export default function OneTaskText() {
    const navigate = useNavigate()
    const { selectedLevel, setSelectedLevel } = useContext(TaskContext);
    const [levelData, setLevelData] = useState()

    
console.log({selectedLevel})

    useEffect(() => {
        fetch('https://zen-path-api.web.app/tasks')
            .then(res => res.json())
            .then((data) => {
                const levels = data.filter((task) => task.level === selectedLevel)
                setTaskData(tasks)
            })
            .catch(err => console.error(err))
    }, [selectedLevel]);
    

    return (
        <article>

            {!levelData
                ? (<h2>Loading...</h2>)
                : (<section id="section">
                    {levelData.map((element) => {
                        return <TasksByLevel key={element._id} level={element} taskTitle={element.title}/>
                    })}
                </section>)
            }

        </article>)
}