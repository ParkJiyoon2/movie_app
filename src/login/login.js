import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import cookie from 'react-cookies';
import Swal from 'sweetalert2';
import $ from 'jquery';
import "./login.css"
import imgB from "../logo.png"
import Header from "../components/header"

class LoginForm extends Component {
    submitClick = (e) => {
        this.email_val = $('#email_val').val();
        this.pwd_val = $('#pwd_val').val();
        console.log('email:',this.email_val, ' pwd:', this.pwd_val);
        if(this.email_val === '' || this.pwd_val === ''){
            this.sweetalert('이메일과 비밀번호를 확인해주세요. 빈 칸이 있습니다', '', 'info', '닫기')
        }else{
            axios.post('http://localhost:8000/api/login', {
                is_Email: this.email_val,
                is_Password: this.pwd_val
            })
            .then( response => {
                console.log('!!!!!!!!!!!!!!!!',response);
                var useremail = response.data[0]['useremail'];
                var username = response.data[0]['username']
                var upw = response.data[0]['userpassword']
                
                if(useremail != null && useremail != ''){
                    
                    //console.log('userid:',userid[0]['userId']);
                    //this.sweetalert('로그인 되었습니다.', '', 'info', '닫기')
                    
                    const expires = new Date()
                    expires.setMinutes(expires.getMinutes() + 60)
                    
                    axios.post('http://localhost:8000/api/loginSession', {
                        is_Email: useremail,
                        is_UserName: username,
                    })
                    .then( response => {
                        cookie.save('useremail', response.data.token1
                        , { path: '/', expires })
                        cookie.save('username', response.data.token2
                        , { path: '/', expires })
                        cookie.save('userpassword', upw
                        , { path: '/', expires })
                    })  
                    .catch( error => {
                        this.sweetalert('작업중 오류가 발생하였습니다.', error, 'error', '닫기');
                    });
                    
                    setTimeout(function() {
                        window.location.href = '/';
                        
                    }.bind(this),1000);
                }else{
                    this.sweetalert('이메일과 비밀번호를 확인해주세요!', '', 'info', '닫기')
                }
            })
            .catch( error => {this.sweetalert('이메일과 비밀번호를 확인해주세요~~.', '', 'info', '닫기');; console.log('error:',error);});
        }
    }

    sweetalert = (title, contents, icon, confirmButtonText) => {
        Swal.fire({
            title: title,
            text: contents,
            icon: icon,
            confirmButtonText: confirmButtonText
          })
    }

    render () {
        return (
            <section className="all">
                <Header/>
                <div className="m_login">
                <h3><span></span>LOGIN</h3>
                <div className="log_box">
                    <div className="in_ty1">
                        <input type="text" id="email_val" placeholder="이메일" />
                    </div>
                    <div  className="in_ty1">
                        <input type="password" id="pwd_val" placeholder="비밀번호" />
                    </div>
                    <ul className="af">
                        <li><Link to={'/register'}>회원가입</Link></li>
                    </ul>
                    <div className="s_bt" type="" onClick={(e) => this.submitClick(e)}>로그인</div>
                    <div className="google_bt">구글 아이디로 로그인</div>
                </div>
                </div>
            </section>
        );
    }
}

export default LoginForm;