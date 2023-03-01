import { useNavigate } from 'react-router-dom'
import  Button from 'react-bootstrap/Button'
import ".//homepage.css"
import 'bootstrap/dist/css/bootstrap.min.css'

export default function OneTaskVideo() {
    const navigate = useNavigate()


    return (
        <div className="task">
            <div className="h2">
                <h1>Zen Path Video Task</h1>
            </div>
            <div className="homebutton">
                <Button onClick={() => navigate('/tasks')}>Back to Tasks</Button>
            </div>
        </div>
        
    )
}