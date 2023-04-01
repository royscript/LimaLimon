import React from "react";
import { Link } from "react-router-dom";
import Food from "../assets/laserena_up.jpg";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="left-side">
        <h1>Little Lemon Restaurant</h1>
        <h2>Comida Peruana</h2>
        <p>
        Nos complace darles la bienvenida a nuestro acogedor y encantador restaurante. 
        En Little Lemon, nos esforzamos por ofrecer una experiencia gastronómica única y memorable. 
        </p>
        <button>
          <Link to="/booking">Reserve a table</Link>
        </button>
      </div>
      <div className="right-side">
        <img
          src={Food}
          alt="our cook holding a tablet with delicoues baguettes"
        />
      </div>
    </header>
  );
};

export default Header;