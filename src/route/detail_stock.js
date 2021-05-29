import React from "react";
import axios from "axios";
import { symbol } from "prop-types";
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import Header from "../components/header";
import "./detail_stock.css"

class Detail_stock extends React.Component{

    state ={
        isLoading:true,
        symbol:'initial',
        daily:[{date:''}]
    } 
    useEffect = ()=>{
        console.log("useEffect start")
        axios.get('http://localhost:8000/api/getDB').then((response)=>{
          console.log("finish");
          console.log(response.data);
          this.setState({stocks:response.data});
        })
    }
    
    getDaily =  async(symbol) =>{
        console.log("getDaily start");
        await axios.get(
          "http://api.marketstack.com/v1/eod?access_key=3cf7e12c98db3b213b6d2ebd64f23e8b&symbols=".concat(symbol)
            ).then(response =>{
            try{
                this.setState({daily: response.data.data, isLoading:true});
                console.log("res:",response);
                console.log("day:", this.state.daily);
                
            }catch(error){
                alert(error)
            }
        }).catch(error => { alert(error); return false;})
    }
    componentDidMount(){
        const {location} = this.props;
        this.getDaily(location.state.symbol);
    }

    render(){
        const {location} = this.props;
        //console.log(this.state.daily);
        
        
        if(location.state){
            const daily2 = this.state.daily.reverse();
            console.log("dt",daily2);

            daily2.map(dt => dt.date =  dt.date.replace("T00:00:00+0000",''));
            daily2.map(dt => dt.date =  dt.date.replace("2021-",''));
            daily2.map(dt => dt.date =  dt.date.replace("2020-",''));
            console.log("dt2:", daily2);
            
            return (
                <div className="all">
                    <Header/>
                    <div className="contents">
                        <h1 className="symbol">{location.state.symbol}</h1>
                        <div className="graph">
                        <LineChart width={1000} height={300} data={daily2}>
                            <CartesianGrid strokeDasharray = "3 3"/>
                            <XAxis dataKey = "date"/><YAxis/>
                            <Tooltip/>
                            <Legend/>
                            <Line type = "monotone" dataKey = "close"></Line>
                        </LineChart>
                    </div>                    
   
                    </div>
                </div>
            
            )

        }
        else{
            return null;
        }
    }
}


export default Detail_stock;