import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom'
import About from "./components/About";
import Home from "./components/Home";

class App extends Component {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        <div className="page-header"><h2>React Router Demo</h2></div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/*原生html靠a标签跳转到不同的页面*/}
                            {/*<a className="list-group-item" href="./about.html">About</a>*/}
                            {/*<a className="list-group-item active" href="./home.html">Home</a>*/}

                            {/*react靠路由连接实现切换组件---编写路由链接  整个应用是有一个路由器去管理*/}
                            {/*<BrowserRouter>*/}
                            <Link className="list-group-item" to="/about">About</Link>
                            <Link className="list-group-item" to="/home">Home</Link>
                            {/*</BrowserRouter>*/}


                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 注册路由*/}
                                {/*<BrowserRouter>*/}
                                <Route path="/about" component={About}/>
                                <Route path="/home" component={Home}/>
                                {/*</BrowserRouter>*/}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;