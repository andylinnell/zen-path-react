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


    useEffect(() => { // useEffect hook to fetch tasks when the selectedLevel changes
        fetch('https://zen-path-api.web.app/tasks') 
          .then(res => res.json()) // convert the response to JSON
          .then((data) => {
            const levels = data.filter((task) => task.level === selectedLevel); 
            setTaskData(levels); // update the taskData value with the filtered data
          })
          .catch(err => console.error(err)); 
      }, [selectedLevel]); // re-run the effect whenever the selectedLevel value changes
    
      const onClickTask = (taskNo) => { // onClickTask function to handle a click event on a task
        setSelectedTask(taskNo); // update the selected task using setSelectedTask
        navigate("/task1"); 

        // const onClickTask4 = () => {
        //     // setBestFor(1);
        //     setSelectedTask(4);
        //     navigate("/task4");
        // };
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