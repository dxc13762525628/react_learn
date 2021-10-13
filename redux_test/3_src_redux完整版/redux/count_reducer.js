/*
*  1. 创建一个为count组件服务的reducer,本质就是一个函数
*  2. reducer 会接到2个参数，一个旧prestate状态，一个新的action对象
* */
import {INCREMENT,DECREMENT} from './constant'

const initState = 0

export default function countReducer(preState, action) {

    const {type, data} = action

    switch (type) {
        // 加
        case INCREMENT:
            return preState + data
        // 减
        case DECREMENT:
            return preState - data
        // 初始化
        default:
            return initState

    }


}

