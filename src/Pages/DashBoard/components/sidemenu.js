import React, { useState } from "react";
import { Menu, Button } from 'antd';
//import ListAltIcon from '@material-ui/icons/ListAlt';
//import PlaylistAddCheckIcon from '@material-ui/icons/PlaylistAddCheck';
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

  const testClick = (key, e) => {
    console.log(key.domEvent);
  }
    
    return (
      <div style={{ width: props.menuWidth }}>
        <Menu
          defaultSelectedKeys={[props.currentList.id]}
          defaultOpenKeys={['proj', "acct"]}
          onClick={props.changeCurrentList}
          mode="inline"
          theme="dark"
          inlineCollapsed={props.toggleState}
          style={{height: "100vh"}}
        >
          <SubMenu key="proj" icon={<ScheduleOutlined />} title="Projects">
            {
              props.userList.map(list=><Menu.Item 
                key={list.id} 
                icon={<TagsOutlined />}
              >{list.name}
            </Menu.Item>)
            }
          </SubMenu>
          <SubMenu key="acct" icon={<SettingOutlined />} title="Account">
            <Menu.Item key="prof" icon={<UserOutlined />}>Profile</Menu.Item>
            <Menu.Item key="pchg" icon={<KeyOutlined />}>Password Change</Menu.Item>
            <Menu.Item key="lgout" icon={<LogoutOutlined />}>Logout</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
};

export default SideMenu;