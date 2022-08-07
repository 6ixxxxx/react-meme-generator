import React from 'react';
import logo from "./troll-face.png"

const Header = () => {
    return(
        <div className="header">
        <img src={logo} alt="troll face" className="header--img"/>
        <h3 className="header--text">Meme Generator</h3>
        </div>
    )
}

export default Header