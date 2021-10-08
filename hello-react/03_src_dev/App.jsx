import React, {Component} from 'react';
import './App.css'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

class App extends Component {

    state = {
        todos:[
            {id:'001',done:true,content:'看书'},
            {id:'002',done:true,content:'敲代码'},
            {id:'003',done:false,content:'看电视'},
            {id:'004',done:true,content:'睡觉'},
        ]
    }

    render() {

        const {todos}=this.state

        return (
            <div id="root">
                <div className="todo-container">
                    <div className="todo-wrap">
                        <Header/>
                        <List todos={todos}/>
                        <Footer/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;