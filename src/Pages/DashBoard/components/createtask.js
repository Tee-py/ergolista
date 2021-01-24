import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { Input } from 'antd';
import { ProjectOutlined } from '@ant-design/icons';
import { isEmptyArray } from 'formik';
import { Alert } from 'antd';



const CreateTaskModal = (props) => {

  return (
    <>
      <Modal title="Add Task" 
        visible={props.isModalVisible} 
        onCancel={props.handleCancel}
        footer={""} 
        centered
      >
        {props.feedBack.message ? <Alert message={props.feedBack.message} type={props.feedBack.type} style={{marginBottom: "1rem"}} showIcon /> : ""}
        <Input size="large" onChange={(e)=>props.changeCurrentValue(e.currentTarget.value)} placeholder="Task Name" prefix={<ProjectOutlined />} />
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

export default CreateTaskModal;