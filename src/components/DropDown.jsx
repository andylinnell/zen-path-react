import { useNavigate } from 'react-router-dom'
import { TaskContext } from "../context/TaskContext";
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import "../scenes/zen-path.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import { useContext } from 'react';

export default function DropDown() {
    const navigate = useNavigate()
    const { selectedLevel, setSelectedLevel } = useContext(TaskContext);

    const onClickLevel1 = () => {
        setSelectedLevel(1);
        navigate("/tasks");
    };

    const onClickLevel2 = () => {
        setSelectedLevel(2);
        navigate("/tasks");
    };

    const onClickLevel3 = () => {
        setSelectedLevel(3);
        navigate("/tasks");
    };


    return (
        <>
            <Container >



                <Row>
                    <Col>
                        <Button className='homebutton' onClick={onClickLevel1} >Level 1</Button>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Button className='homebutton' onClick={onClickLevel2} >Level 2</Button>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Button className='homebutton' onClick={onClickLevel3} >Level 3</Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
