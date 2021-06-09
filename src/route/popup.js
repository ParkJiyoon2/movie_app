import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Swal from 'sweetalert2';
import $ from 'jquery';
import axios from "axios";
import cookie from 'react-cookies';
const PopupDom = ({ children }) => {
    const el = document.getElementById('popupDom');
    return ReactDom.createPortal(children, el);
};
class PopupContent extends Component {

    submitClick = (e) => {
        this.useremail = 'byeornem@gmail.com';
        this.symbol = $('#symbol').val();
        this.count = $('#count').val();
        this.avg_cost = $('#avg_cost').val();
        
        //console.log('email:',this.email_val, ' pwd:', this.pwd_val);
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
        }
    }
    
    render(){
        return(
            
                <div className="full_layer">
                    <div className="common_alert"> 
                        <h2>This is Popup Title</h2>
                        <div className="log_box">
                            <div className="in_ty1">
                                <input type="text" id="symbol" placeholder="종목" />
                            </div>
                            <div  className="in_ty1">
                                <input type="text" id="avg_cost" placeholder="평균단가" />
                            </div>
                            <div  className="in_ty1">
                                <input type="text" id="count" placeholder="개수" />
                            </div>
                            <div className="s_bt" type="button" onClick={(e) => this.submitClick(e)}>입력</div>
                        </div>
                    </div>
                    <div>
                        <button type="button" onClick={this.props.onClose}>취소</button>
                    </div>
                </div>
                
        )}
}

class MainPop extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            isOpenPopup: false,
        }
        this.openPopup = this.openPopup.bind(this);
        this.closePopup = this.closePopup.bind(this);
    }
    
    openPopup(){
        this.setState({
            isOpenPopup: true,
        })
    }
 
    closePopup(){
        this.setState({
            isOpenPopup: false,
        })
    }
 
    render(){
        return(
            <div>
                <h2>Open Popup</h2>
                <div>
                    <button type="button"
                            id="popupDom"
                            onClick={this.openPopup}
                    >
                        종목추가
                    </button>
                    {this.state.isOpenPopup &&
                        <PopupDom>
                            <PopupContent onClose={this.closePopup}/>
                        </PopupDom>
                    }
                </div>
            </div>
        );
    }
}
 
export default MainPop;