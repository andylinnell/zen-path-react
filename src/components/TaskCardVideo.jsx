import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import "../scenes/zen-path.css"
import 'bootstrap/dist/css/bootstrap.min.css'

export default function TaskCardVideo({ task }) {
    const navigate = useNavigate();

    return (
        <div className="videotask">
        <Container>
            <Row>
                <Col className='vidh1'>{task.title}</Col>
            </Row>
            <Row>
                <Col>
                    <div className='viddiv'>
                        <iframe width="500em" height="315px" src={task.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </Col>
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
            </Row>
            <div className="homebutton">
                <Button onClick={() => navigate('/tasks')}>Back to Tasks</Button>
            </div>
        </Container>
    </div>
    )
}