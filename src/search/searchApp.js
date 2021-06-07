import React, { Component } from "react";
import axios from "axios";
import SearchBar from "./searchBar"
import "./searchApp.css"

class searchApp extends React.Component {
  state = {
    keyword: "",
    stock:[],
    res:[]
  };
  useEffect = ()=>{
    console.log("useEffect start")
    axios.get('http://localhost:8000/api/Stock').then((response)=>{
      console.log("finish");
      console.log(response.data);
      this.setState({stock:response.data});
    })
}
  componentDidMount() {
    this.useEffect();
  }

  matchName = (name, keyword) => {
    console.log("matchName:",name," ",keyword);
    var keyLen = keyword.length;
    name = name.toLowerCase().substring(0, keyLen);
    if (keyword == "") return false;
    return name == keyword.toLowerCase();
  };
  onSearch = text => {
    let { data } = this.state;
    let {stock} = this.state;
    console.log('onSearch');
    //var results = data.filter(item => true == this.matchName(item.name, text));
    var results2 = stock.filter(item => true == this.matchName(item.name, text));
    //this.setState({ results:results });
    this.setState({ res:results2 });
  };

  updateField = (field, value, update = true) => {
    if (update) this.onSearch(value);
    this.setState({ [field]: value });
  };

  render() {
    let { data } = this.state;
    console.log("searchApp");
    return (
      <div className="SearchApp">
        <SearchBar  
          res = {this.state.res}
          keyword={this.state.keyword}
          updateField={this.updateField}
        />
      </div>
    );
  }
}

export default searchApp;