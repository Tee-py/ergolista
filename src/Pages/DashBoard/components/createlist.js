import React, { useState } from 'react';
import { Modal, Button } from 'antd';

const CreateListModal = (props) => {
  
  return (
    <>
      <Button type="primary" onClick={props.showModal}>
        Open Modal
      </Button>
      <Modal title="Basic Modal" visible={props.isModalVisible} onOk={props.handleOk} onCancel={props.handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default CreateListModal;