// 引入Count的ui组件
import CountUi from "../../components/Count";
import {createIncrementAction,createDecrementAction,createIncrementAsyncAction} from "../../redux/count_action"

// 引入connect用于连接ui组件与redux
import {connect} from 'react-redux'

// mapStateToProps函数返回的对象的key就是传递給ui组件props的key,value就作为传递ui组件props的value
function mapStateToProps(state) {
    return {count: state}
}

// mapDispatchToProps函数返回的对象的key就是传递給ui组件props的key,value就作为操作状态的方法
function mapDispatchToProps(dispatch) {
    return {
        // 通知redux执行加法
        increment: number => dispatch(createIncrementAction(number)),
        decrement: number => dispatch(createDecrementAction(number)),
        incrementAsync: (number,time) => dispatch(createIncrementAsyncAction(number,time))
    }
}

// 创建 并暴露一个Count的容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUi)




