// 创建外壳组件
import React,{Component} from "react";
import Hello from "./components/hello/Hello";
import Welcome from "./components/Welcome/Welcome";

// 创建并暴露App
export default class App extends Component{
    render(){
        return(
            <div>
                <Hello/>
                <Welcome/>
            </div>
        )
    }
}

// 暴露app组件
// export default App