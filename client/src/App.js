import "./App.css";
import { Route } from "react-router-dom";
import Navbar from "./views/navbar/NavBar";
import SignIn from "./views/signIn/SignIn";
import SignUp from "./views/SignUp/SignUp";
import TripDetails from "./views/tripDetails/TripDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route path="/sign-in">
        <SignIn />
      </Route>
      <Route exact path to="/posts:id">
        <TripDetails />
      </Route>
      <Route path="/sign-up">
        <SignUp />
      </Route>
    </div>
  );
}

export default App;
