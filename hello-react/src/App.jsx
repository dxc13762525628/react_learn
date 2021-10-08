import React, {Component} from 'react';
import './App.css'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

class App extends Component {
    // 状态在哪 操作状态的方法就在哪

    // 初始化状态
    state = {
        todos: [
            {id: "001", name: '吃饭', done: true},
            {id: "002", name: '睡觉', done: true},
            {id: "003", name: '打代码', done: false},
            {id: "004", name: '逛街', done: true},
        ]
    }
    // 添加一个todo对象
    addTodo = (todoObj) => {
        // const t = {id: this.state.todos.length+1,name:name,done:false}
        // this.setState({todos:[t,...this.state]})
        // console.log("data:",data)
        // 获取原todo
        const {todos} = this.state
        // 追加一个
        const newTodos = [todoObj, ...todos]
        // 更新状态
        this.setState({todos: newTodos})

    }

    // 更新todo 给item使用
    changeTodo = (id, done) => {
        const {todos} = this.state
        // 处理数据
        const newTodos = todos.map((todoObj) => {
            if (todoObj.id === id) {
                return {...todoObj, done: done}
            } else {
                return todoObj
            }
        })
        // 修改数据
        this.setState({todos: newTodos})

    }

    // 删除一个todo的方法
    deleteToDo = (id) => {
        // 获取原来的todos
        const {todos} = this.state
        // 删除指定id的todo对象
        const newTodos = todos.filter((todoObj) => {
            return todoObj.id !== id
        })
        // 重新赋值
        this.setState({todos: newTodos})

    }

    // 全选
    checkAllToDO = (done) => {
        // 获取原来的todos
        const {todos} = this.state
        // 加工数据
        const newToDo = todos.map((todoObj) => {
            return {...todoObj, done}
        })
        // 改数据
        this.setState({todos: newToDo})
    }

    // 清楚所有已完成的
    clearAllDone = () => {
        // 获取原来的todos
        const {todos} = this.state
        // 过滤数据
        const newTodos = todos.filter((todoObj) => {
            return !todoObj.done
        })
        // 更新状态
        this.setState({todos: newTodos})

    }

    render() {
        const {todos} = this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    <List todos={todos} changeTodo={this.changeTodo} deleteToDo={this.deleteToDo}/>
                    <Footer todos={todos} checkAllToDO={this.checkAllToDO} clearAllDone={this.clearAllDone}/>
                </div>
            </div>
        );
    }
}

export default App;