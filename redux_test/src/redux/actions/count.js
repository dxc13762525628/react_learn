import {INCREMENT, DECREMENT} from '../constant'
/*
* 为count组件生产action对象的
* */

// 同步action指 值为obj对象 简写 箭头函数
export const increment = data => ({type: INCREMENT, data})
export const decrement = data => ({type: DECREMENT, data})

// 异步action 就是指返回一个函数 不是必须的
export const incrementAsync = (data,time)=>{
    // 返回的是一个函数 返回的函数本事就是store的
    return (dispatch)=>{
        setTimeout(()=>{
            dispatch(increment(data*1))
        },time)
}}
