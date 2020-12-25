import React ,{useCallback,useMemo,useState}from 'react';
import {Timeline, Menu, Dropdown, Layout} from 'antd';
import { DownOutlined,CheckOutlined } from '@ant-design/icons';
import ContentModal from "../Modal";

const MockData=[
    {
        title:'雪人股份：公司研制的 RefComp 一体机可应用于医疗冷链物流领域的制冷设备',
        desc:'雪人股份在互动平台表示，公司研制的 RefComp 一体机可以应用于医疗冷链物流领域的制冷设备，尤其是对药品贮藏、运输有冷藏、冷冻等温度要求的药品，可以保证冷链药品在运输过程中不间断的保持低温、恒温状态。当前，公司冷库一体机应用在河北疾控中心 “省级疫苗库” 项目上，还有应用在济南、郑州、无锡、四平、张家口等多地疾控中心的医疗物品冷藏项目。',
        time:Date(),
    },
    {
        title:'白酒指数翻红',
        desc:'白酒指数翻红，此前一度跌 4.45%。盘初一度跌停的金种子酒涨超 7% 领涨板块；ST 舍得和老白干酒均上涨，此前均一度封跌停板；五粮液、茅台也处于上涨中。',
        time:Date(),
    },
    {
        title:'韩国央行：将在 2021 年维持宽松政策。',
        time:Date(),
    },
    {
        title:'隔夜 shibor 报 0.7930%，上涨 18.40 个基点；7 天 shibor 报 2.1510%，上涨 37.70 个基点；3 个月 shibor 报 2.7660%，下跌 1.00 个基点。',
        time:Date(),
    }
];
const MenuComp=({
    menu,
    onSelect,
    activeItem
                })=>{
    const renderMenuItems=useCallback(()=>{
        return menu.map(item=>(
            <Menu.Item style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                width:'150px'
            }} key={item.name}>
                {item.name}
                {activeItem===item.name&&<CheckOutlined style={{lineHeight:'40px',color:'#52c41a'}}/>}
            </Menu.Item>
        ));
    },[menu,activeItem])
    const _onSelect=({ item, key })=>{
        onSelect(key);
    };
    return (
        <Menu selectedKeys={[activeItem]} onSelect={_onSelect}>
            {renderMenuItems()}
        </Menu>
    )
};

const TimelineItem=({
    item,
    _index,
                    onSelect,
                    activeItem
                })=>{
    const time = useMemo(()=>{
        return new Date(item.time).toLocaleString();
    },[item.time]);
    const bkColor = useMemo(()=>{
        return activeItem===_index?{backgroundColor: '#f2f2f2'}:null
    },[_index,activeItem]);
    const onClick=()=>{
        onSelect(_index);
    };
    return (
        <Timeline.Item onClick={onClick}>
            <div style={bkColor} className="item-card">
                <div className="item-time">{time}</div>
                <div className="item-title item-text">{item.title}</div>
                {item.desc&&<div className="item-desc item-text">{item.desc}</div>}
            </div>
        </Timeline.Item>
    )
};
const LeftContent = ()=>{
    const [active1,setActive1] = useState(null);
    const [active2,setActive2] = useState(null);
    const [activeTime,setActiveTime] = useState(null);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const menu1 = useMemo(()=>[
        {
            name:'全部资讯'
        },
        {
            name:'新闻'
        },
        {
            name:'快讯'
        },
    ],[]);
    const menu2 = useMemo(()=>[
        {
            name:'全部市场'
        },
        {
            name:'每股'
        },
        {
            name:'港股'
        },
    ],[]);

    const showModal = useCallback(() => {
        setIsModalVisible(true);
    },[]);

    const handleOk = useCallback(() => {
        setIsModalVisible(false);
    },[]);

    const handleCancel = useCallback(() => {
        setIsModalVisible(false);
    },[]);
    const onSelect1=useCallback((key)=>{
        setActive1(key);
    },[]);
    const onSelect2=useCallback((key)=>{
        setActive2(key);
    },[]);
    const onSelectTime=useCallback((key)=>{
        if(document.body.clientWidth<991){
            showModal();
        }
        setActiveTime(key);
    },[]);
    const renderTimeline=useCallback(()=>{
        return MockData.map((item,index)=>(
            <TimelineItem key={index.toString()} activeItem={activeTime} onSelect={onSelectTime} item={item} _index={index.toString()}/>
            ));
    },[activeTime,onSelectTime]);
    return ( <div className="left-content">
        <div className="left-header">
            <div>
            <span className="name">资讯</span>
                <Dropdown overlayClassName="custom-drop-down" overlay={<MenuComp activeItem={active1} onSelect={onSelect1} menu={menu1}/>} placement="bottomCenter" arrow>
                <DownOutlined className="icon-down"/>
                </Dropdown>
            </div>
            <div>
                <span className="name">全部</span>
                <Dropdown overlayClassName="custom-drop-down" overlay={<MenuComp activeItem={active2} onSelect={onSelect2} menu={menu2}/>} placement="bottomCenter" arrow>
                <DownOutlined className="icon-down"/>
                </Dropdown>
            </div>
        </div>
        <Timeline className="timeline">
            {renderTimeline()}
        </Timeline>
        <ContentModal visible={isModalVisible} handleCancel={handleCancel} showModal={showModal} handleOk={handleOk}/>
    </div>);
}
export default LeftContent;