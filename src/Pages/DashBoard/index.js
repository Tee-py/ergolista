import React, { useState, useEffect } from "react";
import NavBar from "./components/nav";
import SideMenu from "./components/sidemenu";
import ProjectView from "./components/project";
import { Menu } from 'antd';
import { fetchUserListRequest, createListRequest, createTaskRequest } from "../../network/user";
import CreateListModal from "./components/createlist";
import CreateTaskModal from "./components/createtask";
//import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';



const DashBoard = () => {

    const [ toggleState, setToggleState ] = useState(true);
    const [ menuWidth, setMenuWidth ] = useState("");
    const [ userList, setUserList ] = useState([]);
    const [ currentList, setCurrentList ] = useState({});

    //FOR CREATE PROJECT MODAL
    const [isListModalVisible, setIsListModalVisible] = useState(false);
    const [ listModalState, setListModalState ] = useState({buttonState: false, currentName: "", isLoading: false});
    const [createListFeedBack, setCreateListFeedBack ] = useState({});

    //FOR ADD TASK MODAL
    const [isTaskModalVisible, setIsTaskModalVisible] = useState(false);
    const [ taskModalState, setTaskModalState ] = useState({buttonState: false, currentName: "", isLoading: false});
    const [createTaskFeedBack, setCreateTaskFeedBack ] = useState({});


    //Function to Change the current Value of the CreateProject Modal Input
    const changeCurrentListValue = (value) => {
      setListModalState({buttonState: !!value, currentName: value, isLoading: listModalState.isLoading});
    }

    const changeCurrentList = (key, e) => {
        var selectedList = userList.filter(list=>list.id==key.key);
        if (selectedList.length>0){
            setCurrentList(selectedList[0]);
        }
    }

    //Function to be called when CreateProject Modal Button is Clicked
    const handleCreateListButtonClick = () => {
        setListModalState({buttonState: listModalState.buttonState, currentName: listModalState.currentName, isLoading: true});
        createListRequest({name: listModalState.currentName}).then(
            resp=>{
            setCreateListFeedBack({message: "Successfully Created", type: "success"});
            setListModalState({buttonState: false, currentName: "", isLoading: false});
            setUserList(userList.concat(resp.data))
            setIsListModalVisible(false)},
            err=>{
                setCreateListFeedBack({message: "An Error Occured. Please Try Again", type: "error"});
                setListModalState({buttonState: true, currentName: listModalState.currentName, isLoading: false});
            }
        )
    }

    const showListModal = () => {
        setIsListModalVisible(true);
    };

    //Function to Change the current Value of the Add Task Modal Input
    const changeCurrentTaskValue = (value) => {
      setTaskModalState({buttonState: !!value, currentName: value, isLoading: taskModalState.isLoading});
    }

    const showTaskModal = () => {
        setIsTaskModalVisible(true);
    };

    //Function to be called when CreateTask Modal Button is Clicked
    const handleCreateTaskButtonClick = () => {
        setTaskModalState({buttonState: taskModalState.buttonState, currentName: taskModalState.currentName, isLoading: true});
        createTaskRequest({name: taskModalState.currentName}, currentList.id).then(
            resp=>{
            setCreateTaskFeedBack({message: "Successfully Created", type: "success"});
            setTaskModalState({buttonState: false, currentName: "", isLoading: false});
            fetchUserListRequest().then(
                res=>{ 
                    setUserList(res.data.lists);
                },
                err=>console.log(err)
            )
            setIsTaskModalVisible(false)},
            err=>{
                setCreateTaskFeedBack({message: "An Error Occured. Please Try Again", type: "error"});
                setTaskModalState({buttonState: true, currentName: listModalState.currentName, isLoading: false});
            }
        )
    }

    const handleListModalCancel = () => {
        setIsListModalVisible(false);
    };

    const handleTaskModalCancel = () => {
        setIsTaskModalVisible(false);
    };


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
                handleCancel={handleListModalCancel}
                isModalVisible={isListModalVisible}
                createListRequest={createListRequest}
                handleButtonClick={handleCreateListButtonClick}
                modalState={listModalState}
                changeCurrentValue={changeCurrentListValue}
                feedBack={createListFeedBack}
            />
            <CreateTaskModal 
                handleCancel={handleTaskModalCancel}
                isModalVisible={isTaskModalVisible}
                createTaskRequest={createTaskRequest}
                handleButtonClick={handleCreateTaskButtonClick}
                modalState={taskModalState}
                changeCurrentValue={changeCurrentTaskValue}
                feedBack={createTaskFeedBack}
            />
            <div style={{display: "flex"}}>
                <SideMenu 
                  toggleState={toggleState} 
                  menuWidth={menuWidth} 
                  changeCurrentList={changeCurrentList}
                  currentList={currentList}
                  userList={userList} 
                />
                <ProjectView currentList={currentList} showModal={showTaskModal} />
            </div>        
            
        </>
    )
};

export default DashBoard;