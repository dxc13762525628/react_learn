import React, {Component} from 'react';
import Item from '../ltem'
import './index.css'
import PropTypes from "prop-types";

class Index extends Component {

    // 对接收的props的类型，数据限制
    static propTypes = {
        todos: PropTypes.array.isRequired,
        changeTodo: PropTypes.func.isRequired,
        deleteToDo: PropTypes.func.isRequired,
    }

    render() {
        const {todos, changeTodo, deleteToDo} = this.props
        return (
            <ul className="todo-main">
                {
                    todos.map((todo) => {
                        return <Item key={todo.id} {...todo} changeTodo={changeTodo} deleteToDo={deleteToDo}/>
                    })
                }

            </ul>
        );
    }
}

export default Index;