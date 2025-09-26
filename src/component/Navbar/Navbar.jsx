import React from 'react';

const Navbar = () => {
    return (
      <div className="navbar  bg-base-100  shadow-sm">
  <div className="navbar-start">
   <a className=" text-xl font-bold">CS — Ticket System</a>
  </div>
 <div className="navbar-end ">
    <div className="hidden sm:flex ">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li><a>FAQ</a></li>
      <li><a>Changelog</a></li>
      <li><a>Blog</a></li>
      <li><a>Download</a></li>
      <li><a>Contact</a></li>
     

        </ul>
     </div>
    <a style={{ background: 'linear-gradient(90deg, #632EE3 0%, #9F62F2 100%)' }} className="btn text-white">+  New Ticket</a>
  </div> 
</div>
    );
};

export default Navbar;