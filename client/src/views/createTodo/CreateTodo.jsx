import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import { useHistory } from "react-router";
import { createTodo } from "../../services/todo";



const NewTodo = (props) => {
    const [input, setInput] = useState({
        name: "",
        location: "",
        description: "",
        date: "",
        flightInfo: "",
        imageURL: "",
    });
    const history = useHistory();
    
    const handleChange = (e) => {
        const { id, value } = e.target

        setInput((prevInput) => ({
            ...prevInput,
            [id]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createTodo(input);
        history.push("/")
    }

    return(
        <Layout user={props.user} setUser={props.setUser}>
            New Todo
            <form className="min-h-screen" onSubmit={handleSubmit}>
                <label>Name</label>
                <br />
                <input id="name" value={input.name} onChange={handleChange}/>
                <br />
                <label>Location</label>
                <br /> 
                <input id="location" value={input.location} onChange={handleChange}/>
                <br />
                <label>Description</label>
                <br /> 
                <input id="description" value={input.description} onChange={handleChange}/>
                <br />
                <label>Date</label>
                <br /> 
                <input id="date" value={input.date} onChange={handleChange}/>
                <br />
                <label>Flight Information</label>
                <br /> 
                <input id="flightInfo" value={input.flightInfo} onChange={handleChange}/>
                <br />
                <label>Image</label>
                <br /> 
                <input id="imageURL" value={input.imageURL} onChange={handleChange}/>
                <br />
                <button type="submit">Submit</button>
            </form>

        </Layout>
    )
};
export default NewTodo;