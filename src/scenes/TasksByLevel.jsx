import { useNavigate } from 'react-router-dom'
import { TaskContext } from "../context/TaskContext";
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ".//zen-path.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import { useContext, useEffect, useState } from 'react';

export default function TasksByLevel() {
    const navigate = useNavigate()
    const { taskData, setSelectedTask, selectedLevel, setTaskData } = useContext(TaskContext);
    // const [selectedTask, setSelectedTask] = useState()

    useEffect(() => { // fetch tasks when the selectedLevel changes
        fetch('https://zen-path-api.web.app/tasks')
            .then(res => res.json()) // convert the response to JSON
            .then((data) => {
                const levels = data.filter((task) => task.level === selectedLevel);
                setTaskData(levels); // update the taskData value with the filtered data
            })
            .catch(err => console.error(err));
    }, [selectedLevel]); // re-run the effect whenever the selectedLevel value changes


    const onClickTask = (taskNo) => { // handle a click event on a task
        setSelectedTask(taskNo);
        console.log('---------', taskNo)
        navigate(`/task${taskNo}`);

    };

    return (
        < div className='tasklist'>
            <Row>
                <Col >
                    <h1 className="tasksh1">Zen Tasks</h1>
                </Col>
            </Row>
            <Container className='d-flex taskcontainer' >

                <Row className='taskbox '>

                    {taskData?.map(task => (
                        <Col sm={12} key={task._id} className="taskimg">
                            <div style={{ position: 'relative' }}>
                                <img src={`../images/mapicon${task.taskNo}.png`} alt="medi-man" onClick={() => onClickTask(task.taskNo)} className="taskbuttons" />
                                {task.complete && (
                                    <div >
                                        <img src={`../images/check1.png`} alt="overlay" className='check' />
                                    </div>
                                )}
                            </div>
                            <p className='taskbutton'>{task.title}</p>
                        </Col>
                    ))}
                </Row>
            </Container>
            <Row className=''>
                <Col>
                    <button onClick={() => navigate('/levelselect')} class="button-85" role="button">Back to Levels</button>
                </Col>
            </Row>
        </div>
    )
}