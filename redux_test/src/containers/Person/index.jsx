import React, {Component} from 'react';
import {nanoid} from 'nanoid'
import {connect} from 'react-redux'
import {addPerson} from "../../redux/actions/person";


class Person extends Component {

    addPerson = () => {
        const name = this.nameNode.value
        const age = this.ageNode.value
        const newPerson={id:nanoid(),name,age}
        this.props.addPerson(newPerson)
        this.nameNode.value=''
        this.ageNode.value=''
    }

    render() {
        return (
            <div>
                <input ref={c => this.nameNode = c} type="text" placeholder="输入名字"/>
                <input ref={c => this.ageNode = c} type="text" placeholder="输入年龄"/>
                <button onClick={this.addPerson}>添加</button>
                <h2>上方组件和为:{this.props.count}</h2>
                <ul>
                    {
                        this.props.personList.map((p)=>{
                            return (<li key={p.id}>{p.name}--{p.age}</li>

                            )
                        })
                    }

                </ul>
            </div>
        );
    }
}


export default connect(
    state=>({
        personList:state.persons,
        count:state.count}),
    {
        addPerson,
    }
)(Person);