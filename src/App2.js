import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Home2 from "./route/home2"
import About from "./route/about"
import Detail_stock from "./route/detail_stock"
import Graph from "./route/graph"
import Board from "./route/board"
import Graph2 from "./route/graph2"
import Header from "./components/header"
import Banner from "./components/banner"
import searchApp from "./search/searchApp"
//import Login from "./login/login"
import Register from "./login/register"
import Login from "./login/login"

import Line from "./line"
import MyPage from "./route/mypage"

import Popup from "./route/popup"

function App(){
    return (
        <div>
           
    <BrowserRouter>
        
        <Route path="/" exact = {true} component={Home2}/>
        <Route path="/about" component={About}/>
        <Route path="/ticker=:id" component={Detail_stock} />
        
        <Route path="/Graph" component={Graph} />
        <Route path="/Board" component={Board} />
        <Route path="/Graph2" component={Graph2} />
        <Route path="/SearchApp" component={searchApp} />
        
        <Route path="/Register" component={Register}/>
        <Route path="/Login" component={Login}/>

        <Route path="/MyPage" component={MyPage}/>

        <Route path="/PopUp" component={Popup}/>
    </BrowserRouter>
    </div>
    );
}

export default App;
