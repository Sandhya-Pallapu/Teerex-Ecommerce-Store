
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{ display: "flex", justifyContent: "space-between"}}>
      <h1>TEEREX</h1>
      <Link to="/cart" style={{ fontSize: "20px", textDecoration: "none", paddingTop:"10px"}}>
        🛒 Cart
      </Link>
    </header>
  );
}

export default Header;
