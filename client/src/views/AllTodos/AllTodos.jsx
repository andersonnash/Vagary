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
        <Layout user={props.user} setUser={props.setUser}>
            {todos.map((todo) => (
                <div className="lg:grid lg:grid-ros-3 md:grid md:grid-cols-3">
                    <div className='p-10'>
                        <div className="rounded overflow-hidden shadow-lg  bg-gray-800 relative transition duration-500 hover:opacity-70 transform ease-in-out hover:-translate-y-1 hover:scale-110">
                            <div className="text-white font-black capitalize">
                                <Link to={`/todos/${id}`}> <img className=" w-full h-32 object-cover" src={todo.imageURL} alt={todo.name} />
                                    <div className="m-2">
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
        </Layout>
    );
}