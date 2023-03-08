import { useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ".//zen-path.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import DropDown from '../components/DropDown';

export default function TasksByLevelSelect() {
    const navigate = useNavigate()
    // const { selectedTask, setSelectedTask } = useContext(TaskContext);



    return (
        <div className='tasks'>

            <Container >
                <Row>
                    <Col className="tasksh1">
                        <h1>Zen Tasks</h1>
                    </Col>
                </Row>
                <DropDown />
            </Container>
        </div>
    )
}