import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'

class Header extends Component {

    back = () => {
        this.props.history.goBack()
    }

    forward = () => {
        this.props.history.goForward()
    }
    go = () => {
        // 走多少步 前进或者后端
        this.props.history.go(2)
    }

    render() {
        return (
            <div>
                <div className="page-header">
                    <h2>React Router Demo</h2>
                    <button onClick={this.back}>回退</button>
                    <hr/>
                    <button onClick={this.forward}>前进</button>
                    <button onClick={this.go}>go</button>
                </div>
            </div>
        );
    }
}

// withRouter的作用将一般组件 加上了路由组件的特殊功能
// withRouter的返回值是一个新组件
export default withRouter(Header);