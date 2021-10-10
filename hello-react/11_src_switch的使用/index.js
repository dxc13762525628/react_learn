// 导入react
import React from 'react'
// 导入react-dom
import ReactDom from 'react-dom'
// 导入路由器
import {BrowserRouter} from "react-router-dom";
// 导入app
import App from './App'


ReactDom.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    ,
    document.getElementById('root'))