import {ADD_PERSON} from '../constant'

// 初始化人的列表
const init_state=[{id:'001',name:'tom',age:18}]

export default function personReducer(preState=init_state,action){
    const {type,data}=action
    switch (type) {
        // 添加一个人
        case ADD_PERSON:
            return [data,...preState]
        default:
            return preState

    }
}


