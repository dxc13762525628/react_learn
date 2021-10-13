import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import Detail from "./Detail";

class Message extends Component {

    state = {
        messageArr: [
            {id: '01', title: "消息1"},
            {id: '02', title: "消息2"},
            {id: '03', title: "消息3"},
        ]
    }

    replaceShow = (id, title) => {
        // 实现跳转到detail组件，且为replace跳转 params参数
        // this.props.history.replace(`/home/message/detail/${id}/${title}`)

        // 实现跳转到detail组件，且为replace跳转 search 参数
        //    this.props.history.replace(`/home/message/detail?id=${id}&title=${title}`)

        // 实现跳转到detail组件，且为replace跳转 state 参数
        this.props.history.replace(`/home/message/detail`, {id, title})

    }

    pushShow = (id, title) => {
        // 跳转detail组件 且为push跳转 params参数
        // this.props.history.push(`/home/message/detail/${id}/${title}`)

        // 跳转detail组件 且为push跳转 search 参数
        // this.props.history.push(`/home/message/detail?id=${id}&title=${title}`)

        // 实现跳转到detail组件，且为replace跳转 state 参数
        this.props.history.push(`/home/message/detail`, {id, title})
    }

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
        const {messageArr} = this.state
        return (
            <div>
                <ul>
                    {
                        messageArr.map((messageObj) => {
                            return (
                                <li>
                                    {/*向路由组件传递params参数 */}
                                    {/*<Link to={`/home/message/detail/${messageObj.id}/${messageObj.title}`}>{messageObj.title}</Link>&nbsp;&nbsp;*/}


                                    {/*向路由组件传递search参数 */}
                                    {/*<Link to={`/home/message/detail/?id=${messageObj.id}&title=${messageObj.title}`}>{messageObj.title}</Link>&nbsp;&nbsp;*/}

                                    {/*向路由组件传递state参数 */}
                                    <Link to={{
                                        pathname: '/home/message/detail',
                                        state: {id: messageObj.id, title: messageObj.title}
                                    }}>{messageObj.title}</Link>&nbsp;&nbsp;

                                    <button onClick={() => {
                                        this.pushShow(messageObj.id, messageObj.title)
                                    }}>push查看
                                    </button>
                                    &nbsp;
                                    <button
                                        onClick={() => this.replaceShow(messageObj.id, messageObj.title)}>replace查看
                                    </button>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr/>
                {/*声明接受params参数*/}
                {/*<Route path="/home/message/detail/:id/:title" component={Detail}/>*/}

                {/*声明接受search参数  无需声明接收，正常注册路由即可*/}
                {/*<Route path="/home/message/detail" component={Detail}/>*/}

                {/*声明接受state参数  无需声明接收，正常注册路由即可*/}
                <Route path="/home/message/detail" component={Detail}/>

                <button onClick={this.back}>回退</button>
                <hr/>
                <button onClick={this.forward}>前进</button>
                <button onClick={this.go}>go</button>
            </div>
        );
    }
}

export default Message;