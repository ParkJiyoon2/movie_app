import React, {Component} from 'react';
import axios from "axios";
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';


const data2 = [
    {date:"05-10", close:126.85, 비유동인구수:34000},
    {date:"05-07", close:130.21, 비유동인구수:56000},
    {date:"05-06", close:129.74, 비유동인구수:23000},
    {date:"05-05", close:128.1, 비유동인구수:67000},
    {date:"05-04", close:127.85, 비유동인구수:55000}
];

class Graph extends React.Component{
    state = {
        isLoading: true,
        daily: []
    };
      
    getDaily = async () =>{
    
        await axios.get(
          "http://api.marketstack.com/v1/eod?access_key=3cf7e12c98db3b213b6d2ebd64f23e8b&symbols=AAPL"
            ).then(response =>{
            try{
                
                this.setState({daily: response.data.data, isLoading:true});
                console.log(this.state.daily);
            }catch(error){
                alert(error)
            }
        }).catch(error => { alert(error); return false;})
    }
    
    componentDidMount(){
        const {location} = this.props;
        
        this.getDaily();
    }

    render(){
        return (
            <div>
                <div>

            <LineChart width={1000} height={300} data={this.state.daily}>
                <CartesianGrid strokeDasharray = "5 5"/>
                <XAxis dataKey = "date"/><YAxis/>
                <Tooltip/>
                <Legend/>
                <Line type = "monotone" dataKey = "close"></Line>
            </LineChart>
            </div>
            <div>


            </div>
            </div>
        )
    }
}

export default Graph;
