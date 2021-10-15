import React, {Component} from 'react';

class Demo extends Component {

    state = {count: 0}

    add = () => {
        // 获取原本状态值
        // const {count} = this.state
        // 修改状态
        // 方式一
        // this.setState({count: count + 1})
        // 方式二
        this.setState(state => ({count: state.count + 1}))

    }

    render() {
        return (
            <div>
                <h1>当前和未:{this.state.count}</h1>
                <button onClick={this.add}>点我+1</button>
            </div>
        );
    }
}

export default Demo;