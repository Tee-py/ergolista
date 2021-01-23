import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { Input } from 'antd';
import { ProjectOutlined } from '@ant-design/icons';
import { isEmptyArray } from 'formik';


const CreateListModal = (props) => {

  const [ modalState, setModalState ] = useState({buttonState: false, currentName: ""});

  const changeCurrentValue = (value) => {
      if (!isEmptyArray(value)){
        setModalState({buttonState: true, currentName: value});
      }
  }
  
  return (
    <>
      <Modal title="Create Project" 
        visible={props.isModalVisible} 
        onOk={props.handleOk} 
        onCancel={props.handleCancel}
        footer={""} 
        centered
      >
        <Input size="large" onChange={(e)=>changeCurrentValue(e.currentTarget.value)} placeholder="Project Name" prefix={<ProjectOutlined />} />
        <Button type="primary" block style={{marginTop: "1rem"}} disabled={!modalState.buttonState}>
            Submit
        </Button>
      </Modal>
    </>
  );
};

export default CreateListModal;