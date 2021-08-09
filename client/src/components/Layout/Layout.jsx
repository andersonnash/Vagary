import React, {useState, useEffect} from "react";
import Dropdown from "../../views/navbar/Dropdown";
import Footer from "../Footer/Footer";
import Navigation from "../../views/navbar/Navigation";

const Layout = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });
  return (
    <div > 
      <div>
      <Navigation toggle={toggle} user={props.user} setUser={props.setUser} />
      <Dropdown  isOpen={isOpen} toggle={toggle} user={props.user} setUser={props.setUser} />
      </div>
      <div>{props.children}</div>
      <Footer  />
    </div>
  );
};
export default Layout;
