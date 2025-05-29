import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{borderBottom: "1px solid white "}}>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
            <div className="container">
                <Link className="navbar-brand text-white mx-4" style={{fontSize: "30px" }} to="/">Book Store</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li><Link className="nav-item active nav-link text-white" style={{fontSize: "25px" }} to="/">Home</Link> </li>
                        <li><Link className="nav-item nav-link text-white" style={{fontSize: "25px" }} to="/books" >Books</Link></li>
                        <li><Link className="nav-item nav-link text-white" style={{fontSize: "25px" }} to="/addBooks">Add Books</Link> </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
);
};

export default Navbar;