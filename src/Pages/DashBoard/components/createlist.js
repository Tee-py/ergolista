import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { Input } from 'antd';
import { ProjectOutlined } from '@ant-design/icons';

const CreateListModal = (props) => {
  
  return (
    <>
      <Modal title="Create Project" visible={props.isModalVisible} onOk={props.handleOk} onCancel={props.handleCancel} centered>
        <Input size="large" placeholder="Project Name" prefix={<ProjectOutlined />} />
      </Modal>
    </>
  );
};

export default CreateListModal;