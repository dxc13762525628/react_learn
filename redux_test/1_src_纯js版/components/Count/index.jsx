import React, {Component} from 'react';

class Count extends Component {

    state = {count: 0}

    // 加
    increase = () => {
        const {value} = this.selectNumber
        const {count} = this.state
        this.setState({count: count + value * 1})
    }

    // 减
    decrease = () => {
        const {value} = this.selectNumber
        const {count} = this.state
        this.setState({count: count - value * 1})
    }

    // 奇数加
    increaseOfadd = () => {
        const {value} = this.selectNumber
        const {count} = this.state
        if (count % 2) {
            this.setState({count: count + value * 1})
        }

    }

    // 异步加
    increaseAsync = () => {
        const {value} = this.selectNumber
        const {count} = this.state

        setTimeout(() => {
            this.setState({count: count + value * 1})
        }, 500)
    }

    render() {
        const {count} = this.state
        return (
            <div>
                <h1>当前求和为{count}</h1>
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