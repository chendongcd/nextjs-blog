import React from 'react';
import { Layout,Select  } from 'antd';
const { Header} = Layout;
const { Option } = Select;

const HeaderComp = ()=>{
    return ( <Header className="header">
        <h1>LongBridge | 长桥</h1>
        <div className="right">
            <div className="header-alert">
                爱达力网络
                <span>
                        0.161
                    </span>
                <span>
                        +0.102
                    </span>
                <span>
                        0.10%
                    </span>
            </div>
            <Select
                showSearch
                style={{ width: 300 }}
                className="select-input"
                placeholder="搜索股票"
                optionFilterProp="children"
                filterOption={(input, option) =>{
                    return option.value.toLowerCase().indexOf(input.toLowerCase()) >= 0;
                }}
            >
                <Option value="阿里巴巴-SW0998">
                    <span>阿里巴巴-SW</span>
                    <span>0998</span>
                </Option>
                <Option value="美团点评-W03690"> <span>美团点评-W</span>
                    <span>03690</span></Option>
                <Option value="小米集团-W01810"> <span>小米集团-W</span>
                    <span>01810</span></Option>
            </Select>
        </div>
    </Header>);
}
export default HeaderComp;