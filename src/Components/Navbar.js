import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";

const Navbar = () => {

    const [darkMode, setDarkMode] = useState(false);
    const [search, setSearch] = useState("");

    const history = useHistory();

    const toggleMode = () => {
        setDarkMode(!darkMode);

        if (!darkMode) {
            document.body.style.backgroundColor = "#121212";
            document.body.style.color = "white";
        } else {
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();

        if (search.trim() !== "") {
            history.push(`/search/${search}`);
            setSearch("");
        }
    };

    return (
        <div>
            <nav className={`navbar fixed-top navbar-expand-lg navbar-${darkMode ? 'dark bg-dark' : 'light bg-light'}`}>

                <div className="container-fluid">

                    <Link className="navbar-brand" to="/">
                        NewsNova
                    </Link>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/business">Business</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/sports">Sports</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/technology">Technology</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/entertainment">Entertainment</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/science">Science</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/general">General</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/health">Health</Link>
                            </li>

                        </ul>

                        {/* Search Bar */}
                        <form className="d-flex me-3" onSubmit={handleSearch}>
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search news..."
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />

                            <button
                                className="btn btn-outline-primary"
                                type="submit"
                            >
                                Search
                            </button>
                        </form>

                        {/* Dark Mode Button */}
                        <button
                            className="btn btn-warning"
                            onClick={toggleMode}
                        >
                            {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
                        </button>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
