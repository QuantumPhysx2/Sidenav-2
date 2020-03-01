import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

export default class Sidenav extends Component 
{
    render()
    {
        return(
            <div className="sidenav">
                <div className="header">
                    <div className="logo desktop">
                        <Link to="/" title="Home">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="Logo" className="rotate" />
                        </Link>
                    </div>
                    <div className="logo mobile">
                        <Link to="/" title="Home">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="Logo" className="rotate" />
                        </Link>
                    </div>
                    <div className="actionable expand-icon">
                        <span title="Collapse">
                            <i className="fas fa-bars"></i>
                        </span>
                    </div>
                </div>
                <div className="main">
                    <div className="nav-header">
                        <h1>Points of Interests</h1>
                    </div>
                    <div className="nav-container">
                        <div className="nav-item">
                            <NavLink exact to="/" className="nav-link" title="Home">
                                <i className="fas fa-home"></i>
                                <p className="nav-text">Home</p>
                            </NavLink>
                        </div>
                        <div className="nav-item">
                            <div className="drop-list-container">
                                <span class="drop-list" title="Map">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <p className="nav-text">Map</p>
                                    <i className="fas fa-chevron-down extra-icon"></i>
                                </span>
                                <ul className="drop-list-contents">
                                    <li className="drop-list-item" title="">
                                        <NavLink to="/1">
                                            <i className="fas fa-user"></i>
                                            <p>Brus</p>
                                        </NavLink>
                                    </li>
                                    <li className="drop-list-item" title="">
                                        <NavLink to="/2">
                                            <i className="fas fa-user"></i>
                                            <p>Smol</p>
                                        </NavLink>
                                    </li>
                                    <li className="drop-list-item" title="">
                                        <NavLink to="/3">
                                            <i className="fas fa-user"></i>
                                            <p>Yeet</p>
                                        </NavLink>
                                    </li>
                                    <li className="drop-list-item" title="">
                                        <NavLink to="/4">
                                            <i className="fas fa-user"></i>
                                            <p>Huh?</p>
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="nav-item">
                            <NavLink to="/2" className="nav-link" title="">
                                <i className="fas fa-cog"></i>
                                <p className="nav-text">Settings</p>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}