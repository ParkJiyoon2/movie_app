import React, {Component} from 'react';
import axios from "axios";

class Graph2 extends React.Component{
    state = {
        boardContent:[],
        title:'1',
        content:'cat'
    };
    
    useEffect = ()=>{
        console.log("useEffect start")
        axios.get('http://localhost:8000/api/getDB').then((response)=>{
          this.setState({boardContent:response.data});
          console.log(this.state.boardContent);
        })
        
    }
    
    componentDidMount(){
        this.useEffect();
    }

    render(){
        return (
            <div>
            </div>
        )
    }
}

export default Graph2;
