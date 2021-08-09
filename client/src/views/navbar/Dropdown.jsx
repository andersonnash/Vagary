import React, {useState} from "react";
import { Link } from "react-router-dom";

function Dropdown({ isOpen, toggle, user },) {
  return (
    
    <div
      className={
        isOpen
          ? "grid grid-rows-4 text-center items-center font-bold bg-gray-200"
          : "hidden"
      }
      onClick={toggle}
    >
        
        {!user && <Link to="/">Home</Link>}
        {!user && <Link to="/sign-in">Sign In</Link>}
        {!user && <Link to="/sign-up">Sign Up</Link>}
        {!user && <Link to="/todos"> All Trips</Link>}

        {user && <Link to="/" className="pb-3">Home</Link>}
        {user && <Link to="/todos" className="pb-3"  > All Trips</Link>}
        {user && <Link to="/new-todo" className="pb-3">New Trip</Link>}
        {user && <Link to="/sign-out" className="pb-3">Sign Out</Link>}
        
                
    </div>
    
    
  );
}

export default Dropdown;