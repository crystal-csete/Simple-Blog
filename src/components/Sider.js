
import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import NewPosts from '../components/NewPosts';
import PostList from '../components/PostList';

import 'antd/dist/antd.css';
import './Sider.css';
import { Menu, Avatar } from 'antd';
import { QuestionCircleOutlined, UserOutlined, AppstoreOutlined, SettingOutlined, EditOutlined, UnorderedListOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const Sider = () =>  {


  
    return (
      <Router>

        <br />
        <br />
        <Menu
          className="sider_menu"
          defaultOpenKeys={['sub1']}
          mode="inline"
        >
          <SubMenu key="sub1" icon={<Avatar shape="square" size="small" style={{ marginRight: '2rem' }} icon={<UserOutlined />} />} title="Menu">
           
            <Menu.Item key="1">
              <Link to="/posts"><EditOutlined /> Posts</Link>
            </Menu.Item>

            <Menu.Item key="2">
              <Link to="/postList"><UnorderedListOutlined /> Your Posts</Link>
            </Menu.Item>

            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </SubMenu>

          <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Account Details">
            <Menu.Item key="5"><UserOutlined /> Account</Menu.Item>
            <Menu.Item key="6"><QuestionCircleOutlined /> Support</Menu.Item>
          </SubMenu>

          <SubMenu key="sub4" icon={<SettingOutlined />} title="Travel Info">
            <Menu.Item key="7">Top 5 Travel Desinations</Menu.Item>
            <Menu.Item key="8">Travel Tips</Menu.Item>
            <Menu.Item key="9">Covid facts</Menu.Item>
          </SubMenu>
          
        </Menu>

        <Route path="/posts">
          <NewPosts />
          <PostList />
        </Route>
        <Route path="/postList">
          <PostList />
        </Route>
      </Router>
      
    );
  }



export default Sider;