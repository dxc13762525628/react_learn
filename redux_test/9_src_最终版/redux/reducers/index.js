// 该文件用于汇总所有的reducer
// 引入为count组件服务的redux
import count from './count'
// 引入为person组件服务的redux
import persons from './person'
import {combineReducers} from "redux";

export default combineReducers({
    count,
    persons
})
