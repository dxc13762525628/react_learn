import React, {Component} from 'react';
import qs from 'querystring'

let obj = {name: 'tom', age: 18}

console.log(qs.stringify(obj))

const data = [
    {id: "01", content: "你好中国"},
    {id: "02", content: "你好世界"},
    {id: "03", content: "你好地球"}
]

class Detail extends Component {

    render() {
        // 获取params的参数 是拼在路径后面的
        // const {id,title} = this.props.match.params

        // 获取search的参数,是?id=1&title=2
        const {search} = this.props.location
        const {id, title} = qs.parse(search.slice(1)) // 将id=1&title=1 => {id:1,title:1}
        const findResult = data.find((dataObj) => {
            return dataObj.id === id
        })
        return (
            <ul>
                <li>ID:{id}</li>
                <li>TITLE:{title}</li>
                <li>CONTENT:{findResult.content}</li>
            </ul>
        );
    }
}

export default Detail;