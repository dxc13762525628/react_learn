import React, {Component} from 'react';
import store from "../../redux/store";
// 引入actionCreate专门用于创建对象
import {
    createDecrementAction,
    createIncrementAction,
    createIncrementAsyncAction,
} from "../../redux/count_action"

class Count extends Component {


    // componentDidMount() {
    //     // 检测redux中状态的变化 变化了就更新
    //     store.subscribe(() => {
    //         this.setState({})
    //     })
    // }

    // 加
    increase = () => {
        const {value} = this.selectNumber
        // 更新状态
        store.dispatch(createIncrementAction(value * 1))
    }

    // 减
    decrease = () => {
        const {value} = this.selectNumber
        store.dispatch(createDecrementAction(value * 1))
    }

    // 奇数加
    increaseOfadd = () => {
        const {value} = this.selectNumber
        const count = store.getState()
        if (count % 2) {
            store.dispatch(createIncrementAction(value * 1))
        }

    }

    // 异步加
    increaseAsync = () => {
        const {value} = this.selectNumber

        store.dispatch(createIncrementAsyncAction(value * 1, 500))
        // 更改状态
        // setTimeout(() => {
        //     // 获取状态
        //     store.dispatch(createIncrementAction(value*1))
        // }, 500)
    }

    render() {
        return (
            <div>
                <h1>当前求和为:{store.getState()}</h1>
                <select ref={c => this.selectNumber = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={this.increase}>+</button>
                <button onClick={this.decrease}>-</button>
                <button onClick={this.increaseOfadd}>奇数+</button>
                <button onClick={this.increaseAsync}>异步＋</button>
            </div>
        );
    }
}

export default Count;