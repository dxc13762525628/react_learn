import React, {Component} from 'react';
import {Button,DatePicker} from 'antd';
import {WechatOutlined,SearchOutlined} from '@ant-design/icons';

const { RangePicker } = DatePicker;

class App extends Component {

    render() {
        return (
            <div>
                app...
                <button>点我</button>
                <Button type="primary">Primary Button</Button>
                <Button type="link">Link Button</Button>
                <Button type="primary" icon={<SearchOutlined />}>
                    Search
                </Button>
                <WechatOutlined/>
                <DatePicker/>
                <RangePicker />
            </div>
        );
    }
}

export default App;