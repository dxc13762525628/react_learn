import React, {Component} from 'react';
import './index.css'

class Parent extends Component {

    state={carName:"奔驰c36"}

    changeCar=()=>{
        this.setState({carName:"迈巴赫"})
    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {
        // 接下来要变成的props state
        if(this.state.carName===nextState.carName)return false
        else return false
    }

    render() {
        const {carName}=this.state
        return (
            <div className="parent">
                <h3>我是parent组件</h3>
                <span>我的车名是:{carName}</span>
                <br/>
                <button onClick={this.changeCar}>点我换车</button>
                <Child carName={carName}/>
            </div>
        );
    }
}


class Child extends Component {

    // 更新
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        // 接下来要变成的props state
        if(this.props.carName===nextProps.carName)return false
        else return false
    }

    render() {
        return (
            <div className="child">
                <h3>我是Child组件</h3>
                <span>我接到的车是:{this.props.carName}</span>
            </div>
        );
    }
}

export default Parent;