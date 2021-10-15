/*
*  该文件专门用户暴露一个store对象，整个应用只有一个store对象
* */

// 创建redux的最为核心的store类型
import {createStore, applyMiddleware} from 'redux'
import reducer from './reducers'

// 引入redux-thunk 用于支持异步action
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

// 注册中间件 第二个参数是开发则工具 参数就是异步的中间件
export default createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))