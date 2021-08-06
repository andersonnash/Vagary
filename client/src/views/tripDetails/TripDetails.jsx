import { useState, useEffect } from "react";
// import { getUser } from "../../services/user";
import { useParams, useHistory } from "react-router-dom";
import { getOneTodo, deleteOneTodo, updateTodo } from "../../services/todo";
import Layout from "../../components/Layout/Layout";
import UpdateTrip from "../editTodos/editTodos";

export default function TodoDetail(props) {
  const [todo, setTodo] = useState({});
  const [toggle, setToggle] = useState(false)
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchDetail = async () => {
      let data = await getOneTodo(id);
      setTodo(data);
    };
    fetchDetail();

  }, [id, toggle]);

  const handleDelete = async () => {
    let data = await deleteOneTodo(todo._id);
    history.push("/todos");
  };


  return (
    <>
      <div>
        <h1>{todo?.name}</h1>
        <h2>{todo?.location}</h2>
        <img src={todo.imageURL} />
      </div>

      <button onClick={handleDelete} className="bg-red-400 hover:bg-red-700 text-white px-10 py-2 rounded-lg mt-5 mb-5 font-bold md:text-sm">Delete</button>
      <UpdateTrip user={props.user} setUser={props.setUser} setToggle={setToggle} />

    </Layout>
  );
}
