import { useState } from "react";
import { signUp } from "../../services/user";
import Layout from "../../components/Layout/Layout";
import "./SignUp.css";

export default function SignUp() {
  const [input, setInput] = useState({ username: "", email: "", password: "" });



    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = await signUp(input);
        console.log(user);
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
                
                <form className ="signup-form" onSubmit={handleSubmit}>
                    <h1> Sign Up</h1>
                    
                    {/* <label className="username">Username</label> */}
                    <input
                    placeholder="Username"
                        id="username"
                        type="text"
                        value={input.username}
                        onChange={handleInput}
                    />
                    {/* <label className="emaillabel">Email</label> */}
                    <input
                    placeholder="Email"
                        id="email"
                        type="email"
                        value={input.email}
                        onChange={handleInput}
                    />
                    {/* <label className="passwordlabel">Password</label> */}
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
  
