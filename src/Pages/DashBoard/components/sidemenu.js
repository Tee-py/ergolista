import React, { useState } from "react";
import { Menu, Button } from 'antd';
import {
  SettingOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  ScheduleOutlined,
  LogoutOutlined,
  KeyOutlined,
  UserOutlined,
  TagsOutlined
} from '@ant-design/icons';

const { SubMenu } = Menu;

const SideMenu = (props) => {
    
    

    return (
      <div style={{ width: props.menuWidth }}>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          inlineCollapsed={props.toggleState}
          style={{height: "100vh"}}
        >
          <SubMenu key="sub1" icon={<ScheduleOutlined />} title="Projects">
            <Menu.Item key="5" icon={<TagsOutlined />}>E-Commerce App</Menu.Item>
            <Menu.Item key="6" icon={<TagsOutlined />}>Trading Bot</Menu.Item>
            <Menu.Item key="7" icon={<TagsOutlined />}>Telegram Bot</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<SettingOutlined />} title="Account">
            <Menu.Item key="9" icon={<UserOutlined />}>Profile</Menu.Item>
            <Menu.Item key="10" icon={<KeyOutlined />}>Password Change</Menu.Item>
            <Menu.Item key="11" icon={<LogoutOutlined />}>Logout</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
};

export default SideMenu;