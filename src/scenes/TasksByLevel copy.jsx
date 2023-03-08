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
    console.log({taskData})

    console.log({selectedLevel})

    useEffect(() => {
        fetch('https://zen-path-api.web.app/tasks')
            .then(res => res.json())
            .then((data) => {
                const levels = data.filter((task) => task.level === selectedLevel)
                setTaskData(levels)
            })
            .catch(err => console.error(err))
    }, [selectedLevel]);

    const onClickTask = (taskNo) => {
        // setSelectedLevel(1);
        setSelectedTask(taskNo);
        navigate("/task1");
    };

    return (
        <div className='tasks'>

            <Container >
                <Row>
                    <Col className="tasksh1">
                        <h1>Zen Tasks</h1>
                    </Col>
                </Row>
                {taskData?.map(task => (
                    <Row key={task._id} className="taskimg" onClick={() => onClickTask(task.taskNo)}>
                        <Col>
                            <img src={`../images/mapicon${task.taskNo}.png`} alt="medi-man" />
                            <p>{task.title}</p>
                        </Col>
                    </Row >
                ))}
                <Row>
                    <Col>
                        <Button className='homebutton' onClick={() => navigate('/')} >Back to Home</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}