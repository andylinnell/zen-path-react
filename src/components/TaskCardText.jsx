import { useNavigate } from 'react-router-dom'
import React from 'react'
import { useState } from 'react'
import Button from 'react-bootstrap/Button'
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

            <Container>

                <Row>
                    <Col className='taskh1'><h1>{task.title}</h1></Col>
                </Row>
                <div className='textbox'>
                    <Row>
                        <Col>
                            <p className='textcard'>{task.text}</p>
                        </Col>
                    </Row>
                    <Row>
                        {/* <Col >
                        <img className='tempimg' src="../images/—Pngtree—cartoon hand drawn lotus meditator_4887171.png" alt='asldfj' />
                    </Col> */}
                    </Row>
                </div>
                <Row>
                    <Col >
                        <p className='whenfinished'>Click When Finished</p>
                    </Col>
                </Row>
                    <FinishTask/>
                <div className="homebutton">
                    <button onClick={() => navigate('/tasks')} class="button-85" role="button">Back to Tasks</button>

                </div>
            </Container>
        </div>
    )
}

