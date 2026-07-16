import { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import "./Navbar.css";
import { Link } from "react-router-dom"
import { StoreContexts } from "../../Contexts/StoreContexts"
import { FaBars, FaTimes } from "react-icons/fa"

const Navbar = ({ setShowLogin }) => {
  const { getTotalCartAmount } = useContext(StoreContexts);

  const [menu, setMenu] = useState("Home");
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="" className="logo" />
      </Link>

      <ul className={`navbar-menu ${openMenu ? "active-menu" : ""}`}>
        <Link
          to="/"
          onClick={() => {
            setMenu("Home");
            setOpenMenu(false);
          }}
          className={menu === "Home" ? "active" : ""}
        >
          Home
        </Link>

        <a
          href="#explore-menu"
          onClick={() => {
            setMenu("Menu");
            setOpenMenu(false);
          }}
          className={menu === "Menu" ? "active" : ""}
        >
          Menu
        </a>

        <a
          href="#app-download"
          onClick={() => {
            setMenu("Mobile-app");
            setOpenMenu(false);
          }}
          className={menu === "Mobile-app" ? "active" : ""}
        >
          Mobile App
        </a>

        <a
          href="#footer"
          onClick={() => {
            setMenu("Contact us");
            setOpenMenu(false);
          }}
          className={menu === "Contact us" ? "active" : ""}
        >
          Contact
        </a>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />

        <div className="search-icon">
          <Link to="/cart">
            <img src={assets.basket_icon} alt="" />
          </Link>

          <div
            className={getTotalCartAmount() === 0 ? "" : "dot"}
          ></div>
        </div>

        <button onClick={() => setShowLogin(true)}>Sign In</button>

        <div
          className="menu-toggle"
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;