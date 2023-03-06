import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import ".//zen-path.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import AddTask from '../components/AddTask'


export default function Admin({ task }) {
    const navigate = useNavigate()

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="adminbg">
            <Container>
                <Row>
                    <Col className='adminh1'>
                        <h1>Admin Page</h1>
                    </Col>
                </Row>
                <Row>
                    <Col className='adminbutt'>
                        <h2>Level 1</h2>
                        <Button variant="primary" onClick={handleShow}>Add Task Level 1</Button>              
                    </Col>
                </Row >
                <Row>
                    <Col className='adminbutt'>
                        <h2>Level 2</h2>
                        <Button variant="primary" onClick={handleShow}>Add Task Level 2</Button>
                    </Col>
                </Row >
                <Row>
                    <Col className='adminbutt'>
                        <h2>Level 3</h2>
                        <Button className='adminbutt' variant="primary" onClick={handleShow}>Add Task Level 3</Button>
                    </Col>
                </Row >
                <Row>
                    <Col>
                        <Button onClick={() => navigate('/')}>Back Home</Button>
                    </Col>
                </Row>



                <Row>
                    <Col>
                        <Modal show={show} onHide={handleClose}>
                            <Modal.Header closeButton>
                                <Modal.Title>Add Task Form</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>

                                <AddTask/>

                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Modal>


                    </Col>
                </Row>
            </Container>
        </div>
    )
}