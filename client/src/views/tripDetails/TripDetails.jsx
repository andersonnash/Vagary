import { useState, useEffect } from "react";
import { verify } from "../../services/user";
// import { getUser } from "../../services/user";
import { useParams, useHistory } from "react-router-dom";
import { getOneTodo, deleteOneTodo } from "../../services/todo";
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
  const [seeEdit, setSeeEdit] = useState(false);
  const [todo, setTodo] = useState({});
  const [toggle, setToggle] = useState(false);
  const { id } = useParams();
  const history = useHistory();
  const [user, setUser] = useState(null);

  const editContent = (
    <UpdateTrip
      user={props.user}
      setUser={props.setUser}
      setToggle={setToggle}
    />
  );

  const editName = seeEdit ? <p>Cancel</p> : <p>Edit</p>;

  useEffect(() => {
    const fetchDetail = async () => {
      let data = await getOneTodo(id);
      setTodo(data);
    };
    fetchDetail();
  }, [id, toggle]);

  const handleDelete = async () => {
    let data = await deleteOneTodo(todo._id);
    return data;
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
        <p className="uppercase font-black text-3xl pb-8 font-serif">
          {todo?.name}
        </p>
        <h2 className="uppercase font-bold text-lg font-serif">
          {todo?.location}
        </h2>
        <div>
          <img className="px-4 py-14" src={todo.imageURL} alt="dest_poto" />
        </div>
        <div className="bg-gray-200 mx-4 mb-4 border rounded-2xl">
          <p className="px-4 py-2">{todo?.description}</p>
        </div>
        <div className="text-lg font-mono mb-4">
          <p className="text-sm">Flight Information: </p>
          <div className="bg-gray-200 mx-6 py-2 rounded-2xl">
            {todo?.flightInfo}
          </div>
        </div>
        <div className="text-xl font-mono">
          <p className="text-sm">Trip Dates:</p>
          <div className="bg-gray-200 mx-6 rounded-2xl py-2">{todo?.date}</div>
        </div>
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
        <button
          className="bg-green-400 hover:bg-gray-700 text-white px-10 py-2 rounded-lg font-bold md:text-sm m-5"
          onClick={() => {
            setSeeEdit(!seeEdit);
          }}
        >
          {editName}
        </button>
      )}
      <article>{seeEdit && editContent}</article>
    </>
  );
}
