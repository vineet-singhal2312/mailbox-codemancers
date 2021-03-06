import React, { useState } from "react";
import "./Header.css";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  function setSearchMailQuery(e) {
    e.preventDefault();
    const currURLParams = new URLSearchParams(location.search);
    currURLParams.set("search", searchInput);
    navigate(`?${currURLParams}`);
    setSearchInput("");
  }

  return (
    <nav className="navbar navbar-light bg-light px-4">
      <div className="container-fluid">
        <Link className="navbar-brand header-title" to="/">
          MailBox
        </Link>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search Mail"
            aria-label="Search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button
            className="btn"
            type="submit"
            onClick={(e) => setSearchMailQuery(e)}
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Header;
