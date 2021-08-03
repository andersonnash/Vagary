import {useState} from "react";
// import {signIn} from "../../services/users"
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";


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
        [id]: value
    }))
}

    return (
      <div >
        Sign In
        <form className="signin-form" onSubmit={handleSubmit}>
            <label>Email</label>
            <input 
            id="email"
            type="email"
            value={input.email}
            onChange={handleInput}/>
            <br />

            <label>Password</label>
            <input 
            id="password"
            type="password"
            value={input.password}
            onChange={handleInput}
            />
            <br />

            <button className="signin-button">
                <Link to="/">Sign In</Link></button>
        </form>
      </div >  
    )
}