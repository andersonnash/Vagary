import { useState } from "react";
// import { signIn } from "../../services/user";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "./SignIn.css"

export default function SignIn(props) {
  const [input, setInput] = useState({ email: "", username: "", password: "" });
  const { setUser } = props;
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await SignIn(input);
    setUser(user);
    history.push("/");
  };

  const handleInput = (e) => {
    const { id, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [id]: value,
    }));
  };

  return (
    <div>
      <h3>Sign in</h3>
      <form className="signin-form" onSubmit={handleSubmit}>
        <label className="email-label">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          value={input.email}
          onChange={handleInput}
        />
        <br />

        <label className="password-label">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          value={input.password}
          onChange={handleInput}
        />
        <br />
{/* Once button is clicked it goes to UserPage */}
        <button className = "signin-button">
            <Link to="userpage">Sign In</Link></button>
      </form>
    </div>
  );
}
