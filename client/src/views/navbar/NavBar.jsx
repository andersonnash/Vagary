import { NavLink, useHistory, Link } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
import { FaFileExcel } from "react-icons/fa";
import { signOut } from "../../services/user";
import { verify } from "../../services/user";

// import Layout from "../../components/Layout/Layout";

const Navbar = (props) => {
  const [hamburger, setHamburger] = useState(false);
  const [visible, setVisible] = useState(false);
  const [windowDimension, setWindowDimension] = useState(null);
  const [user, setUser] = useState(null);
  const [toggle, setToggle] = useState(false);

  const history = useHistory();
  useEffect(() => {
    setWindowDimension(window.innerWidth);
  }, []);
  useEffect(() => {
    const handleResize = (e) => {
      setWindowDimension(window.innerWidth);
      // if (windowDimension <= 700) {
      //   setHamburger(true);
      //   setVisible(true);
      // } else {
      //   setHamburger(false);
      // }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  const isMobile = windowDimension <= 700;

  const handleSignOut = () => {
    signOut();
    props.setUser(null);
    history.push("/");
    console.log("signed out");
  };

  // const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = () => {
    setVisible(!visible);
    setHamburger(!hamburger);
  };

  useEffect(() => {
    const verifyUser = async () => {
      setUser(await verify());
    };
    verifyUser();
    props.setUser(null);
  }, [toggle]);

  return (
    <>
      <nav class="flex justify-end flex-wrap content-center pr-10 text-2xl">
        {isMobile ? (
          <div className="mobileClass">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
              className="bars"
              alt="hamburger"
              onClick={handleClick}
            />
            <div
              className="nav-items"
              style={{ display: hamburger && visible ? "flex" : "none" }}
            >
              <NavLink to="/">Homepage</NavLink>
              <NavLink to="/sign-in">Sign In</NavLink>
              <NavLink to="/sign-up">Sign Up</NavLink>
              <NavLink to="/sign-out">Sign Out</NavLink>
              <button onClick={handleSignOut}>Sign Out</button>
            </div>
          </div>
        ) : (
          <div className="desktop-container  ">
            <div class="space-x-10">
              <div className="flex justify-end space-x-10  text-black mr-8 font-serif  text-2xl pt-8">
                {!user && <NavLink to="/">Homepage</NavLink>}
                {!user && <NavLink to="/sign-in">Sign In</NavLink>}
                {!user && <NavLink to="/sign-up">Sign Up</NavLink>}
                {!user && <NavLink to="/todos"> All Trips</NavLink>}
                {user && <NavLink to="/new-todo">New Trip</NavLink>}
                {user && <button onClick={handleSignOut}>Sign Out</button>}
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
export default Navbar;
