import React, {Component} from 'react';
import ReactDOM from 'react-dom'

// 类式组件
// class Demo extends Component {
//     state={count:0}
//
//     myRef=React.createRef()
//
//     add = () => {
//         this.setState(state => ({count: state.count + 1}))
//     }
//
//     show = ()=>{
//        alert(this.myRef.current.value)
//     }
//
//     componentDidMount() {
//         this.timer = setInterval(()=>{
//             this.setState(state=>({count:state.count+1}))
//         },1000)
//     }
//
//     unmount=()=>{
//         ReactDOM.unmountComponentAtNode(document.getElementById('root'))
//     }
//
//     componentWillUnmount() {
//         clearInterval(this.timer)
//     }
//
//     render() {
//         return (
//             <div>
//                 <input type="text" ref={this.myRef}/>
//                 <h2>当前求和为{this.state.count}</h2>
//                 <button onClick={this.add}>点我+1</button>
//                 <button onClick={this.unmount}>卸载组件</button>
//                 <button onClick={this.show}>点击提示展示数据</button>
//             </div>
//         );
//     }
// }

// 函数式组件
function Demo() {
    // 获取count
    const [count, setCount] = React.useState(0)
    const myRef = React.useRef()

    React.useEffect(() => {
        // 函数体相当于componentDidMount []表示谁都不检测
        const timer = setInterval(() => {
            setCount(count => count + 1)
        }, 1000)

        // 返回的这个函数就是函数体相当于componentWillUnmount
        return ()=>{
            clearInterval(timer)
        }
    }, [])

    // 加的回调
    function add() {
        // 第一种写法
        // setCount(count+1)
        // 第二种
        setCount(count => count + 1)
    }

    // 卸载组件
    function unmount() {
        ReactDOM.unmountComponentAtNode(document.getElementById('root'))
    }

    function show(){
        alert(myRef.current.value)
    }

    return (
        <div>
            <input type="text" ref={myRef}/>
            <h2>当前求和为:{count}</h2>
            <button onClick={add}>点我+1</button>
            <button onClick={unmount}>卸载组件</button>
            <button onClick={show}>点击提示展示数据</button>
        </div>
    )
}

export default Demo;