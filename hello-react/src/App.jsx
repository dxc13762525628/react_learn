import React, {Component} from 'react';
import './App.css'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

class App extends Component {

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

    render() {
        const {todos} = this.state
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    <List todos={todos}/>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default App;