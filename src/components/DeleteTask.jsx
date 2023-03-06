

// export default function DeleteTask({ data, setTasks }) {
//     const { title, _id, done } = data;
//     const handleDelete = () => {
//         fetch(`https://zen-path-api.web.app/tasks/${_id}`, {
//             method: "DELETE",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//         })
//             .then((res) => res.json())
//             .then(setTasks)
//             .catch(console.error);
//     }
//     return (
//         <>
//             <Row style={styles.taskCardContainer}>

//                 <Button variant="primary" type="submit" onClick={handleSubmit} >
//                     Submit
//                 </Button>

//                 <Row style={done ? <p>Task Deleted</p> : <p>Not Valid Task</p>}>{title}</Row>
//             </Row>
//         </>
//     );
// }






