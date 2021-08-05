import { signOut } from "../../services/user";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

export default function SignOut() {
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await signOut(input);
    console.log(user);
    history.push("/");
  };

  <div className="sign-out" onSubmit={handleSubmit}>
    <Link>Sign Out</Link>
  </div>;
}
