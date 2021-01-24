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
    const [ currentList, setCurrentList ] = useState({});

    const [isModalVisible, setIsModalVisible] = useState(false);

    const [ listModalState, setListModalState ] = useState({buttonState: false, currentName: "", isLoading: false});

    const [createListFeedBack, setCreateListFeedBack ] = useState({});

    const changeCurrentListValue = (value) => {
      setListModalState({buttonState: !!value, currentName: value, isLoading: listModalState.isLoading});
    }

    const changeCurrentList = (key, e) => {
        var selectedList = userList.filter(list=>list.id==key.key);
        if (selectedList.length>0){
            setCurrentList(selectedList[0]);
        }
    }

    const handleButtonClick = () => {
        setListModalState({buttonState: listModalState.buttonState, currentName: listModalState.currentName, isLoading: true});
        createListRequest({name: listModalState.currentName}).then(
            resp=>{
            setCreateListFeedBack({message: "Successfully Created", type: "success"});
            setListModalState({buttonState: false, currentName: "", isLoading: false});
            setUserList(userList.concat(resp.data))
            setIsModalVisible(false)},
            err=>{
                setCreateListFeedBack({message: "An Error Occured. Please Try Again", type: "error"});
                setListModalState({buttonState: true, currentName: listModalState.currentName, isLoading: false});
            }
        )
    }

    const showListModal = () => {
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
            resp=>{ 
                setUserList(resp.data.lists);
                if (resp.data.lists.length>0){
                    setCurrentList(resp.data.lists[0])
                } },
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
            <NavBar handleClick={handleClick} showModal={showListModal} />
            <CreateListModal 
                handleCancel={handleCancel}
                handleOk={handleOk}
                isModalVisible={isModalVisible}
                createListRequest={createListRequest}
                handleButtonClick={handleButtonClick}
                modalState={listModalState}
                changeCurrentValue={changeCurrentListValue}
                feedBack={createListFeedBack}
            />
            <div style={{display: "flex"}}>
                <SideMenu 
                  toggleState={toggleState} 
                  menuWidth={menuWidth} 
                  changeCurrentList={changeCurrentList}
                  currentList={currentList}
                  userList={userList} 
                />
                <ProjectView currentList={currentList} />
            </div>        
            
        </>
    )
};

export default DashBoard;