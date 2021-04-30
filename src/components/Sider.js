
import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import NewPosts from '../components/NewPosts';
import PostList from '../components/PostList';
import Account from '../components/Account';
import Support from '../components/Support';
import YourPosts from '../components/YourPosts';
import TravelDestinations from '../components/TravelDestinations';
import TravelTips from '../components/TravelTips';
import CovidFacts from '../components/CovidFacts';

import 'antd/dist/antd.css';
import './Sider.css';
import { Menu, Avatar } from 'antd';
import { QuestionCircleOutlined, UserOutlined, InfoCircleOutlined, SettingOutlined, EditOutlined, UnorderedListOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const Sider = () =>  {


  
    return (
      <Router>
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
              <Link to="/yourPosts"><UnorderedListOutlined /> Your Posts</Link>
            </Menu.Item>

          </SubMenu>

          <SubMenu key="sub2" icon={<SettingOutlined />} title="Account Details">

            <Menu.Item key="5">
              <Link to="/account"><UserOutlined /> Account</Link> 
            </Menu.Item>
            
            <Menu.Item key="6">
              <Link to="/support"><QuestionCircleOutlined /> Support</Link> 
            </Menu.Item>

          </SubMenu>

          <SubMenu key="sub4" icon={<InfoCircleOutlined />} title="Travel Info">

            <Menu.Item key="7">
              <Link to="/travelDestinations"> Top 5 Travel Desinations</Link>
            </Menu.Item>
            
            <Menu.Item key="8">
              <Link to="/travelTips"> Travel Tips</Link>
            </Menu.Item>
            
            <Menu.Item key="9">
              <Link to="/covidFacts"> Covid facts</Link> 
            </Menu.Item>
          
          </SubMenu>
          
        </Menu>

        <Route path="/posts">
          <NewPosts />
          <PostList />
        </Route>
        <Route path="/yourPosts">
          <YourPosts />
        </Route>
        <Route path="/account">
          <Account />
        </Route>
        <Route path="/support">
          <Support />
        </Route>
        <Route path="/travelDestinations">
          <TravelDestinations />
        </Route>
        <Route path="/travelTips">
          <TravelTips />
        </Route>
        <Route path="/covidFacts">
          <CovidFacts />
        </Route>
      </Router>
      
    );
  }



export default Sider;