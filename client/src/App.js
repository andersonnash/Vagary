
import "./App.css";
import { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { verify } from "./services/user";
import Navbar from "./views/navbar/NavBar";
import SignIn from "./views/signIn/SignIn";
import AllTodos from "./views/AllTodos/AllTodos";

import SignUp from "./views/SignUp/SignUp";

function App() {
  
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verify()
      user ? setUser(user) : setUser(null);
    }
    fetchUser();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Route path="/sign-in">
        <SignIn />
      </Route>
      <Route path="/todos">
        <AllTodos user={user} />
      <Route path="/sign-up">
        <SignUp />
      </Route>
    </div>
  );
}

export default App;
