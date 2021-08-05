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
        history.push("/todos")
    }

    return (
        <Layout user={props.user} setUser={props.setUser}>
            <div className=" min-h-screen shadow-2xl px-8 pb-10 mb-4 font-serif pt-40 ">
                <h3  className="flex justify-center font-bold uppercase text-black text-2xl italic font-mono">Add New Trip</h3>
                <div className="lg:flex lg:justify-center lg:items-center lg:px-14">
                <div className=" text-black flex justify-center bg-gray-400 rounded-lg mt-14 py-5 shadow-2xl">
                    <form onSubmit={handleSubmit}>
                        <label>Name</label>
                        <br />
                        <input id="name" value={input.name} onChange={handleChange} />
                        <br />
                        <br/>
                        <label>Location</label>
                        <br />
                        <input id="location" value={input.location} onChange={handleChange} />
                        <br />
                        <br/>
                        <label>Date</label>
                        <br />
                        <input id="date" value={input.date} onChange={handleChange} />
                        <br />
                        <br/>
                        <label>Flight Information</label>
                        <br />
                        <input id="flightInfo" value={input.flightInfo} onChange={handleChange} />
                        <br />
                        <br/>
                        <label>Image</label>
                        <br />
                        <input id="imageURL" value={input.imageURL} onChange={handleChange} />
                        <br />
                        <br/>
                        <label>Description</label>
                        <br />
                        <textarea id="description" value={input.description} onChange={handleChange} />
                        <br />
                        <button className="bg-green-400 hover:bg-gray-400  text-white text-xs  px-6 py-2 mt-6 mb-3 " type="submit">Submit</button>
                    </form>
                </div>
            </div>
                </div>
               




        </Layout>
    )
};
export default NewTodo;