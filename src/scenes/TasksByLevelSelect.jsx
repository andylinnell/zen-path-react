import { useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button  from 'react-bootstrap/Button'
import ".//zen-path.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import DropDown from '../components/DropDown';

export default function TasksByLevelSelect() {
    const navigate = useNavigate()
    // const { selectedTask, setSelectedTask } = useContext(TaskContext);



    return (
        <div className='tasksbylevel'>

            <Container>
                <Row>
                    <Col >
                        <h1 className="tasksh1">Zen Levels</h1>
                    </Col>
                </Row>
                
                <DropDown />
            </Container>
        </div>
    )
}