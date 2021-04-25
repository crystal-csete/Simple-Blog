import React from "react";

import Sider from "./components/Sider";
import Footer from './components/Footer';

import { Typography } from 'antd';

import "./App.css";

const App = () => {
  const { Title } = Typography;

  return (
    <div className="app">
      <Title level={3}>Welcome to my Travel blog Page!</Title>
      <Sider />
      <Footer />
    </div>
  );
};

export default App;
