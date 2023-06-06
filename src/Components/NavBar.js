import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Css/NavBar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${searchTerm}`);
  };
  const categories = [
    "world",
    "business",
    "politics",
    "technology",
    "sports",
    "science",
    "entertainment",
    "environment",
    "food",
    "health",
    "tourism",
  ];
  const NavBarLinks = [
    "US",
    "World",
    "Business",
    "Tech",
    "Politics",
    "Science",
  ];
  const UsCategories = ["Crime", "Enviroment", "Weather", "Space"];
  const countryCodes = {
    "United States": "us",
    China: "cn",
    India: "in",
    Japan: "jp",
    Germany: "de",
    Canada: "ca",
    France: "fr",
    "United Kingdom": "gb",
    Italy: "it",
    Spain: "es",
  };

  const PoliticsCategories = ["SCOTUS", "POTUS", "Congress"];
  const BusinessCategories = ["Tech", "Big-Pharma", "Real Estate"];
  const HealthCategories = [
    "Fitness",
    "Food",
    "Sleep",
    "Mindfulness",
    "Relationships",
  ];
  const EntertainmentCategories = ["Movies", "Television", "Celebrity"];

  return (
    <nav className="navbar">
      <div className="logo-container">
        <GiHamburgerMenu className="hamburger" onClick={toggleMenu} />
        <Link to={`/`}>
        <div className="logo">WHW</div>

        </Link>
        
      </div>
      <ul className="nav-links">
        <li className="nav-item">
          <Link to={`/country/${countryCodes["United States"]}`}>US</Link>
        </li>
        {categories.slice(0, 6).map((category) => (
          <li className="nav-item" key={category}>
            <Link to={`/category/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
      <div className="user-search">
        {/* <AiOutlineUser className="user-icon" /> */}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit">
            <AiOutlineSearch className="search-icon" />
          </button>
        </form>
      </div>
      {showMenu && (
        <div className="mobile-menu">
        <div className="menu-section">
          <h2>Categories</h2>
          <ul>
            {categories.map((category) => (
              <li key={category}>
                <Link onClick={toggleMenu} to={`/category/${category}`}>{category}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="menu-section">
          <h2>Countries</h2>
          <ul>
            {Object.entries(countryCodes).map(([country, code]) => (
              <li key={code}>
                <Link onClick={toggleMenu} to={`/country/${code}`}>{country}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="menu-section">
          <h2>Politics</h2>
          <ul>
            {PoliticsCategories.map((category) => (
              <li key={category}>
                <Link onClick={toggleMenu} to={`/search/${category}`}>{category}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="menu-section">
          <h2>Business</h2>
          <ul>
            {BusinessCategories.map((category) => (
              <li key={category}>
                <Link onClick={toggleMenu} to={`/search/${category}`}>{category}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="menu-section">
          <h2>Health</h2>
          <ul>
            {HealthCategories.map((category) => (
              <li key={category}>
                <Link onClick={toggleMenu} to={`/search/${category}`}>{category}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="menu-section">
          <h2>Entertainment</h2>
          <ul>
            {EntertainmentCategories.map((category) => (
              <li key={category}>
                <Link onClick={toggleMenu} to={`/search/${category}`}>{category}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      )}
    </nav>
  );
};

export default NavBar;
