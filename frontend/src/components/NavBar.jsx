import React from "react";

const NavBar = () => {
  return (
    <div className="navbar flex items-center justify-between rounded-lg shadow-lg bg-neutral text-neutral-content">
      <button className="btn btn-ghost text-xl">Blogger</button>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
      <div>
        <a href="">Admin Login</a>
      </div>
    </div>
  );
};

export default NavBar;
