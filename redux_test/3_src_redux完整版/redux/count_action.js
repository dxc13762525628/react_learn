import {INCREMENT, DECREMENT} from './constant'
/*
* 为count组件生产action对象的
* */

// 加法
// function createIncrementAction(data){
//     return {type:"increment",data}
// }

// 减法
// function createDecrementAction(data){
//     return {type:"decrement",data}
// }

// 简写 箭头函数
export const createIncrementAction = data => ({type: INCREMENT, data})
export const createDecrementAction = data => ({type: DECREMENT, data})

