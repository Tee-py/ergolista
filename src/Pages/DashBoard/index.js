import React, { useState } from "react";
import NavBar from "./components/nav";
import SideMenu from "./components/sidemenu";
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';



const DashBoard = () => {

    const { SubMenu } = Menu;

    const handleClick = () => {
        console.log("I was clicked")
    }

    return (
        <>
            <NavBar />        
            <SideMenu />
        </>
    )
};

export default DashBoard;