import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


function CreatePost() {
const navigate = useNavigate();
const [post, setPost] = useState({
    title:"",
    description:"",
});

  const handleChange = (event) => {
    const {name, value} =event.target;

    setPost(prev => {
        return ({
            ...prev,
            [name]:value,
        });
    });
  };

  const handleClick = (event) => {
    event.preventDefault();

    axios.post("http://localhost:3001/create", post)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))

    navigate("/create/posts");
  }

    return(
        <div style={{width:"90%", margin:"auto auto", textAlign:"center"}}>
            <h1>Create a Post</h1>
            <Form>
                <Form.Group>
                    <Form.Control name="title" value={post.title} placeholder="Title" style={{marginBottom:"1rem"}} onChange={handleChange} />
                    <Form.Control name="description" value={post.description} placeholder="Description" style={{marginBottom:"1rem"}} onChange={handleChange} />
                </Form.Group>
                <Button variant="outline-success" style={{width:"100%"}} onClick={handleClick}>CREATE POST</Button>
            </Form>
            <Button variant="outline-dark" style={{width:"100%", marginBottom:"1rem"}} onClick={() => navigate(-1)}>BACK</Button>
        </div>
    )
}

export default CreatePost;