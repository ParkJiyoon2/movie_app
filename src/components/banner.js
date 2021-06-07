import React, {Component} from 'react';
import axios from "axios";
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import "./banner.css"

class Banner extends React.Component{
    state = {
        KOSPI:[{close:0, date:''},{},{},{},{},{},{},{},{close:0},{close:0}],
        KOSDAQ:[{close:0, date:''},{},{},{},{},{},{},{},{close:0},{close:0}],
        NASDAQ:[{close:0, date:''},{},{},{},{},{},{},{},{close:0},{close:0}],
        kospi_today:0,
        kospi_yes:0
    };

    getKOSDAQ = async()=>{
        //console.log("useEffect start")
        axios.get('http://localhost:8000/api/KOSDAQ').then((response)=>{
            console.log(response);
            this.setState({KOSDAQ:response.data});
        })
    }
    getKOSPI= async()=>{
        //console.log("useEffect start")
        axios.get('http://localhost:8000/api/KOSPI').then((response)=>{
            console.log(response);
            this.setState({KOSPI:response.data});
        })
    }
    getNASDAQ = async()=>{
        //console.log("useEffect start")
        axios.get('http://localhost:8000/api/NASDAQ').then((response)=>{
            console.log(response);
            this.setState({NASDAQ:response.data});
        })
    }
    componentDidMount(){
        this.getKOSDAQ();
        this.getKOSPI();
        this.getNASDAQ();
        
    }

    render(){

        const kospi_today=this.state.KOSPI[9].close;
        //const kospi_yes=this.state.KOSDAQ[8].close;
        const kosdaq_today=this.state.KOSDAQ[9].close;
        const nasdaq_today=this.state.NASDAQ[9].close;
        const how = 0.3;
        return (
            <div className="allGraph">
                <div className="KOSPI">
                        <p className="title">KOSPI</p><p className="today">{kospi_today}({how}%)</p>
                        <LineChart width={300} height={200} data={this.state.KOSPI} className="linechart">
                            <XAxis dataKey = "Date"/><YAxis domain={[3000,3300]}/>
                            <Tooltip/>
                            <Line type = "monotone" dataKey = "close"></Line>
                        </LineChart>           
                </div>
                <div className="KOSDAQ">
                        <p className="title">KOSDAQ</p><p className="today">{kosdaq_today}({how}%)</p>
                        <LineChart width={300} height={200} data={this.state.KOSDAQ} className="linechart">
                            <XAxis dataKey = "Date"/><YAxis domain={[900,1000]}/>
                            <Tooltip/>
                            <Line type = "monotone" dataKey = "close"></Line>
                        </LineChart>           
                </div>
                <div className="NASDAQ">
                        <p className="title">NASDAQ</p>
                        <LineChart width={300} height={200} data={this.state.NASDAQ} className="linechart">
                            <XAxis dataKey = "Date"/><YAxis domain={[13000,14000]}/>
                            <Tooltip/>
                            <Line type = "monotone" dataKey = "close"></Line>
                        </LineChart>           
                </div>
            </div>
        )
    }
}

export default Banner;
