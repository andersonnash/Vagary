import "./App.css";
import ImgSlide from "./views/home/ImgSlide";
import { SlideData } from "./views/home/SlideData";

function App() {
  return <div className="App">
    <ImgSlide slides={SlideData}/>;
  </div>;
}

export default App;
