import React, {Component} from 'react';


class Count extends Component {

    // 加
    increase = () => {
        const {value} = this.selectNumber
        // 更新状态
        this.props.increment(value*1)
    }

    // 减
    decrease = () => {
        const {value} = this.selectNumber
        // 更新状态
        this.props.decrement(value*1)
    }

    // 奇数加
    increaseOfadd = () => {
        const {value} = this.selectNumber
        if(this.props.count%2===1){
            this.props.increment(value*1)
        }

    }

    // 异步加
    increaseAsync = () => {
        const {value} = this.selectNumber
        this.props.incrementAsync(value*1,500)
    }

    render() {
        return (
            <div>
                <h1>当前求和为:{this.props.count}</h1>
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