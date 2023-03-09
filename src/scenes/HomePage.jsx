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


            <Row>
                <Col >
                <h1 className='welcomeh1'>Zen Path</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                <button onClick={() => navigate('/levelselect')}class="button-85" role="button">Begin Your Journey</button>

                </Col>
            </Row>
        </div>
    )
}

