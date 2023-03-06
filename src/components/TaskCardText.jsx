import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import "../scenes/zen-path.css"
import 'bootstrap/dist/css/bootstrap.min.css'


export default function TaskCardText({ task }) {
    const navigate = useNavigate();
  



    return (
        <div className="texttask">

            <Container>

                <Row>
                    <Col className='taskh1'><h1>{task.title}</h1></Col>
                </Row>
                <Row>
                    <Col>
                        <img className='tempimg' src="https://img.mensxp.com/media/content/2022/Oct/yoga-lotus-pose-meditation_635b7b1822f7c.jpeg" alt='asldfj' />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className='textbox'>
                            <p>{task.text}</p>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <p>Click When Finished</p>
                    </Col>
                </Row>
                <Row>
                    <Col className='checkbox'>
                        <Form>
                            <Form.Check
                                type="switch"
                                id="custom-switch"
                            />
                        </Form>
                    </Col>
                </Row>
                <div className="homebutton">
                    <Button onClick={() => navigate('/tasks')}>Back to Tasks</Button>
                </div>
            </Container>
        </div>
    )
}

