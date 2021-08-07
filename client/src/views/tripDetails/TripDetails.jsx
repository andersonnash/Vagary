import { useState, useEffect } from "react";
import { verify } from "../../services/user";
// import { getUser } from "../../services/user";
import { useParams, useHistory } from "react-router-dom";
import { getOneTodo, deleteOneTodo, updateTodo } from "../../services/todo";
import Layout from "../../components/Layout/Layout";
import UpdateTrip from "../editTodos/editTodos";

// export default function UserDetails() {
//   const [user, setUser] = useState({})
//   const { id } = useParams()

//   useEffect(() => {
//     const fetchUser = async () => {
//       let data = await getUser(id)
//       setUser(data)
//     }
//     fetchUser()
//   }, [id])
// }

export default function TodoDetail(props) {
  const [todo, setTodo] = useState({});
  const [toggle, setToggle] = useState(false);
  const { id } = useParams();
  const history = useHistory();
  const [user, setUser] = useState(null);

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

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verify();
      user ? setUser(user) : setUser(null);
    };
    fetchUser();
  }, []);

  return (
    <>
      <div className="min-h-screen overflow-hidden md:flex md:justify-center md:items-center md:flex-col md:text-2xl lg:grid lg:grid-cols-2 lg:min-h-screen">
        <p className="uppercase font-bold text-3xl pb-8">
          {todo?.name}</p>
        <h2 className="uppercase font-bold text-lg">
          {todo?.location}</h2>
        <div>
        <img className="px-4 py-14"
        src={todo.imageURL} />
        </div>
        <div className="bg-gray-200 mx-4 mb-4 border rounded-2xl">
        <p className="px-4 py-2">
          {todo?.description}</p>
        </div>
        <p className="text-xl font-mono mb-4">
          {todo?.flightInfo}</p>
        <p className="text-xl font-mono">
          {todo?.date}</p>
      </div>
      {user && (
        <button
          onClick={handleDelete}
          className="bg-red-400 hover:bg-red-700 text-white px-10 py-2 rounded-lg font-bold md:text-sm"
        >
          Delete
        </button>
      )}
      {user && (
        <UpdateTrip
          user={props.user}
          setUser={props.setUser}
          setToggle={setToggle}
        />
      )}
    </>
  );
}
