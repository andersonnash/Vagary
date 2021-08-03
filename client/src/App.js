
import "./App.css";
import { Route } from "react-router-dom";
import Navbar from "./views/navbar/NavBar";
import SignIn from "./views/signIn/SignIn";
import SignUp from "./views/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Route path="/sign-in">
        <SignIn />
      </Route>
      <Route path="/sign-up">
        <SignUp />
      </Route>
    </div>
  );
}

export default App;
