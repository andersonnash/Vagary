import { useState } from "react";
import { signUp } from "../../services/user";
import Layout from "../../components/Layout/Layout";

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
      <div>
        SignUp
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            id="username"
            type="text"
            value={input.username}
            onChange={handleInput}
          />
          <label>Email</label>
          <input
            id="email"
            type="email"
            value={input.email}
            onChange={handleInput}
          />
          <label>Password</label>
          <input
            id="password"
            type="password"
            value={input.password}
            onChange={handleInput}
          />
          <button>Sign Up</button>
        </form>
      </div>
    </Layout>
  );
}
