import { useContext } from "react"; // Line not required
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { TaskContext } from "../context/TaskContext";

export default function AddTask() {
    // const [title, setTitle] = useState('');
    // const [taskNo, setTaskNo] = useState('');
    // const [level, setLevel] = useState('');
    // const [text, setText] = useState('');

    const { level, setLevel } = useContext(TaskContext);
    const { taskNo, setTaskNo } = useContext(TaskContext);
    const { title, setTitle } = useContext(TaskContext);
    const { text, setText } = useContext(TaskContext);
    const { video, setVideo} = useContext(TaskContext)


    const formData = { title, taskNo, level, text }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log({ formData })

            fetch(`https://zen-path-api.web.app/tasks`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })
                .then((res) => res.json())
                .then((data) => console.log(data))
                .catch((error) => console.error(error));
        }


        return (
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter Task Title" onChange={(e) => setTitle(e.target.value)} value={title} />
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicTextTask">
                <Form.Label>Task Information</Form.Label>
                <Form.Control type="text" placeholder="Task Info" value={text} onChange={(e) => setText(e.target.value)} />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicLevel">
                <Form.Label>Level #</Form.Label>
                <Form.Control type="text" placeholder="Level" value={level} onChange={(e) => setLevel(e.target.value)} />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicTaskNo">
                <Form.Label>Task No.</Form.Label>
                <Form.Control type="text" placeholder="Task #" value={taskNo} onChange={(e) => setTaskNo(e.target.value)} />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicVideo">
                <Form.Label>Video</Form.Label>
                <Form.Control type="text" placeholder="video" value={video} onChange={(e) => setVideo(e.target.value)} />
                <Form.Text className="text-muted">
                </Form.Text>
            </Form.Group>

                <Button variant="primary" type="submit"  >
                    Submit
                </Button>
            </Form>



        );
    }
