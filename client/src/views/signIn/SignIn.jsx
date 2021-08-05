<<<<<<< HEAD
import { useState } from "react";
import { signIn } from "../../services/user";
=======
import {useState} from "react";
import {signIn} from "../../services/user"
>>>>>>> 530c43207b5cc5a88568cd34f26bfc61208587f3
import { useHistory } from "react-router-dom";
import "./SignIn.css";

export default function SignIn(props) {
<<<<<<< HEAD
  const [input, setInput] = useState({ email: "", username: "", password: "" });
  const { setUser } = props;
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await signIn(input);
    setUser(user);
    history.push("/user-homepage");
  };
=======
    const [input, setInput] = useState({email: "", username: "", password: ""})
    const { setUser} = props
    const history = useHistory();

const handleSubmit = async(e) => {
    e.preventDefault()
    const user = await signIn(input)
    setUser(user)
    history.push("/");
}
>>>>>>> 530c43207b5cc5a88568cd34f26bfc61208587f3

  const handleInput = (e) => {
    const { id, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [id]: value,
    }));
  };

  return (
    <div>
      <form className="signin-form" onSubmit={handleSubmit}>
        <h3>Sign In</h3>
        <label className="emaillabel">Email</label>
        <input
          id="email"
          type="email"
          value={input.email}
          onChange={handleInput}
        />
        <br />

        <label className="passwordlabel">Password</label>
        <input
          id="password"
          type="password"
          value={input.password}
          onChange={handleInput}
        />
        <br />

        <button className="signin-button">Sign In</button>
      </form>
    </div>
  );
}
