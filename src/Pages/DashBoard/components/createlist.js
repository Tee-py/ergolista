import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { Input } from 'antd';
import { ProjectOutlined } from '@ant-design/icons';
import { isEmptyArray } from 'formik';



const CreateListModal = (props) => {

  const [ modalState, setModalState ] = useState({buttonState: false, currentName: "", isLoading: false});

  const changeCurrentValue = (value) => {
    setModalState({buttonState: !!value, currentName: value, isLoading: modalState.isLoading});
  }

  const handleButtonClick = () => {
      setModalState({buttonState: modalState.buttonState, currentName: modalState.currentName, isLoading: true});
      props.createListRequest({name:modalState.currentName}).then(
        resp=>{
          console.log(resp.data);
          setModalState({buttonState: false, currentName: "", isLoading: false});
        })
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
        <Button 
          type="primary" 
          block style={{marginTop: "1rem"}} 
          disabled={!modalState.buttonState}
          onClick={handleButtonClick}
          loading={modalState.isLoading}
        >
            Submit
        </Button>
      </Modal>
    </>
  );
};

export default CreateListModal;