import React from "react";
import {Link} from "react-router-dom";
import "./header.css";
import imgB from "./logo.png"



function Header(){
    return (
    <div className="hd">
        <div className="element1">
            <Link to="/"><img src={imgB} className="Hojo"/></Link>
        </div>
        <div className="search"><p>검색창</p></div>
        <div className="hd2">
        <div className="element2"><Link to="/about">About</Link></div>
        <div className="element3"><Link to = "/board">게시판</Link></div>
        
        </div>    
    </div>
    )
}


export default Header;