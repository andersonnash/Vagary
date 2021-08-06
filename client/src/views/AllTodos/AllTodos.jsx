import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { getAllTodos } from "../../services/todo.js";
import { Link } from "react-router-dom";

export default function Home(props) {
    const [todos, setTodos] = useState([]);
    const { id } = props;

    useEffect(() => {
        const fetchTodos = async () => {
            let data = await getAllTodos();
            setTodos(data);
        };
        fetchTodos();
    }, []);



    return (
       
        <div
        user={props.user} setUser={props.setUser}>
            <div  className=' min-h-screen lg:grid lg:grid-cols-3 md:grid md:grid-cols-3 hover:b '>
            {todos.map((todo) => (
                <div className="p-10 pt-48 overflow-hidden">
                    <div className="rounded overflow-hidden shadow-lg  bg-gray-700 relative  transition duration-500 hover:opacity-70 transform ease-in-out hover:-translate-y-1 hover:scale-110">
                        <div >
                            <div className="text-white font-black capitalize">
                            <img className=" w-full h-32 object-cover" src={todo.imageURL} alt={todo.name} />
                                <Link to={`/todos/${todo._id}`}> 
                                    <div className="m-4">
                                        {todo.name}
                                    </div>
                                </Link>
                            </div>
                            <div >
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
}