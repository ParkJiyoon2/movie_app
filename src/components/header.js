import React from "react";
import {Link} from "react-router-dom";
import "./header.css";
import imgB from "./logo.png"
import SearchApp from "../search/searchApp"
import cookie from 'react-cookies';


class Header extends React.Component{
state = {}
  logout = async e => {
    cookie.remove('useremail', { path: '/'});
    cookie.remove('username', { path: '/'});
    cookie.remove('userpassword', { path: '/'});
    window.location.href = '/';
    console.log('logout');
}
componentDidMount(){}
  render(){
    var cookie_useremail = cookie.load('useremail')
    var cookie_username = cookie.load('username')
    var cookie_password = cookie.load('userpassword');
    console.log('cookie_useremail:',cookie_useremail);
  
    if(cookie_useremail == undefined){  
      console.log('not undefined');
  return (
    <div className="hd">
        <div className="element1">
            <Link to="/"><img src={imgB} className="Hojo"/></Link>
        </div>
        <div className="search">
            <SearchApp/>
        </div>
        <div className="hd2">
        <div className="element2"><Link to="/login">로그인</Link></div>
        <div className="element3"><Link to = "/register">회원가입</Link></div>
        
        </div>    
    </div>
    )
  }
  else{
    return (
      <div className="hd">
          <div className="element1">
              <Link to="/"><img src={imgB} className="Hojo"/></Link>
          </div>
          <div className="search">
              <SearchApp/>
          </div>
          <div className="hd2">
          <div className="element2"><a href="/" onClick = {this.logout}> 로그아웃</a></div>
          <div className="element3"><Link to = "/MyPage">계정</Link></div>
          
          </div>    
      </div>
      )
  }
}
}


export default Header;