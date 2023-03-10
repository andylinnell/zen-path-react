import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

export default function FinishTask({task}) {

      const toggleDone = (e) => {
        let _task = task
        _task.complete = e.target.value === "on"
        fetch(`http://127.0.0.1:5002/tasks/${task._id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
        body: JSON.stringify(_task),
        })
          .then((res) => res.json())
          .then(res => {
            console.log(res)
            
          })
          .catch(console.error);
      };

    return (
        <Row>
            <Col className="checkbox">
                <Form>
                    <Form.Check
                        type="switch"
                        id="custom-switch"
                        onChange={toggleDone}
                    
                    />
                </Form>
            
            </Col>
        </Row>
    );
}
