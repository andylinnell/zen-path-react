import { useNavigate } from 'react-router-dom'
import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "../scenes/zen-path.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import FinishTask from './FinishTask'


export default function TaskCardText({ task }) {
    const navigate = useNavigate();



    return (
        <div className="texttask">

            <Row >
                <Col lg={12}><h1 className='taskh1'>{task.title}</h1></Col>
            </Row>

            <Container >
                <Row className=''>
                    <Col >
                        <p className='textbox'>{task.text}</p>
                    </Col>
                </Row>
            </Container>
            <Row>
                <Col >
                    <p className='whenfinished'>Click When Finished</p>
                </Col>
            </Row>
            <FinishTask task={task} />
            <div className="homebutton">
                <button onClick={() => navigate('/tasks')} class="button-85" role="button">Back to Tasks</button>

            </div>

        </div>
    )
}

