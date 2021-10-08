import React, {Component} from 'react';
import './index.css'

class Index extends Component {
    render() {
        const {id,done,content}=this.props
        return (
            <li>
                <label>
                    <input type="checkbox"/>
                    <span>{content}</span>
                </label>
                <button className="btn btn-danger" style={{display: "none"}}>删除</button>
            </li>
        );
    }
}

export default Index;