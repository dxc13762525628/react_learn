import React, {Component} from 'react';
import './index.css'
import {render} from "@testing-library/react";

// 创建一个上下文
const UserNameContext = React.createContext()

class A extends Component {

    state = {username: 'tom'}

    render() {
        const {username}=this.state

        return (
            <div className="parent">
                <h3>我是A组件</h3>
                <h3>我是的用户名是:{username}</h3>
                {/*username可以传递对象*/}
                <UserNameContext.Provider value={username}>
                    <B/>
                </UserNameContext.Provider>
            </div>
        );
    }
}


class B extends Component {
    render() {
        return (
            <div className="child">
                <h3>我是B组件</h3>
                <h3>我从A接收得到的用户名是:???</h3>
                <C/>
            </div>
        );
    }
}

class C extends Component {
    // 声明接收context就可以拿到
    static contextType = UserNameContext
    render() {
        return (
            <div className="grand">
                <h3>我是C组件</h3>
                <h3>我从A接收得到的用户名是:{this.context}</h3>
            </div>
        );
    }
}

// function C(){
//
//     return (
//         <div className="grand">
//             <h3>我是C组件</h3>
//             <h3>我从A接收得到的用户名是:
//                 <UserNameContext.ConSumer>
//                     {
//                         value=>{
//                             return `${value}`
//                         }
//                     }
//                 </UserNameContext.ConSumer>
//                 </h3>
//         </div>
//     );
// }


export default A;