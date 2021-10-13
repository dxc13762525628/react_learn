/*
*  该文件专门用户暴露一个store对象，整个应用只有一个store对象
* */

// 创建redux的最为核心的store类型
import {createStore} from 'redux'

// 引入为count组件服务的redux
import countReducer from './count_reducer'

export default createStore(countReducer)