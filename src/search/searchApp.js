import React, { Component } from "react";
import axios from "axios";
import SearchBar from "./searchBar"
import "./searchApp.css"

class searchApp extends React.Component {
  state = {
    keyword: "",
    stock: [
      {'symbol':'AAPL','name':"APPLE", image:'https://blog.kakaocdn.net/dn/uqJpZ/btqyenBIIXx/mh1Cc5F023UGpfQTFBdqV0/img.jpg'},
      {'symbol':'AMZN','name':"AMAZON", image:'https://blog.kakaocdn.net/dn/K1OeT/btqRoRMurfl/79ADEIWpDYCsIdq7YGB82k/img.png'},
      {'symbol':'BABA','name':"Alibaba", image:'https://blog.kakaocdn.net/dn/ZKcCY/btqzas9C6Qf/UclOb6NbVsKSiXd18uG301/img.jpg'},
      {'symbol':'DIS','name':"Walt Disney Co (The)", image:'https://blog.kakaocdn.net/dn/K1OeT/btqRoRMurfl/79ADEIWpDYCsIdq7YGB82k/img.png'},
      {'symbol':'FB','name':"FaceBook", image:'https://t1.daumcdn.net/cfile/tistory/994EAB4F5D2565432F'},
      {'symbol':'GOOG','name':"GOOGLE", image:'https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/5rH/image/aFrEyVpANu07FvoBZQbIB4aF_uc'}
              ],
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