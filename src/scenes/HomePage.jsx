import { useNavigate } from 'react-router-dom'
import  Button from 'react-bootstrap/Button'
import ".//homepage.css"
import 'bootstrap/dist/css/bootstrap.min.css'




export default function HomePage() {
    const navigate = useNavigate()


    return (
        <div className="homebg">
            <div className="h1">
                <h1>Zen Path</h1>
            </div>
            <div className="homelogo">
                <img src="../images/yingyang2.png" alt="medi-man" />
            </div >
            <div className="homebutton">
            <Button onClick={() => navigate('/tasks')}>Begin Your Journey</Button>
            </div>
        </div>
    )
}

