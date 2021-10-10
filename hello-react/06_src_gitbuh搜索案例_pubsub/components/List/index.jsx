import React, {Component} from 'react';
import PubSub from 'pubsub-js'
import './index.css'

class List extends Component {

    state = {
        users: [],// 初始化状态 ，初始值为数组
        isFirst: true, // 是否第一次打开
        isLoading: false,// 标识是否处于加载中
        err: "",//存储请求相关错误信息
    }

    componentDidMount() {
        // 订阅消息
        this.token = PubSub.subscribe('atguigu', (_, stateObj) => {
            this.setState(stateObj)
        })
    }
    componentWillUnmount() {
        // 取消订阅
        PubSub.unsubscribe(this.token)
    }

    render() {
        const {users, isFirst, isLoading, err} = this.state
        return (
            <div className="row">
                {
                    isFirst ? <h2>欢迎使用，输入关键词，随后点击搜索</h2> :
                        isLoading ? <h2>Loading</h2> :
                            err ? <h2 style={{color: 'red'}}>{err}</h2> :
                                users.map((userObj) => {
                                    return (
                                        <div className="card" key={userObj.id}>
                                            <a href={userObj.html_url} target="_blank" rel="noreferrer">
                                                <img alt="head_portrait" src={userObj.avatar_url}
                                                     style={{width: '100px'}}/>
                                            </a>
                                            <p className="card-text">{userObj.login}</p>
                                        </div>
                                    )
                                })
                }


            </div>
        );
    }
}

export default List;