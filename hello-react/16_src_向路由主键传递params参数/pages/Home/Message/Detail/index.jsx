import React, {Component} from 'react';

const data=[
    {id:"01",content:"你好中国"},
    {id:"02",content:"你好世界"},
    {id:"03",content:"你好地球"}
]

class Detail extends Component {

    render() {
        // 获取params的参数 是拼在路径后面的
        const {id,title} = this.props.match.params
        const findResult = data.find((dataObj)=>{
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