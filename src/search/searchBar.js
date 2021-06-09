import React, { Component } from "react";
import "./searchBar.css";
import { Link } from "react-router-dom";

const SearchBar = ({ res, keyword, updateField }) => {
    
    console.log("res",res);
    console.log("keyword:",keyword);
    var updateText = text => {
        updateField("keyword", text, false);
        
      };    
      var cancelSearch = () => {
        updateField("keyword", "");
      };
  
    var renderResults = res.map(({ symbol, name,image }, index) => {
        console.log('rending');
    return (
      <SearchPreview 
            key={index}    
            updateText={updateText} 
            index={index} 
            symbol={symbol} 
            name={name}
            image={image}
        />
    );
  });
  return (
    <div className="auto">
      <button
        onClick={() => cancelSearch()}
        className={`cancel-btn ${keyword.length > 0 ? "active" : "inactive"}`}
      >x
      </button>
      <input
        className="search-bar"
        placeholder="회사명을 입력하세요"
        value={keyword}
        onChange={e => updateField("keyword", e.target.value)}
      />
      {res.length > 0 ? (
        <div className="search-results">{renderResults}</div>
      ) : null}
    </div>
  );
};

const SearchPreview = ({ name, symbol, image, index, updateText }) => {
    console.log("searchPreview");
    return (
      /*
      <div
        onClick={() => updateText(symbol)} 
        className={`search-preview ${index == 0 ? "start" : ""}`}
      >*/
      <Link to ={{pathname: `/ticker=${symbol}`,state:{symbol}}}>
      <div
        onClick={() => updateText(symbol)} 
        className={`search-preview ${index == 0 ? "start" : ""}`}
      >
              
        <div className="first">
          <img src={image} className="image"></img>
          <p className="symbol">{symbol}</p>
          <p className="name">{name}</p>
          
        </div>

      </div></Link>
    );
  };
export default SearchBar;