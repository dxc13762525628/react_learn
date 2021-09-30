import React, {Component} from 'react';
import './index.css'

class Index extends Component {
    render() {
        const {name,done}=this.props
        return (
            <li>
                <label>
                    {/*checked是勾选单选框，true表示是勾 defaultChecked后续可以改的*/}
                    <input type="checkbox" defaultChecked={done}/>
                    <span>{name}</span>
                </label>
                <button className="btn btn-danger" style={{display:"none"}}>删除</button>
            </li>
        );
    }
}

export default Index;