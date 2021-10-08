import React, {Component} from 'react';
import axios from "axios";

class App extends Component {

    getStudentData=()=>{
        // 发送网络请求
        axios.get('http://localhost:3000/api1/students').then(
            response =>{console.log('成功了',response.data)},
            error => {console.log('失败了',error.data)}
        )
    }

    getCartData=()=>{
        // 发送网络请求
        axios.get('http://localhost:3000/api2/cars').then(
            response =>{console.log('成功了',response.data)},
            error => {console.log('失败了',error.data)}
        )
    }

    render() {
        return (
            <div>
                <button onClick={this.getStudentData}>点我获取学生数据</button>
                <button onClick={this.getCartData}>点我获取车数据</button>
            </div>
        );
    }
}

export default App;