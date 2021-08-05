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
        <Layout>
            <div className="signup-div">
                
                <form className ="signup-form" onSubmit={handleSubmit}>
                    <h3> Sign Up</h3>
                    <label className="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        value={input.username}
                        onChange={handleInput}
                    />
                    <label className="emaillabel">Email</label>
                    <input
                        id="email"
                        type="email"
                        value={input.email}
                        onChange={handleInput}
                    />
                    <label className="passwordlabel">Password</label>
                    <input
                        id="password"
                        type="password"
                        value={input.password}
                        onChange={handleInput}
                    />
                    <button className="signup-button">Sign Up</button>
                </form>
            </div>
        </Layout>
    );

}

