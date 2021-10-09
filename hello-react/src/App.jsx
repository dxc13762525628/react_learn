import React, {Component} from 'react';
import Search from "./components/Search";
import List from "./components/List";

class App extends Component {

    state = {
        users:[],// 初始化状态 ，初始值为数组
        isFirst:true, // 是否第一次打开
        isLoading:false,// 标识是否处于加载中
        err:"",//存储请求相关错误信息
    }

    updateAppState=(stateObj)=>{
        this.setState(stateObj)
    }

    render() {
        return (
            <div className="container">
                <Search updateAppState={this.updateAppState} />
                <List {...this.state}  />
            </div>
        );
    }
}

export default App;