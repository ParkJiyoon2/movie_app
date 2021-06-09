import React from "react";
import axios from "axios";
import { symbol } from "prop-types";
import cookie from 'react-cookies';
import Header from "../components/header";
import Swal from 'sweetalert2';
import $ from 'jquery';
import ReactDom from 'react-dom';
import "./mypage.css"
import SearchApp from "../search/searchApp"


class MyPage extends React.Component{

    state ={
        userid:'',
        username:'',
        userstock:[],
        isOpenPopup:false
    } 
    openPopup = () =>{
        this.setState({isOpenPopup: true})
    }
 
    closePopup = ()=>{
        this.setState({isOpenPopup: false,})
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
              
            })
            
        })   
    }

    componentDidMount(){
        const {location} = this.props;
        console.log('myPage:',location);
        this.useEffect();
    }

    render(){
        var username = this.state.username;
        var useremail = this.state.useremail;
        console.log('thisState:',this.state);
        if(cookie.load('useremail')== undefined){
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
                            <p className="purchaseCost">구매가:{st.stockPurchaseCost}     </p>
                            </div>
                    )}
                <div>
                    <button type="button"
                            id="popupDom"
                            onClick={this.openPopup} className="add_btn1"
                    >
                        추가
                    </button>
                    {this.state.isOpenPopup &&
                        <PopupDom>
                            <PopupContent onClose={this.closePopup} useremail={this.state.useremail}/>
                        </PopupDom>
                    }
                </div>
            
                    </div>
                    
                </div>
            </div>
            
        )

    }
}
const PopupDom = ({ children }) => {
    const el = document.getElementById('popupDom');
    return ReactDom.createPortal(children, el);
};

class PopupContent extends React.Component {
    state={
        useremail:''
    }
    submitClick = (e) => {
        this.useremail = $('#useremail').val();
        this.symbol = $('#symbol').val();
        this.count = $('#count').val();
        this.avg_cost = $('#avg_cost').val();
        
        console.log('--------------------email:',this.useremail);
        if(this.symbol === '' || this.avg_cost === '' || this.count == ''){
            Swal.fire({
                title: '빈 칸이 있습니다',
                text: '',
                icon: 'info',
                confirmButtonText: '닫기'
              })
        }else{
            axios.post('http://localhost:8000/api/insertUserStock', {
                useremail:this.useremail,
                symbol: this.symbol,
                avg_cost: this.avg_cost,
                count:this.count
            })
            window.location.href="/myPage"
        }
    }
    
    render(){
        //var useremail = {this.useremail}
        return(
                <div className="full_layer">
                    <div className="common_alert"> 
                        
                        <div className="add_box">
                            <div className="add_ty0">
                                <input id="useremail" placeholder={this.props.useremail} value={this.props.useremail}/>
                            </div>
                            <div className="add_ty1">
                            
                                <input type="text" id="symbol" placeholder="종목" />
                            </div>
                            <div  className="add_ty1">
                                <input type="text" id="avg_cost" placeholder="평균단가" />
                            </div>
                            <div  className="add_ty1">
                                <input type="text" id="count" placeholder="개수" />
                            </div>
                            <button className="add_btn2" type="button" onClick={(e) => this.submitClick(e)}>입력</button>
                        </div>
                    </div>
                    <div>
                        <button type="button" onClick={this.props.onClose} className="cancel_btn">취소</button>
                    </div>
                </div>
                
        )}
}

export default MyPage;