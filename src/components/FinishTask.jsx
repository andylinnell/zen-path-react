import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import "../scenes/zen-path.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'

    // const [isComplete, setIsComplete] = useState();

    // const toggleDone = () => {
    //     const newIsComplete = !isComplete;
    //     setIsComplete(newIsComplete);

    //     const newTask = { ...task, done: newIsComplete, complete: !newIsComplete };

    //     fetch(`https://zen-path-api.web.app/tasks/${task._id}`, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(newTask),
    //     })
    //         .then((res) => res.json())
    //         .catch(console.error);
    // };


export default function FinishTask() {

    return (
        <>
            <Row>
                <Col className='checkbox'>
                    <Form>
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                        // checked={isComplete}
                        // onChange={toggleDone}
                        />
                    </Form>
                </Col>
            </Row>
        </>
    )
}