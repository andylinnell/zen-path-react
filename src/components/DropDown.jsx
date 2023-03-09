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

            <Row className='justify-content-center levelbox'>
                <Col sm={12} md={4} onClick={onClickLevel1}>
                    <h1 className='lvlh1'>Level 1</h1>
                    <img className='level1pic' src="../images/peakpx3.png" alt="level1pic" />
                </Col>

                <Col sm={12} md={4} onClick={onClickLevel2}>
                    <h1 className='lvlh1'>Level 2</h1>
                    <img className='level2pic' src="../images/peakpx2.png" alt="level1pic" />
                </Col>

                <Col sm={12} md={4} onClick={onClickLevel3}>
                    <h1 className='lvlh1'>Level 3</h1>
                    <img className='level3pic' src="../images/peakpx1.png" alt="level1pic" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <button onClick={() => navigate('/')} class="button-85" role="button">Back Home</button>
                </Col>
            </Row>



        </>

    );
}
