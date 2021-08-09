import "./App.css";
import "./views/navbar/navbar.css";
import "./views/tripDetails/tripDetails.css";
import ImgSlide from "./views/home/ImgSlide";
import { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { verify } from "./services/user";
import SignIn from "./views/signIn/SignIn";
import AllTodos from "./views/AllTodos/AllTodos";
import Layout from "./components/Layout/Layout";
import SignUp from "./views/SignUp/SignUp";
import TripDetails from "./views/tripDetails/TripDetails";
import NewTodo from "./views/createTodo/CreateTodo";
import SignOut from './views/SignOut/SignOut';

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
      <Layout setUser={setUser} user={user}>
        {/* <Header /> */}
        <Route exact path="/">
          <ImgSlide />
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
        {user && (
        <Route path="/sign-out">
          <SignOut setUser={setUser} />
        </Route>
        )}
        {user && (
          <Route path="/new-todo">
            <NewTodo setUser={setUser} user={user} />
          </Route>
          
        )}
      </Layout>
    </div>
  );
}

export default App;
