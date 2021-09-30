import React, {Component} from 'react';
import {nanoid} from 'nanoid'
import './index.css'

class Index extends Component {

    handleKeyUp = (event) => {
        // 解构赋值
        const {keyCode, target} = event
        // console.log(event.target.value,event.keyCode);
        // 13是回车
        if (keyCode !== 13) return
            // console.log(event.target.value);
            // return target.value
        // 名字不能为空
        if(target.value.trim()===""){
            alert("输入不能为空")
            return
        }
        // 准备一个对象
        const todoObj={id:nanoid(),name:target.value,done:false}
        // 传值
        this.props.addTodo(todoObj)
        // 清空输入款
        target.value=''


    }

    render() {
        return (
            <div className="todo-header">
                {/*键盘抬起事件*/}
                <input type="text" onKeyUp={this.handleKeyUp} placeholder="请输入你的任务名称，按回车键确认"/>
            </div>
        );
    }
}

export default Index;