import { useState, useEffect } from 'react'
import ".//zen-path.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import TaskCardText from '../components/TaskCardText'


export default function OneTaskText() {
    const [taskData, setTaskData] = useState()
    // const { level, setLevel } = useContext(TaskContext);
    // const { taskNo, setTaskNo } = useContext(TaskContext);
    // const { title, setTitle } = useContext(TaskContext);
    // const { text, setText } = useContext(TaskContext);
    // const { products, setProducts } = useContext(ResultsContext);
    // const { bestFor } = useContext(TaskContext);

    useEffect(() => {
        fetch('https://zen-path-api.web.app/tasks')
            .then(res => res.json())
            .then(setTaskData)
            .catch(err => console.error(err))
    }, []);
    

    return (
        <article>

            {!taskData
                ? (<h2>Loading...</h2>)
                : (<section id="section">
                    {taskData.map((element) => {
                        return <TaskCardText key={element.id} task={element} />
                    })}
                </section>)
            }

        </article>)
}