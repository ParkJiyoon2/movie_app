import React from "react";
import axios from "axios";
import "./home2.css";
import Stock from "../components/stock";
import Header from "../components/header";
import Banner from "../components/banner"

class Home2 extends React.Component {
  state = {
    isLoading: true,
    stocks: []
  };

  useEffect = ()=>{
    console.log("useEffect start")
    axios.get('http://localhost:8000/api/Stock').then((response)=>{
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