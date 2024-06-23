
import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = ({ scrollToContact }) => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">FashionHub</Link>
      </div>
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/" onClick={scrollToContact}>
          Contact
        </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};