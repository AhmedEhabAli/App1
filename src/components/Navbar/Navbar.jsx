import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("/");

  return (
    <nav className="navbar navbar-expand-lg fixed-top py-4">
      <div className="container">
        <Link
          className="navbar-brand text-uppercase text-white fs-2 fw-bolder"
          to="/"
          onClick={() => setActiveItem("/")}
        >
          Start Framework
        </Link>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto text-uppercase">
            <li className="nav-item">
              <Link
                to="about"
                onClick={() => setActiveItem("about")}
                className={`nav-link text-white fw-bold me-3 rounded-3 ${
                  activeItem === "about" ? "active" : ""
                }`}
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="portfolio"
                onClick={() => setActiveItem("portfolio")}
                className={`nav-link text-white fw-bold me-3 rounded-3 ${
                  activeItem === "portfolio" ? "active" : ""
                }`}
              >
                Portfolio
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="contact"
                onClick={() => setActiveItem("contact")}
                className={`nav-link text-white fw-bold me-3 rounded-3 ${
                  activeItem === "contact" ? "active" : ""
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
