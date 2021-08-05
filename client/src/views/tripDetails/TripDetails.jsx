import { useState, useEffect } from "react";
// import { getUser } from "../../services/user";
import { useParams, useHistory } from "react-router-dom";
import { getOneTodo, deleteOneTodo } from "../../services/todo";
import Layout from "../../components/Layout/Layout";

export default function TodoDetail() {
  const [todo, setTodo] = useState({});
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchDetail = async () => {
      let data = await getOneTodo(id);
      setTodo(data);
    };
    fetchDetail();
  }, [id]);


  const handleDelete = async () => {
    let data = await deleteOneTodo(todo._id);
    history.push('/todos')
    
    
  }

  return (
    <Layout>
      <div>
        <h1>{todo?.name}</h1>
        <h2>{todo?.location}</h2>
        <img src={todo.imageURL} />
      </div>
      <button  onClick={handleDelete} className="bg-red-400 hover:bg-red-700 text-white px-10 py-2 rounded-lg mt-5 mb-5 font-bold md:text-sm">Delete</button>
    </Layout>
  );
}

// export default function Post() {
//   let { id } = useParams();
//   // let history = useHistory();
//   const [user, setUser] = useState({});

//   useEffect(() => {
//     handleUser();
//     // eslint-disable-next-line
//   }, []);

//   async function handleUser(props) {
//     console.log(props);
//     let res = await getUser(id);
//     console.log(res);
//     setUser(res.id);
//   }

//   // const handleDelete = async () => {
//   //   await deleteUser(`${id}`);
//   //   history.push("/user-homepage");
//   // };
//   console.log(getUser, "get user");
//   return (
//     <div>
//       <h2>These are {user.username}'s trip details! </h2>
//       <p>{user.email}</p>
//       {/* <button value={user._id} onClick={handleDelete}>
//         Delete User
//       </button> */}
//       <h3>{`Trips for ${user.username}:`}</h3>
//       {user?.posts?.map((post) => {
//         return (
//           <div key={post._id}>
//             <h3>
//               <Link to={`/${user._id}`}>{post.title}</Link>
//             </h3>
//             <img src={post.imageURL} alt={post.title} />
//             <p>{post.description}</p>
//           </div>
//         );
//       })}
//     </div>
//   );
// }
