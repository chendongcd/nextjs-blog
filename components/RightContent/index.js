import React from 'react';
import { Image  } from 'antd';
import { WeiboCircleOutlined,WechatOutlined,TwitterOutlined } from '@ant-design/icons';
const RightContent = ()=>{

    return ( <div className="right-content">
       <h1>中京电子：元盛电子目前尚未进行苹果供应链认证</h1>
        <p>长桥 发布于 <span>{new Date().toLocaleString()}</span></p>
        <div className="main-content">
            有投资者在互动平台上向中京电子表示，媒体称京东方已经正式通过苹果认证，开始向 iPhone12 产品供货 OLED 面板。中京电子子公司元盛电子为京东方配套供应 OLED 显示相关产品，问此事能对公司业绩带来多大的增量。中京电子回复称：公司子公司元盛电子系京东方 OLED 等新型显示产品核心供应商之一，元盛电子目前尚未进行苹果供应链认证，公司会积极关注进展并结合市场和客户需求进行自我完善。
        </div>
        <Image
            width="70%"
            src="https://imagecdn.gaopinimages.com/133132396123.jpg?x-image-process=style/H650_WN_MC"
        />
        <div className="share">
            <WeiboCircleOutlined className="share-icon"/>
            <WechatOutlined className="share-icon"/>
            <TwitterOutlined className="share-icon"/>
        </div>
    </div>);
}
export default RightContent;