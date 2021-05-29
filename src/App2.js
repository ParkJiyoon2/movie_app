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


import Line from "./line"

function App(){
    return (
        <div>
           
    <BrowserRouter>
        
        <Route path="/" exact = {true} component={Home2}/>
        <Route path="/about" component={About}/>
        <Route path="/ticker=:id" component={Detail_stock} />
        <Route path="/Banner" component={Banner} />
        <Route path="/Graph" component={Graph} />
        <Route path="/Board" component={Board} />
        <Route path="/Graph2" component={Graph2} />
    </BrowserRouter>
    </div>
    );
}

export default App;
