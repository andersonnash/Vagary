import SignIn from "./views/signIn/SignIn";
import "./App.css";
// import { Route } from "react-router-dom";
import Navbar from "./views/navbar/NavBar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <SignIn />
    </div>
  );
}

export default App;
