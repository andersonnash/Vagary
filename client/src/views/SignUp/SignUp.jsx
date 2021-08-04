import {useState} from 'react'
import {signUp} from "../../services/users"
import { Link, useHistory } from 'react-router-dom'

export default function SignUp(props) {
    const [input, setInput] = useState({username: "", email: "", password:""})
    const history = useHistory();

    const handleSubmit = async(e) => {
        e.preventDefault();

        const user = await signUp(input);
        // console.log(user)
        props.setUser(user)
        history.push("/")


    }
    const handleInput = (e) => {
        const {id, value} = e.target
        setInput((prevInput) => ({
            ...prevInput,
            [id]: value
        }))

    }
    return (
        <div>
            Sign Up
            <form className="signUp-form" onSubmit={handleSubmit}>
                <label>Username</label>
                <input 
                id="username"
                type="text"
                value={input.username}
                onChange={handleInput}/>

                <br />
                <label>Email</label>
                <input
          id="email"
          type="email"
          value={input.email}
          onChange={handleInput}
             />
            <br />
        <label>Password</label>
        <input
          id="password"
          type="password"
          value={input.password}
          onChange={handleInput}
        />
        <button className="signup-button">
            <Link to ="userpage">Create Account</Link>
        </button>
            </form>
        </div>
    )
}