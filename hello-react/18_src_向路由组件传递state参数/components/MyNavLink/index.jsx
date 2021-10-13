import React, {Component} from 'react';
import {NavLink} from 'react-router-dom'

class MyNavLink extends Component {
    render() {
        // 标签体内容是this.props.children children是标签属性 当带了这个属性，标签内容会自动显示出来 标签体内容是特殊的标签属性
        return (
            <NavLink activeClassName="atguigu" className="list-group-item" {...this.props}/>
        );
    }
}

export default MyNavLink;