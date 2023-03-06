import { useNavigate } from 'react-router-dom'
// import { TaskContext } from "../context/TaskContext";
import {  useState } from "react";
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ".//zen-path.css"
import 'bootstrap/dist/css/bootstrap.min.css'

export default function TasksByLevel() {
    const navigate = useNavigate()
    // const { setBestFor, setType } = useContext(TaskContext);
    const [selectedLevel, setSelectedLevel] = useState()
    const [selectedTask, setSelectedTask] = useState()
  
    const onClickTask1 = () => {
      setSelectedLevel(1);
      setSelectedTask(1);
      navigate("/task1");
    };
  
    // const onClickTask2 = () => {
    //   setSelectedLevel(1);
    //   setSelectedTask(2);
    //   navigate("/task1");
    // };
  
    // const onClickTask3 = () => {
    //   setSelectedLevel(1);
    //   setSelectedTask(3);
    //   navigate("/task1");
    // };

    // const onClickTask4 = () => {
    //     setBestFor(1);
    //     setSelectedLevel(4);
    //     navigate("/task4");
    //   };


    return (
        <div className='tasks'>
            <Container >
                <Row>
                    <Col className="tasksh1">
                        <h1>Zen Tasks</h1>
                    </Col>
                </Row>
                <Row className="taskimg" onClick={onClickTask1}>
                    <Col>
                        <img src="../images/mapicon1.png" alt="medi-man"  />
                        <p>task name</p>
                    </Col>
                </Row >
                {/* <Row className="taskimg" >
                    <Col>
                        <img src="../images/mapicon2.png" alt="medi-man" onClick={() => navigate('/')}/>
                        <p>task name</p>
                    </Col>
                </Row >
                <Row className="taskimg" >
                    <Col>
                        <img src="../images/mapicon3.png" alt="medi-man" onClick={() => navigate('/')}/>
                        <p>task name</p>
                    </Col>
                </Row >
                <Row className="taskimg" >
                    <Col>
                        <img src="../images/mapicon4.png" alt="medi-man" onClick={() => navigate('/task4')} />
                        <p>task name</p>
                    </Col>
                </Row > */}
                <Row>
                    <Col>
                        <Button className='homebutton' onClick={() => navigate('/')} >Back to Home</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}