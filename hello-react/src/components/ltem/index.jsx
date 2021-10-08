import React, {Component} from 'react';
import './index.css'

class Index extends Component {

    state = {mouse: false}

    // 鼠标移入移出的回调
    handleMouse = (flag) => {
        return () => {
            this.setState({mouse: flag})
        }
    }

    // 勾选取消勾选的回调
    handleCheck = (id) => {
        return (event) => {
            // checkbox 类型event.target.checked获取值
            this.props.changeTodo(id, event.target.checked)
        }
    }

    // 响应删除的函数
    handleDelete = (id) => {
        // 弹窗确认用户是否删除
        if (window.confirm('确定删除吗')) {
            this.props.deleteToDo(id)
        }
    }

    render() {
        const {name, done, id} = this.props
        const {mouse} = this.state
        return (
            // 鼠标移入 移出事件
            <li style={{backgroundColor: mouse ? '#ddd' : 'white'}} onMouseEnter={this.handleMouse(true)}
                onMouseLeave={this.handleMouse(false)}>
                <label>
                    {/*checked是勾选单选框，true表示是勾 defaultChecked后续可以改的 onChange勾选事件*/}
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                    <span>{name}</span>
                </label>
                <button onClick={() => {
                    this.handleDelete(id)
                }} className="btn btn-danger" style={{display: mouse ? 'block' : 'none'}}>删除
                </button>
            </li>
        );
    }
}

export default Index;