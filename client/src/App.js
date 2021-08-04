import "./App.css";
import ImgSlide from "./views/home/ImgSlide";
import { SlideData } from "./views/home/SlideData";
import { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { verify } from "./services/user";
import Navbar from "./views/navbar/NavBar";
import SignIn from "./views/signIn/SignIn";
import AllTodos from "./views/AllTodos/AllTodos";
// import Home from "./views/home/Home";

import SignUp from "./views/SignUp/SignUp";
import TripDetails from "./views/tripDetails/TripDetails";
import NewTodo from "./views/CreateTodo/CreateTodo";

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
      <Navbar />
      <Route exact path="/">
        <ImgSlide slides={SlideData}/>
      </Route>
      
      <Route exact path="/sign-in">
        <SignIn />
      </Route>

      {/* <Route exact path="/" />
      <ImgSlide slides={SlideData} /> */}
      <Route path="/sign-in">
        <SignIn />
      </Route>
      <Route exact path="/posts:id">
        <TripDetails />
      </Route>
      <Route path="/todos">
        <AllTodos user={user} />
      </Route>
      <Route exact path="/new-todo">
        <NewTodo />
      </Route>
      <Route exact path="/sign-up">
        <SignUp setUser={setUser} user={user} />
      </Route>
    </div>
  );
}

export default App;
