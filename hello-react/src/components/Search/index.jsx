import React, {Component} from 'react';
import axios from "axios";


class Search extends Component {

    search = () => {
        // 获取用户输入
        // console.log(this.keyWordElement.value)
        // 解构赋值连续写法 只有value是可以直接拿的 并且将value重命名为data
        const {keyWordElement: {value: keyWord}} = this
        console.log(keyWord)
        // 发送请求获取数据
        axios.get(`/api1/search/users?q=${keyWord}`).then(
            response => {
                console.log('成功了', response.data)
            },
            error => {
                console.log("失败了", error.data)
            }
        )

    }


    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">搜索github用户</h3>
                <div>
                    <input ref={c => this.keyWordElement = c} type="text" placeholder="输入关键词点击搜索"/>&nbsp;
                    <button onClick={this.search}>搜索</button>
                </div>
            </section>
        );
    }
}

export default Search;