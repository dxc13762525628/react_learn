import React, {Component} from 'react';
import PubSub from 'pubsub-js'


class Search extends Component {

    search = async () => {
        // 发布消息
        // PubSub.publish('atguigu',{name:"tom",age:18})
        //获取用户输入
        // console.log(this.keyWordElement.value)
        //解构赋值连续写法 只有value是可以直接拿的 并且将value重命名为data
        const {keyWordElement: {value: keyWord}} = this
        // 发送请求前通知list更新状态
        //this.props.updateAppState({isFirst:false,isLoading: true})
        PubSub.publish('atguigu', {isFirst: false, isLoading: true})

        // console.log(keyWord)
        // 发送请求获取数据 -----使用axios
        /* axios.get(`/api1/search/users2?q=${keyWord}`).then(
             response => {
                 // 请求成功后通知app更新状态
                 //this.props.updateAppState({users:response.data.items,isLoading: false})
                 PubSub.publish('atguigu',{users:response.data.items,isLoading: false})
                 console.log('成功了', response.data)
             },
             error => {
                 // 失败后通知app更新状态
                 //this.props.updateAppState({err:error.message,isLoading: true})
                 PubSub.publish('atguigu',{err:error.message,isLoading: true})
                 console.log("失败了", error.message)
             }
         )*/


        // 使用fetch发送 未优化
        // fetch(`/api1/search/users2?q=${keyWord}`).then(
        //     response => {
        //         console.log('联系服务器成功了');
        //         return response.json()
        //     },
        //     error => {
        //         console.log('联系服务器失败了', error)
        //         return new Promise(()=>{}) // 中断promise
        //     },
        // ).then(
        //     response => {
        //         console.log('获取数据成功了', response);
        //     },
        //     error => {
        //         console.log('获取数据失败了', error);
        //         return new Promise(()=>{}) // 中断promise
        //     }
        // )

        // 优化版
        // fetch(`/api1/search/users2?q=${keyWord}`).then(
        //     response => {
        //         console.log('联系服务器成功了');
        //         return response.json()
        //     }
        // ).then(
        //     response => {
        //         console.log('获取数据成功了', response);
        //         return response
        //     }
        // ).catch(
        //     // 统一处理错误
        //     (error)=>{
        //         console.log("错误异常",error)
        //     }
        // )

        // 再优化 await后面是Promise对象
        try {
            const response = await fetch(`/api1/search/users2?q=${keyWord}`)
            const data = await response.json()
            // 发布消息
            PubSub.publish('atguigu',{users:data.items,isLoading: false})
            console.log(data)
        } catch (error) {
            console.log("请求出错")
            PubSub.publish('atguigu',{err:error.message,isLoading: true})
        }
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