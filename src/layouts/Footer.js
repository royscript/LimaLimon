import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <nav>
        <h3>Contact Us</h3>
        <ul>
          <li>Address: Balmaceda 450, La Serena</li>
          <li><a href="mailto:order@littlelemon.com">Email: order@littlelemon.com</a></li>
          <li><a href="tel:56967052104">Phone: +56 9 6705 2104</a></li>
        </ul>
      </nav>
      <nav>
        <h3>Opening times</h3>
        <ul>
          <li>Monday - Friday: 9:00 - 20:00</li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
