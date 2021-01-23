import React, { useState, useEffect } from "react";
import NavBar from "./components/nav";
import SideMenu from "./components/sidemenu";
import ProjectView from "./components/project";
import { Menu } from 'antd';
import { fetchUserListRequest, createListRequest } from "../../network/user";
import CreateListModal from "./components/createlist";
//import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';



const DashBoard = () => {

    const [ toggleState, setToggleState ] = useState(true);
    const [ menuWidth, setMenuWidth ] = useState("");
    const [ userList, setUserList ] = useState([]);

    const [isModalVisible, setIsModalVisible] = useState(false);

    const [ modalState, setModalState ] = useState({buttonState: false, currentName: "", isLoading: false});

    const [createListFeedBack, setCreateListFeedBack ] = useState({});

    const changeCurrentValue = (value) => {
      setModalState({buttonState: !!value, currentName: value, isLoading: modalState.isLoading});
    }

    const handleButtonClick = () => {
        setModalState({buttonState: modalState.buttonState, currentName: modalState.currentName, isLoading: true});
        createListRequest({name:modalState.currentName}).then(
            resp=>{
            setCreateListFeedBack({message: "Successfully Created", type: "success"});
            setModalState({buttonState: false, currentName: "", isLoading: false});
            setUserList(userList.concat(resp.data))
            setIsModalVisible(false)},
            err=>{
                setCreateListFeedBack({message: "An Error Occured. Please Try Again", type: "error"});
                setModalState({buttonState: true, currentName: modalState.currentName, isLoading: false});
            }
        )
    }

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    //const createList = (data) => {
    //    createListRequest(data).then(resp=>console.log(resp.data));
    //}


    useEffect(()=>{
        fetchUserListRequest().then(
            resp=>{ setUserList(resp.data.lists); console.log(resp.data.lists) },
            err=>console.log(err)
        )
    }, [])

    const handleClick = () => {
        setToggleState(!toggleState);
        if (menuWidth === ""){
            setMenuWidth(256)
        } else {
            setMenuWidth("")
        }
    }

    const { SubMenu } = Menu;

    //const handleClick = () => {
    //    console.log("I was clicked")
    //}

    return (
        <>
            <NavBar handleClick={handleClick} showModal={showModal} />
            <CreateListModal 
                handleCancel={handleCancel}
                handleOk={handleOk}
                isModalVisible={isModalVisible}
                createListRequest={createListRequest}
                handleButtonClick={handleButtonClick}
                modalState={modalState}
                changeCurrentValue={changeCurrentValue}
                feedBack={createListFeedBack}
            />
            <div style={{display: "flex"}}>
                <SideMenu toggleState={toggleState} menuWidth={menuWidth} userList={userList} />
                <ProjectView />
            </div>        
            
        </>
    )
};

export default DashBoard;