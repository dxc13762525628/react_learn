import React, {Component} from 'react';
import Item from '../ltem'
import './index.css'

class Index extends Component {
    render() {
        const {todos} = this.props
        return (
            <ul className="todo-main">
                {
                    todos.map((todo) => {
                        return <Item key={todo.id} {...todo}/>
                    })
                }

            </ul>
        );
    }
}

export default Index;