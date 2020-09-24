import React from 'react';
import {NavLink} from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import {Toolbar} from "@material-ui/core";
import "./header.css";

const Header = () => {
    return (
        <AppBar position="static" style={{backgroundColor: "#264653"}}>
            <Toolbar>
                <h1 style={{color: "#E9C46A"}}>StarMatch |</h1>
                <NavLink to="/" exact className="nav-element">
                    Game
                </NavLink>
                <NavLink to="/tutorial/menu" className="nav-element">
                    Tutorial
                </NavLink>
                <NavLink to="/about" className="nav-element">
                    About
                </NavLink>
                <NavLink to="/high-scores" className="nav-element">
                    High Scores
                </NavLink>
            </Toolbar>
        </AppBar>
    );
};

export default Header;