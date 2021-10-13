import React, {Component} from 'react';

class News extends Component {

    // 定时任务2秒跳转地址
    // componentDidMount() {
    //     setTimeout(() => {
    //         this.props.history.push("/home/message")
    //     }, 2000)
    // }

    render() {
        return (
            <div>
                <ul>
                    <li>news001</li>
                    <li>news002</li>
                    <li>news003</li>
                </ul>
            </div>
        );
    }
}

export default News;