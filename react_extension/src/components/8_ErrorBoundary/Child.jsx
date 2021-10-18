import React, {Component} from 'react';

class Child extends Component {
    state={
        users:[
            {id:'001',name:"tom",age:18},
            {id:'002',name:"jack",age:19},
            {id:'003',name:"peiqi",age:20},
        ]
    }

    render() {
        return (
            <div>
                <h3>我是孩子组件</h3>
                {
                    this.state.users.map((userObj)=>{
                        return <h4 key={userObj.id}>{userObj.name}---------{userObj.age}</h4>
                    })
                }
            </div>
        );
    }
}

export default Child;