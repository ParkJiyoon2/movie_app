import React from "react";
import axios from "axios";
import { symbol } from "prop-types";
import cookie from 'react-cookies';
import Header from "../components/header";
import "./mypage.css"


class MyPage extends React.Component{
    state ={
        userid:'',
        username:'',
        userstock:[]

    } 
    useEffect = async()=>{
        var cookie_useremail = cookie.load('useremail')
        var cookie_username = cookie.load('username')
        var cookie_password = cookie.load('userpassword');
        
        
        axios.post('http://localhost:8000/api/SessionConfirm', {
            token1: cookie_useremail,
            token2: cookie_username,
        })
        .then( response => {
            console.log('response:',response);
            this.setState({username:response.data.token2, useremail:response.data.token1});
            axios.post('http://localhost:8000/api/userStock',{
                userid:this.state.useremail
            })
            .then((response)=>{
              console.log("userEffect2!!!", response);
              console.log("userEffect2!!!.data", response.data);
              
              this.setState({userstock:response.data})
              //this.setState({what:response.data});
              
            })
            
        })

        
    }


    componentDidMount(){
        const {location} = this.props;
        console.log('myPage:',location);
        this.useEffect();
        //this.useEffect2(); 
    }

    render(){
        var username = this.state.username;
        console.log('thisState:',this.state);
        if(cookie.load('useremail')== undefined){
            //console.log
            window.location.href="/login";
        };
        return(
            <div className="all">
                <Header/>
                
                <div className="mypage">
                    <p className="mypage_user">{username}님 안녕하세요</p>
                    <div className="mypage_stocks">

                    <p className="mypage_text">보유 주식</p>
                    
                        {this.state.userstock.map(st => 
                            <div className="mypage_onestock"> 
                            <img src = {st.image} className="mypage_image"></img><p className="stname">{st.name}</p>
                            <p className="stcount">수량:{st.stockCount}</p>
                            <p>현재가:             구매가:</p>
                            </div>
                    )}</div>
                    
                    
                </div>
            </div>
            
        )

    }
}


export default MyPage;