import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { Input } from 'antd';
import { ProjectOutlined } from '@ant-design/icons';
import { isEmptyArray } from 'formik';



const CreateListModal = (props) => {

  
  
  return (
    <>
      <Modal title="Create Project" 
        visible={props.isModalVisible} 
        onOk={props.handleOk} 
        onCancel={props.handleCancel}
        footer={""} 
        centered
      >
        <Input size="large" onChange={(e)=>props.changeCurrentValue(e.currentTarget.value)} placeholder="Project Name" prefix={<ProjectOutlined />} />
        <Button 
          type="primary" 
          block style={{marginTop: "1rem"}} 
          disabled={!props.modalState.buttonState}
          onClick={props.handleButtonClick}
          loading={props.modalState.isLoading}
        >
            Submit
        </Button>
      </Modal>
    </>
  );
};

export default CreateListModal;