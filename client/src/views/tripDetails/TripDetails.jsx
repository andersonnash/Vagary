import { useState, useEffect } from "react";
import { getUser } from "../../services/user";
import { useParams, Link, useHistory } from "react-router-dom";

export default function Post() {
  let { id } = useParams();
  // let history = useHistory();
  const [user, setUser] = useState([]);

  useEffect(() => {
    handleUser();
    // eslint-disable-next-line
  }, []);

  async function handleUser() {
    let res = await getUser(id);
    console.log(res);
    setUser(res.id);
  }

  // const handleDelete = async () => {
  //   await deleteUser(`${id}`);
  //   history.push("/user-homepage");
  // };

  return (
    <div>
      <h2>These are {user.username}'s trip details! </h2>
      <p>{user.email}</p>
      {/* <button value={user._id} onClick={handleDelete}>
        Delete User
      </button> */}
      <h3>{`Trips for ${user.username}:`}</h3>
      {user?.posts?.map((post) => {
        return (
          <div key={post._id}>
            <h3>
              <Link to={`/${user._id}`}>{post.title}</Link>
            </h3>
            <img src={post.imageURL} alt={post.title} />
            <p>{post.description}</p>
          </div>
        );
      })}
    </div>
  );
}
