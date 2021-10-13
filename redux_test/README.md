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
4. count_reducer.js
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
    1. 新增文件 count_action.js 专门用于创建action对象
    2. 