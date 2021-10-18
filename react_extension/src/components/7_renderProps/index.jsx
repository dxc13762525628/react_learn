import React, {Component} from 'react';
import './index.css'

class Parent extends Component {
    render() {
        return (
            <div className="parent">
                <h3>我是parent</h3>
                {/*父子传递参数*/}
                <A render={(name) => <B name={name}/>}/>
            </div>
        );
    }

}

class A extends Component {
    state={name:"tom"}
    render() {
        return (
            <div className='a'>
                <h3>我是A</h3>
                {this.props.render(this.state.name)}
            </div>
        );
    }
}

class B extends Component
{
    render()
    {
        return (
            <div className='b'>
                <h3>我是B,{this.props.name}</h3>
            </div>
        );
    }
}

export default Parent;