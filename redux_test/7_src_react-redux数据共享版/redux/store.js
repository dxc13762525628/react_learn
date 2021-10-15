/*
*  该文件专门用户暴露一个store对象，整个应用只有一个store对象
* */

// 创建redux的最为核心的store类型
import {createStore, applyMiddleware, combineReducers} from 'redux'

// 引入为count组件服务的redux
import countReducer from './reducers/count'
import personReducer from './reducers/person'

// 引入redux-thunk 用于支持异步action
import thunk from 'redux-thunk'

const allReducer = combineReducers({
    he: countReducer,
    rens: personReducer,
})

// 注册中间件 第二个参数
export default createStore(allReducer, applyMiddleware(thunk))