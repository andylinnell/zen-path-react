import { useNavigate } from 'react-router-dom'
// import Container from 'react-bootstrap/Container'
import  Row from 'react-bootstrap/Row'
import  Col from 'react-bootstrap/Col'
import  Button from 'react-bootstrap/Button'
import ".//zen-path.css"
import 'bootstrap/dist/css/bootstrap.min.css'




export default function HomePage() {
    const navigate = useNavigate()


    return (
        <div className="homebg">

            <div>
            <Button  onClick={() => navigate('/admin')}>Admin</Button>
            </div>
            <Row>
                <Col className='welcomeh1'>
                <h1>Zen Path</h1>
                </Col>
            </Row>
            <Row>
                <Col className='ying'>
                <img src="../images/yingyang2.png" alt="medi-man" />
                </Col>
            </Row >
            <Row>
                <Col>
                <Button className='beginbutton' onClick={() => navigate('/levelselect')}>Begin Your Journey</Button>
                </Col>
            </Row>
        </div>
    )
}

