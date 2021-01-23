import React, { useState, useEffect } from "react";
import NavBar from "./components/nav";
import SideMenu from "./components/sidemenu";
import ProjectView from "./components/project";
import { Menu } from 'antd';
import { fetchUserListRequest } from "../../network/user";
import CreateListModal from "./components/createlist";
//import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';



const DashBoard = () => {

    const [ toggleState, setToggleState ] = useState(true);
    const [ menuWidth, setMenuWidth ] = useState("");
    const [ userList, setUserList ] = useState([]);

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };


    useEffect(()=>{
        fetchUserListRequest().then(
            resp=>{ setUserList(resp.data.lists) },
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
            />
            <div style={{display: "flex"}}>
                <SideMenu toggleState={toggleState} menuWidth={menuWidth} userList = {userList} />
                <ProjectView />
            </div>        
            
        </>
    )
};

export default DashBoard;