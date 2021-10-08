import React, {Component} from 'react';
import './index.css'

import Item from '../Item'

class Index extends Component {

    render() {
        const {todos} = this.props
        return (
            <ul className="todo-main">
                {
                    todos.map((todoObj) => {
                        return <Item key={todoObj.id} {...todoObj}/>
                    })
                }

            </ul>
        );
    }
}

export default Index;