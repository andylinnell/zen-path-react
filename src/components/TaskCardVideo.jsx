import { useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import "../scenes/zen-path.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import FinishTask from './FinishTask'

export default function TaskCardVideo({ task }) {
    const navigate = useNavigate();

    return (
        <div className="videotask">
            <Container>
                <Row>
                    <Col className='vidh1'>{task.title}</Col>
                </Row>
                <Row>
                    <Col className='viddiv'>
                        <iframe width="100%" height="500px" src={task.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Click When Finished</p>
                    </Col>
                </Row>
                <FinishTask />
                <div className="homebutton">
                    <button onClick={() => navigate('/tasks')} class="button-85" role="button">Back to Tasks</button>
                </div>
            </Container>
        </div>
    )
}