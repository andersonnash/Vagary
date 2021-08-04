import { useState, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { getAllTodos } from "../../services/todo.js";
import { Link } from "react-router-dom";

export default function Home(props) {
    const [todos, setTodos] = useState([]);

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
                <div>
                    {todo.name}
                    <img src={todo.imageURL} alt={todo.name} />
                
                </div>
            ))}
        </Layout>
    );
}