import "./App.css";
import "./views/navbar/navbar.css";
import ImgSlide from "./views/home/ImgSlide";
import { SlideData } from "./views/home/SlideData";

import { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { verify } from "./services/user";
import Navbar from "./views/navbar/NavBar";
import SignIn from "./views/signIn/SignIn";
import AllTodos from "./views/AllTodos/AllTodos";
import UserHomePage from "./views/userHomepage/UserHomepage";
// import Home from "./views/home/Home";
import Layout from "./components/Layout/Layout";
import SignUp from "./views/SignUp/SignUp";
import TripDetails from "./views/tripDetails/TripDetails";
import NewTodo from "./views/createTodo/CreateTodo";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verify();
      user ? setUser(user) : setUser(null);
    };
    fetchUser();
  }, []);

  return (
    <div className="App">
      <Layout setUser={setUser} user={user} />
      <Route exact path="/">
        <ImgSlide slides={SlideData} />
      </Route>
      <Route path="/user-homepage">
        <UserHomePage />
      </Route>
      <Route path="/sign-in">
        <SignIn setUser={setUser} user={user} />
      </Route>
      <Route exact path="/todos/:id">
        <TripDetails />
      </Route>
      <Route exact path="/todos">
        <AllTodos user={user} />
      </Route>
      <Route exact path="/sign-up">
        <SignUp setUser={setUser} user={user} />
      </Route>

      <Route path="/new-todo">
        <NewTodo setUser={setUser} user={user} />
      </Route>
      
    </div>
  );
}

export default App;
