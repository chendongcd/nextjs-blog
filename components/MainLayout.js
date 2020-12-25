import React,{useCallback,useState} from 'react';
import { Layout,Row, Col,  } from 'antd';
import './MainLayout.less';
const { Sider, Content } = Layout;
import HeaderComp from './Header';
import MenuComp from './Menu';
import LeftContent from './LeftContent';
import RightContent from './RightContent';
import ContentModal from './Modal';

const MainLayout = ()=>{

    return (<Layout className="main-layout">
        <HeaderComp/>
        <Layout style={{background:'#ffffff'}}>
            <Sider style={{background:'#fff'}} width={100}><MenuComp /></Sider>
            <Content>
                <Row>
                    <Col className="custom-col-8" span={8} >
                        <LeftContent />
                    </Col>
                    <Col className="custom-col-16" span={16} >
                        <RightContent />
                    </Col>
                </Row>
            </Content>
        </Layout>
    </Layout>);
}
export default MainLayout;