import React from "react";
import propTypes from "prop-types";
import './stock.css';
import { Link } from "react-router-dom";

function Stock({symbol,img}){
   
    return (
        <div className="stock">
        <Link to ={{pathname: `/ticker=${symbol}`,state:{symbol}}}>
        <div className = "stock_data">
            <div className="st_img"><img src={img} alt = "sorry" className="logo"/></div>
            {symbol}
            
            
        </div>   
        </Link>
        </div>
    );
}


export default Stock;
