import React, {Component} from 'react';
import Child from "./Child";

class Parent extends Component {

    state = {
        // 标识子组件是否产生错误  开发环境不适合错误边界
        hasError: ''
    }

    // 子组件报错，会触发函数调用，并携带错误信息
    static getDerivedStateFromError(error) {

        return {hasError: error}
    }

    componentDidCatch(error, errorInfo) {
        // 出现error调用 用语统计错误，反馈给开发人员
        console.log("组件出错")
    }

    render() {
        return (
            <div>
                <h3>我是父亲组件</h3>
                {
                    this.state.hasError ? <h2>当前网络不稳定稍后再试</h2> : <Child/>
                }
            </div>
        );
    }

}

export default Parent;