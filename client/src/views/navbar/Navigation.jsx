import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export default function Navigation({ user, toggle },) {



  return (
    <nav className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-serif font-bold">
      <Link to="/" className="pl-8">
        Vagary
      </Link>
      {user && <Link  className="p-3 mt-5 bg-black text-white rounded-3xl"> Welcome {user.username} !</Link>}
      <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="pr-8 md:block hidden">
        {!user && <Link to="/">Home</Link>}
        {!user && <Link to="/todos" className="p-5"> All Trips</Link>}
        {!user && <Link to="/sign-in" className="p-5">Sign In</Link>}
        {!user && <Link to="/sign-up" className="p-5">Sign Up</Link>}
        {user && <Link to="/" className="p-5">Home</Link>}
        {user && <Link to="/todos" className="p-5"> All Trips</Link>}
        {user && <Link to="/new-todo" className="p-5">New Trip</Link>}
        {user && <Link to="/sign-out" className="nav-link">Sign Out</Link>}
        
      </div>
    </nav>
  );
}