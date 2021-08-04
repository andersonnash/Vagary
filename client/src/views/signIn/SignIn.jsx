import {useState} from "react";
// import {signIn} from "../../services/users"
import { useHistory } from "react-router-dom";
import "./SignIn.css"


export default function SignIn(props) {
    const [input, setInput] = useState({email: "", username: "", password: ""})
    const { setUser} = props
    const history = useHistory();

const handleSubmit = async(e) => {
    e.preventDefault()
    const user = await SignIn(input)
    setUser(user)
    history.push("/");
}

const handleInput = (e) => {
    const { id, value} = e.target
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

