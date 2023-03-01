import { useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import  Row from 'react-bootstrap/Row'
import  Col from 'react-bootstrap/Col'
import  Button from 'react-bootstrap/Button'
import ".//homepage.css"
import 'bootstrap/dist/css/bootstrap.min.css'


export default function OneTaskText({ task}) {
    const navigate = useNavigate()

    return (
        <div className="task">
            <Container>
                <Row>
                    <Col>Text Task</Col>
                </Row>
                <Row>
                    <Col></Col>
                </Row>
            <div className="homebutton">
                <Button onClick={() => navigate('/tasks')}>Back to Tasks</Button>
            </div>
            </Container>
        </div>
    )
}