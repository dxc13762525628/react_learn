import React, {Component} from 'react';
import {Route, Redirect} from 'react-router-dom'
import News from "./News";
import Message from "./Message";
import MyNavLink from "../../components/MyNavLink";

class Home extends Component {
    render() {
        return (
            <div>
                <h3>我是Home的内容</h3>
                <div>
                    <ul className="nav nav-tabs">
                        <li>
                            <MyNavLink to="/home/news">News</MyNavLink>
                        </li>
                        <li>
                            <MyNavLink to="/home/message">Message</MyNavLink>
                        </li>
                    </ul>
                </div>
                {/*注册路由*/}
                <Route path="/home/news" component={News}/>
                <Route path="/home/message" component={Message}/>
                {/*给定默认路径*/}
                <Redirect to="/home/news"/>
            </div>

        );
    }
}

export default Home;