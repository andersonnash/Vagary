import { useState, useEffect } from "react";
import { verify } from "../../services/user"
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
      <div className=" flex flex-col justify-center text-2xl">
        {/* <h1>{user?.username}</h1> */}
        <h1>{todo?.name}</h1>
        <h2>{todo?.location}</h2>
        <img src={todo.imageURL} />
        <p>{todo?.description}</p>
        <p>{todo?.flightInfo}</p>
        <p>{todo?.date}</p>
      </div>
      
{user && (
      <button
        onClick={handleDelete}
        className="bg-red-400 hover:bg-red-700 text-white px-10 py-2 rounded-lg mt-5 mb-5 font-bold md:text-sm"
      >
        Delete
      </button>
      )}

<<<<<<< HEAD
      <button
        onClick={handleDelete}
        className="bg-red-400 hover:bg-red-700 text-white px-10 py-2 rounded-lg mt-5 mb-5 font-bold md:text-sm"
      >
        Delete
      </button>
=======
      {user && (
>>>>>>> f799b5f31b8081d24337aebcb721e620cc1d74f4
      <UpdateTrip
        user={props.user}
        setUser={props.setUser}
        setToggle={setToggle}
      />
<<<<<<< HEAD
=======
      )}
>>>>>>> f799b5f31b8081d24337aebcb721e620cc1d74f4
    </>
  );
}
