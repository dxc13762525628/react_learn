import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom'
import About from "./pages/About";  // 路由组件
import Home from "./pages/Home";    // 路由组件
import Header from "./components/Header";   // 一般组件
import MyNavLink from "./components/MyNavLink";

class App extends Component {

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-xs-offset-2 col-xs-8">
                        {/*一般组件放components 路由组件会收到来自路由传递的参数*/}
                        <Header/>
                    </div>
                </div>

                <div className="row">
                    <div className="col-xs-2 col-xs-offset-2">
                        <div className="list-group">
                            {/*原生html靠a标签跳转到不同的页面*/}
                            {/*<a className="list-group-item" href="./about.html">About</a>*/}
                            {/*<a className="list-group-item active" href="./home.html">Home</a>*/}

                            {/*react靠路由连接实现切换组件---编写路由链接  整个应用是有一个路由器去管理*/}
                            {/*<BrowserRouter> activeClassName="active" 这是点谁就给加样式类名  !important给样式设置最高权重*/}
                            {/*<NavLink activeClassName="atguigu" className="list-group-item" to="/about">About</NavLink>*/}
                            {/*<NavLink activeClassName="atguigu" className="list-group-item" to="/home">Home</NavLink>*/}
                            <MyNavLink to="/atguigu/about">About</MyNavLink>
                            <MyNavLink to="/atguigu/home">Home</MyNavLink>
                            {/*</BrowserRouter>*/}
                        </div>
                    </div>
                    <div className="col-xs-6">
                        <div className="panel">
                            <div className="panel-body">
                                {/* 注册路由*/}
                                {/*<BrowserRouter>*/}
                                <Switch>
                                    {/*Switch匹配到一个就不匹配了 提高效率*/}
                                    <Route path="/atguigu/about" component={About}/>
                                    <Route path="/atguigu/home" component={Home}/>
                                </Switch>
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