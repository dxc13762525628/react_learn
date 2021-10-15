## 1. 求和案例redux精简版
 1. 去除Count组件自身的状态
 2. src创建redux,redux创建store.js和count_reducer.js文件
 3. store.js
```javascript
/*
*  该文件专门用户暴露一个store对象，整个应用只有一个store对象
* */

// 创建redux的最为核心的store类型
import {createStore} from 'redux'

// 引入为count组件服务的redux
import countReducer from './count_reducer'

export default createStore(countReducer)
```
4. count.js
```javascript
/*
*  1. 创建一个为count组件服务的reducer,本质就是一个函数
*  2. reducer 会接到2个参数，一个旧prestate状态，一个新的action对象
* */

const initState = 0

export default function countReducer(preState, action) {

    const {type, data} = action

    switch (type) {
        // 加
        case 'increment':
            return preState + data
        // 减
        case 'decrement':
            return preState - data
        // 初始化
        default:
            return initState
    }
}
```
5. index.js监测状态的改变
```javascript
import store from "./redux/store";
store.subscribe(() => {
    // index里面开始检测
    ReactDOM.render(<App/>, document.getElementById('root'))
})

```

## 2求和案例完整版
 1. 新增文件 count.js 专门用于创建action对象
 2. constant.js 放置type的常量

## 3 异步action
 1. 明确 延迟动作不交给组件，交给action
 2. 何时需要action:想要对状态进行操作，但是具体是数据是靠异步返回的
 3. 具体编码\
  3.1 npm install redux-thunk 并配置在store中\
  3.2 创建action函数，不放回一般对象，返回一个函数，在函数执行异步任务\
  3.3 异步任务有结果后，分发一个同步action去执行真正操作
 4. 异步action不是必须写的，完全可以自己等待异步任务的结果再试执行同步action
    
## 4. 求和案例react-redux基本使用
1. 两个概念
    1. ui不能使用任何redux的api,只负责页面的程序，交互
    2. 容器组件：负责和redux的通信，将结果交给ui组件
    
2. 如何创建一个容器组件-靠react-redux的connect函数
    1. connect(mapStateToProps,mapDispatchToProps)(UI组件)
    2. mapStateToProps:映射状态，返回值是一个对象
    3. mapDispatchToProps.映射操作状态的方法，返回值是一个对象
    
3. 备注1：容器中的store是靠props传进去的，而不是在容器中直接引入
4. 备注2：mapDispatchToProps也可以是一个对象

## 5求和案例react-redux优化
1. 容器组件和ui组件整合一个文件
2. 无需自己给容器组件传递store,给<App/>包裹一个<Provider store={store}>即可
3. 使用了react-redux后不用在自己检测redux中的方法了，容器组件可以自己完成这个工作
4. mapDispatchToProps也可以写成一个简单的对象
5. 一个组件要和redux打交道要经过一下步骤
```javascript
1. 定义好ui组件--不暴露
2. 引入connect生成一个容器组件，并暴露
    connect(
        state=>({count: state}),
            {key:xxxxxAction}
    )(demoui)
3. 在ui组件中铜锅this.props.xxx读取和操作方法
```

## 6 求和案例react-redux数据共享版
1. 定义一个person组件，和count组件通过redux共享数据
2. 为Person组件编写，reducer,action.配置constant常量
3. 重点，几个容器组件进行合并combineReducers({key,value}),state变成了一个状态对象
4. 交给store的是总reducer，后续取数据需要取对应的key

## 7 开发则工具的使用
1. npm install redux-devtools-extension
```javascript
import {composeWithDevTools} from 'redux-devtools-extension'
// 注册中间件 第二个参数是开发则工具 参数就是异步的中间件
export default createStore(allReducer,composeWithDevTools(applyMiddleware(thunk)))
```

## 8 react-redux最终版
1. 所有变量名字规范，尽量触发简写模式
2. reducers文件夹中，编写index.js专门用于汇总并暴露所有的reducer

## 打包部署相关
```javascript
1. npm run build
2. 本地安装serve 
npm i serve -g 全局安装
serve build即可
```