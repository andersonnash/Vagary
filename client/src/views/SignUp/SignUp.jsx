import { useState } from "react";
import { useHistory } from "react-router-dom";
import { signUp } from "../../services/user";

import "./SignUp.css";

export default function SignUp(props) {
  const [input, setInput] = useState({ username: "", email: "", password: "" });
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await signUp(input);
    console.log(user);
    props.setUser(user);
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
    <div className="signup-div">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h1> Sign Up</h1>

        <input
          placeholder="Username"
          id="username"
          type="text"
          value={input.username}
          onChange={handleInput}
        />

        <input
          placeholder="Email"
          id="email"
          type="email"
          value={input.email}
          onChange={handleInput}
        />

        <input
          placeholder="Password"
          id="password"
          type="password"
          value={input.password}
          onChange={handleInput}
        />
        <br />
        <button className="signup-button">Sign Up</button>
      </form>
    </div>
  );
}
