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

    // const [formData, setFormData] = useState({
    //     title: "",
    //     taskNo: "",
    //     level: "",
    //     text: "",
    // });

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


        // const handleInputChange = (e) => {
        //     // const { name, value } = e.target;

        //     // setFormData((prevFormData) => ({
        //     //     ...prevFormData,
        //     //     [name]: value,
        //     // }));

        //     setFormData({ value: e.target.value });
        // };

        // console.log({ title })
        // console.log({ formData })

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

                <Button variant="primary" type="submit"  >
                    Submit
                </Button>
            </Form>

            //     <Form onSubmit={handleSubmit}>
            //     <Form.Group className="mb-3" controlId="formBasicEmail">
            //       <Form.Label>Email address</Form.Label>
            //       <Form.Control type="email" placeholder="Enter email" />
            //       <Form.Text className="text-muted">
            //         We'll never share your email with anyone else.
            //       </Form.Text>
            //     </Form.Group>

            //     <Form.Group className="mb-3" controlId="formBasicPassword">
            //       <Form.Label>Password</Form.Label>
            //       <Form.Control type="password" placeholder="Password" />
            //     </Form.Group>
            //     <Form.Group className="mb-3" controlId="formBasicCheckbox">
            //       <Form.Check type="checkbox" label="Check me out" />
            //     </Form.Group>
            //     <Button variant="primary" type="submit">
            //       Submit
            //     </Button>
            //   </Form>







        );
    }
