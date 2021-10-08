import React, {Component} from 'react';
import './index.css'

class Index extends Component {

    // 全选回调
    handleCheckAll = (event) => {
        // 勾还是不勾
        this.props.checkAllToDO(event.target.checked)
    }

    // 清楚所有已完成的回调
    handleClearAllDone = () => {
        this.props.clearAllDone()
    }

    render() {

        const {todos} = this.props
        // 计算已完成和全部的个数 pre上一次的返回值 current每一个数组的对象
        const doneCount = todos.reduce((pre, todoObj) => {
            return pre + (todoObj.done ? 1 : 0)
        }, 0)
        // 总数
        const total = todos.length

        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount === total && total !== 0}/>
                </label>
                <span>
                    <span>{doneCount}</span> / {total}
                </span>
                <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
            </div>
        );
    }
}

export default Index;