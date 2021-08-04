import "./App.css";
import ImgSlide from "./views/home/ImgSlide";
import { SlideData } from "./views/home/SlideData";

function App() {
  return <div className="App">
    <ImgSlide slides={SlideData}/>;
  </div>;
import { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { verify } from "./services/user";
import Navbar from "./views/navbar/NavBar";
import SignIn from "./views/signIn/SignIn";
import AllTodos from "./views/AllTodos/AllTodos";

import SignUp from "./views/SignUp/SignUp";
import TripDetails from "./views/tripDetails/TripDetails";

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
<<<<<<< HEAD
      <Route exact path to="/posts:id">
        <TripDetails />
      </Route>
=======
      <Route path="/todos">
        <AllTodos user={user} />
>>>>>>> 91db46428500485a776b0f2ad149ec359b8250e4
      <Route path="/sign-up">
        <SignUp />
      </Route>
    </div>
  );
}

export default App;
