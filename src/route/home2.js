import React from "react";
import axios from "axios";
import "./home2.css";
import Stock from "../components/stock";
import Header from "../components/header";
import Banner from "../components/banner"

class Home2 extends React.Component {
  state = {
    isLoading: true,
    stocks: [
    {'symbol':'AAPL','name':"APPLE", image:'https://blog.kakaocdn.net/dn/uqJpZ/btqyenBIIXx/mh1Cc5F023UGpfQTFBdqV0/img.jpg'},
    {'symbol':'AMZN','name':"AMAZON", image:'https://blog.kakaocdn.net/dn/K1OeT/btqRoRMurfl/79ADEIWpDYCsIdq7YGB82k/img.png'},
    {'symbol':'BABA','name':"Alibaba", image:'https://blog.kakaocdn.net/dn/ZKcCY/btqzas9C6Qf/UclOb6NbVsKSiXd18uG301/img.jpg'},
    {'symbol':'DIS','name':"Walt Disney Co (The)", image:'https://blog.kakaocdn.net/dn/K1OeT/btqRoRMurfl/79ADEIWpDYCsIdq7YGB82k/img.png'},
    {'symbol':'FB','name':"FaceBook", image:'https://t1.daumcdn.net/cfile/tistory/994EAB4F5D2565432F'},
    {'symbol':'GOOG','name':"GOOGLE", image:'https://img1.daumcdn.net/thumb/R1280x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/5rH/image/aFrEyVpANu07FvoBZQbIB4aF_uc'}
            ]
  };

  useEffect = ()=>{
    console.log("useEffect start")
    //axios.get('http://stockdb.cirwzwbmpeyo.ap-northeast-2.rds.amazonaws.com:3306/api/Stock')
    //axios.get('http://localhost:8000/api/Stock')
    axios.get('http://stockdb.cirwzwbmpeyo.ap-northeast-2.rds.amazonaws.com/api/Stock').then((response)=>{
    console.log('stockdata:',response);  
      this.setState({stocks:response.data});
    })
}

  componentDidMount() {
    this.setState({isLoading:false});
    this.useEffect();
    
  }
  render() {
    const { isLoading, stocks } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="all">
            <div className="header"><Header/></div>
            <div className="banner"><Banner/></div>
          <div className="stock_list">
            {stocks.map(st => (
              <Stock key={st.symbol} symbol = {st.symbol} img={st.image}/>
            ))}
          </div></div>
        )}
      </section>
    );
  }
}

export default Home2;