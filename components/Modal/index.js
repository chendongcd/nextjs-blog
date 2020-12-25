import React, { useState } from 'react';
import { Modal } from 'antd';
import RightContent from "../RightContent";
const ContentModal = ({
                          visible,
                          handleCancel
                      }) => {
    return (
        <>
            <Modal footer={null} visible={visible} onCancel={handleCancel} >
                <RightContent/>
            </Modal>
        </>
    );
};
export default ContentModal;