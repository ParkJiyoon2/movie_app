import React, {Component} from 'react';
import axios from "axios";
import "./board.css"
import Header from "../components/header";

class Board extends React.Component{
    state = {
        boardContent:[{title:''}],
        title:'',
        content:''
    };
    
    getValue1 = e =>{
        const {name, value} = e.target; //name은 제목or내용인지  value는 텍스트
        this.setState({title:value} );
        console.log("log:",name, value);
    }
    getValue2 = e =>{
        const {name, value} = e.target; //name은 제목or내용인지  value는 텍스트
        this.setState({content:value} );
        console.log("log:",name, value);
    }
    submitReview = ()=>{
        console.log("click:",this.state.title,"&",this.state.content);
        axios.post('http://localhost:8000/api/insert', {
          title: this.state.title,
          content: this.state.content
        }).then(()=>{
          alert('등록 완료!');
          console.log('send:',this.state.title, this.state.content);
        })
    };

    useEffect = ()=>{
        console.log("useEffect start")
        axios.get('http://localhost:8000/api/get').then((response)=>{
          this.setState({boardContent:response.data});
        })
    }

    componentDidMount(){
        this.useEffect();
    }

    render(){
        return (
            <div className="all">
                <Header/>
                <div className="chatboard">
    
                    {this.state.boardContent.map(element => 
                        <div style={{ border: '1px solid #333' }}>
                        <div className="chatbox">
                            
                            <h3>{element.title}</h3>
                            <p>-{element.content}</p>
                        </div></div>
                        )}
                    
                </div>
                <div className='form-wrapper'>
                    <input className="title-input" type="text" placeholder="내용" onChange={this.getValue1} name="title"/><br/>
                    <input className="content-input" type="text" placeholder="닉네임" onChange={this.getValue2} name="content"/>
                </div>
                <button className="submit-button" onClick={this.submitReview}>입력</button>
            </div>
        )
    }
}

export default Board;
