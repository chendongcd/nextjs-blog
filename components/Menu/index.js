import React ,{useCallback,useMemo}from 'react';
import { Menu } from 'antd';
import {
    PieChartOutlined,
    LogoutOutlined
} from '@ant-design/icons'
const MenuComp = ()=>{
    const menus = useMemo(()=>[
        {
            icon:'',
            name:'行情'
        },
        {
            icon:'',
            name:'资讯'
        },
        {
            icon:'',
            name:'我的资产'
        },
        {
            icon:'',
            name:'持仓'
        },
        {
            icon:'',
            name:'交易历史'
        },
        {
            icon:'',
            name:'账户'
        },
    ],[])
    const handleClick = useCallback((e)=>{
        console.log(e);
    },[])
    const renderMenuItems=useCallback(()=>{
        return menus.map((item)=><Menu.Item className="menu-item" key={item.name}>
            <PieChartOutlined />
            <div className="item-name">{item.name}</div>
        </Menu.Item>);
    },[]);
    return ( <Menu mode="inline"
                   onClick={handleClick}
                   selectable={false}
                   selectedKeys={[menus[1].name]}
                   className="custom-menu"
                   style={{ width: 100,height:'80%' }}>
        {renderMenuItems()}
        <Menu.Item className="menu-item menu-logout">
            <LogoutOutlined />
            <div className="item-name">退出</div>
        </Menu.Item>
    </Menu>);
}
export default MenuComp;