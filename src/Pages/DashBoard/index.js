import React, { useState } from "react";
import NavBar from "./components/nav";
import SideMenu from "./components/sidemenu";
import ProjectView from "./components/project";
import { Menu } from 'antd';
//import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';



const DashBoard = () => {

    const [ toggleState, setToggleState ] = useState(true)

    const handleClick = () => {
        setToggleState(!toggleState);
    }

    const { SubMenu } = Menu;

    //const handleClick = () => {
    //    console.log("I was clicked")
    //}

    return (
        <>
            <NavBar handleClick={handleClick} />
            <div style={{display: "flex"}}>
                <SideMenu toggleState={toggleState} />
                <ProjectView />
            </div>        
            
        </>
    )
};

export default DashBoard;