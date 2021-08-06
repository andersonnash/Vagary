import { useState } from "react";
import { signIn } from "../../services/user";
import { useHistory } from "react-router-dom";
import "./SignIn.css";

export default function SignIn(props) {
  const [input, setInput] = useState({ email: "", username: "", password: "" });
  const { setUser } = props;
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await signIn(input);
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
    <div className="signin-div">
      <form className="signin-form" onSubmit={handleSubmit}>

        <h1>Sign In</h1>

        {/* <label className="emaillabel">Email</label> */}
        <input
          placeholder="Email"
          id="email"
          type="email"
          value={input.email}
          onChange={handleInput}
        />
        <br />

        {/* <label className="passwordlabel">Password</label> */}
        <input
          placeholder="Password"
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
